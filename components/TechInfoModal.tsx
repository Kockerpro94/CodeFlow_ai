/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { X, Cpu, Code2, Layers, Palette } from 'lucide-react';

interface TechInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TechInfoModal: React.FC<TechInfoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 font-sans animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl flex flex-col max-h-[85vh] border-4 border-indigo-100 overflow-hidden animate-in zoom-in-95 duration-300">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-indigo-50 bg-gradient-to-r from-indigo-50 to-white">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-indigo-100 text-indigo-600">
              <Cpu size={24} strokeWidth={2.5} />
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-slate-800">
                System Architecture
              </h2>
              <p className="text-xs font-bold text-indigo-400 uppercase tracking-wide">
                Gemini 3 • Voxel Engine
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors"
          >
            <X size={24} strokeWidth={3} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/50">
          
          <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
            <h3 className="flex items-center gap-2 text-sm font-black text-slate-700 uppercase tracking-wider mb-3">
               <span className="material-symbols-outlined text-lg text-emerald-500">data_object</span>
               Structured JSON Output
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              The app uses the <code className="bg-slate-100 px-1.5 py-0.5 rounded text-indigo-600 font-mono text-xs">responseSchema</code> feature of the Gemini API to force the model to return data in a strict JSON format. It requests an array of objects, where each object represents a single voxel block with <span className="font-semibold">x, y, z</span> coordinates and a hex color code.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
            <h3 className="flex items-center gap-2 text-sm font-black text-slate-700 uppercase tracking-wider mb-3">
               <span className="material-symbols-outlined text-lg text-amber-500">psychology</span>
               Prompt Engineering
            </h3>
            <ul className="space-y-3">
              <li className="flex gap-3 text-sm text-slate-600">
                <span className="shrink-0 size-6 bg-amber-50 rounded-full flex items-center justify-center text-amber-600 font-bold text-xs">1</span>
                <span>
                  <strong className="text-slate-800">Context:</strong> Defines the model persona as a "Voxel Architect."
                </span>
              </li>
              <li className="flex gap-3 text-sm text-slate-600">
                <span className="shrink-0 size-6 bg-amber-50 rounded-full flex items-center justify-center text-amber-600 font-bold text-xs">2</span>
                <span>
                  <strong className="text-slate-800">Constraints:</strong> Enforces rules like "use 150-600 voxels," "center the model," and "ensure physical plausibility."
                </span>
              </li>
              <li className="flex gap-3 text-sm text-slate-600">
                <span className="shrink-0 size-6 bg-amber-50 rounded-full flex items-center justify-center text-amber-600 font-bold text-xs">3</span>
                <span>
                  <strong className="text-slate-800">Morphing Logic:</strong> During a rebuild, the app extracts the palette from the current scene and instructs Gemini to prioritize those specific colors, simulating reusing bricks.
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
            <h3 className="flex items-center gap-2 text-sm font-black text-slate-700 uppercase tracking-wider mb-3">
               <span className="material-symbols-outlined text-lg text-sky-500">deployed_code</span>
               Engine Integration
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-3 bg-sky-50 rounded-xl border border-sky-100">
                <h4 className="font-bold text-sky-700 text-xs mb-1 uppercase">New Builds</h4>
                <p className="text-xs text-sky-900/70">The engine wipes the scene and places blocks instantly at the AI-generated coordinates.</p>
              </div>
              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100">
                <h4 className="font-bold text-emerald-700 text-xs mb-1 uppercase">Rebuilds</h4>
                <p className="text-xs text-emerald-900/70">The engine calculates a flight path for every block, animating them from old to new positions.</p>
              </div>
            </div>
          </div>

        </div>

        <div className="p-6 border-t border-indigo-50 bg-white flex justify-end">
           <button 
             onClick={onClose}
             className="px-6 py-3 bg-slate-800 text-white text-sm font-bold rounded-xl hover:bg-slate-900 transition-colors shadow-lg shadow-slate-900/20"
           >
             Close Specs
           </button>
        </div>
      </div>
    </div>
  );
};
