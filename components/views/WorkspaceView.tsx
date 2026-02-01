/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useRef, useEffect, useState } from 'react';
import { VoxelEngine } from '../../services/VoxelEngine';
import { UIOverlay } from '../UIOverlay';
import { AppState, SavedModel, VoxelData } from '../../types';
import { Generators } from '../../utils/voxelGenerators';
import { PromptModal } from '../PromptModal';
import { JsonModal } from '../JsonModal';
import { TechInfoModal } from '../TechInfoModal';
import { WelcomeScreen } from '../WelcomeScreen';
import { AiService } from '../../services/AiService';

export const WorkspaceView: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<VoxelEngine | null>(null);

  const [appState, setAppState] = useState<AppState>(AppState.STABLE);
  const [voxelCount, setVoxelCount] = useState(0);
  const [currentBaseModel, setCurrentBaseModel] = useState<string>('Eagle');
  const [isAutoRotate, setIsAutoRotate] = useState(true);
  const [isInfoVisible, setIsInfoVisible] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  
  // Modals
  const [showPromptModal, setShowPromptModal] = useState(false);
  const [promptMode, setPromptMode] = useState<'create' | 'morph'>('create');
  const [showJsonModal, setShowJsonModal] = useState(false);
  const [showTechModal, setShowTechModal] = useState(false);
  const [isImportJson, setIsImportJson] = useState(false);
  const [jsonExportData, setJsonExportData] = useState('');

  // Collections
  const [customBuilds, setCustomBuilds] = useState<SavedModel[]>([]);
  const [customRebuilds, setCustomRebuilds] = useState<SavedModel[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Init Engine
    const engine = new VoxelEngine(
      containerRef.current,
      setAppState,
      setVoxelCount
    );
    engineRef.current = engine;

    // Initial Load
    engine.loadInitialModel(Generators.Eagle());

    const handleResize = () => engine.handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      engine.cleanup();
    };
  }, []);

  // --- Handlers ---

  const handleDismantle = () => {
    engineRef.current?.dismantle();
  };

  const handleRebuild = (type: 'Eagle' | 'Cat' | 'Rabbit' | 'Twins') => {
    if (type === 'Eagle' && currentBaseModel !== 'Eagle') {
        engineRef.current?.rebuild(Generators.Eagle());
        setCurrentBaseModel('Eagle');
        return;
    }
    
    // Only standard presets if base is Eagle (simplified logic for demo)
    if (Generators[type]) {
        engineRef.current?.rebuild(Generators[type]());
    }
  };

  const handleNewScene = (type: 'Eagle') => {
    if (appState !== AppState.STABLE) return;
    engineRef.current?.loadInitialModel(Generators.Eagle());
    setCurrentBaseModel('Eagle');
  };

  const handlePromptCreate = () => {
    setPromptMode('create');
    setShowPromptModal(true);
  };

  const handlePromptMorph = () => {
    setPromptMode('morph');
    setShowPromptModal(true);
  };

  const handleAiSubmit = async (prompt: string) => {
    setIsGenerating(true);
    try {
        let voxels: VoxelData[] = [];
        
        if (promptMode === 'create') {
            voxels = await AiService.generateBuild(prompt);
            engineRef.current?.loadInitialModel(voxels);
            
            // Save to history
            setCustomBuilds(prev => [...prev, { name: prompt.slice(0, 15), data: JSON.stringify(voxels) }]);
            setCurrentBaseModel('Custom');
        } else {
            // Morphing requires current colors to simulate "reusing blocks"
            const currentColors = engineRef.current?.getUniqueColors() || [];
            voxels = await AiService.generateMorph(prompt, currentColors);
            
            engineRef.current?.rebuild(voxels);
            
            // Save to history
            setCustomRebuilds(prev => [...prev, { name: prompt.slice(0, 15), data: JSON.stringify(voxels) }]);
        }
    } catch (e) {
        console.error(e);
        alert("AI Generation failed. Please check your API Key or try again.");
    } finally {
        setIsGenerating(false);
    }
  };

  const handleShowJson = () => {
    if (!engineRef.current) return;
    setJsonExportData(engineRef.current.getJsonData());
    setIsImportJson(false);
    setShowJsonModal(true);
  };

  const handleImportJsonClick = () => {
    setIsImportJson(true);
    setShowJsonModal(true);
  };

  const handleImportData = (jsonStr: string) => {
    try {
        const data = JSON.parse(jsonStr);
        // Basic validation - check if array
        if (Array.isArray(data)) {
            // Map JSON format back to VoxelData format
            const voxels: VoxelData[] = data.map((v: any) => ({
                x: v.x, 
                y: v.y, 
                z: v.z, 
                color: parseInt(v.c.replace('#', '0x'), 16)
            }));
            engineRef.current?.loadInitialModel(voxels);
            setCurrentBaseModel('Imported');
        }
    } catch (e) {
        alert("Failed to parse JSON");
    }
  };

  return (
    <div className="relative w-full h-full bg-[#f0f2f5] overflow-hidden">
      {/* 3D Container */}
      <div ref={containerRef} className="absolute inset-0 z-0" />

      {/* UI Overlay */}
      <UIOverlay
        voxelCount={voxelCount}
        appState={appState}
        currentBaseModel={currentBaseModel}
        customBuilds={customBuilds}
        customRebuilds={customRebuilds}
        isAutoRotate={isAutoRotate}
        isInfoVisible={isInfoVisible}
        isGenerating={isGenerating}
        onDismantle={handleDismantle}
        onRebuild={handleRebuild}
        onNewScene={handleNewScene}
        onSelectCustomBuild={(m) => {
            engineRef.current?.loadInitialModel(JSON.parse(m.data));
            setCurrentBaseModel('Custom');
        }}
        onSelectCustomRebuild={(m) => engineRef.current?.rebuild(JSON.parse(m.data))}
        onPromptCreate={handlePromptCreate}
        onPromptMorph={handlePromptMorph}
        onShowJson={handleShowJson}
        onImportJson={handleImportJsonClick}
        onToggleRotation={() => {
            const next = !isAutoRotate;
            setIsAutoRotate(next);
            engineRef.current?.setAutoRotate(next);
        }}
        onToggleInfo={() => setShowTechModal(true)}
      />

      {/* Modals */}
      <PromptModal 
        isOpen={showPromptModal}
        mode={promptMode}
        onClose={() => setShowPromptModal(false)}
        onSubmit={handleAiSubmit}
      />

      <JsonModal
        isOpen={showJsonModal}
        onClose={() => setShowJsonModal(false)}
        data={jsonExportData}
        isImport={isImportJson}
        onImport={handleImportData}
      />

      <TechInfoModal
        isOpen={showTechModal}
        onClose={() => setShowTechModal(false)}
      />

      <WelcomeScreen visible={!isGenerating && appState === AppState.STABLE && voxelCount > 0 && !showTechModal && !showPromptModal && !showJsonModal} />
    </div>
  );
};
