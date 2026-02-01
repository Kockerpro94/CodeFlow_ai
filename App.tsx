/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { AIPanel } from './components/AIPanel';
import { DashboardView } from './components/views/DashboardView';
import { WorkspaceView } from './components/views/WorkspaceView';
import { KanbanView } from './components/views/KanbanView';
import { AdminView } from './components/views/AdminView';
import { PluginsView } from './components/views/PluginsView';
import { LoginView } from './components/views/LoginView';
import { View } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.DASHBOARD);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAIPanelOpen, setIsAIPanelOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const renderView = () => {
    switch (currentView) {
      case View.DASHBOARD:
        return <DashboardView onChangeView={setCurrentView} />;
      case View.WORKSPACE:
        return <WorkspaceView />;
      case View.KANBAN:
        return <KanbanView />;
      case View.ADMIN:
        return <AdminView />;
      case View.PLUGINS:
        return <PluginsView />;
      default:
        return <DashboardView onChangeView={setCurrentView} />;
    }
  };

  if (!isAuthenticated) {
    return <LoginView onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="flex h-screen w-full bg-background-dark text-white font-display overflow-hidden relative">
      
      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-background-dark border-b border-[#282e39] flex items-center justify-between px-4 z-40">
        <button 
          onClick={() => setIsSidebarOpen(true)}
          className="p-2 text-white hover:bg-[#282e39] rounded-lg"
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
        
        <div className="flex items-center gap-2">
          <div className="size-6 rounded bg-gradient-to-br from-primary to-accent-cyan flex items-center justify-center text-white font-bold text-xs">
            C
          </div>
          <span className="font-bold text-sm tracking-tight">CodeFlow</span>
        </div>

        <button 
          onClick={() => setIsAIPanelOpen(!isAIPanelOpen)}
          className="p-2 text-accent-cyan hover:bg-[#282e39] rounded-lg relative"
        >
          <span className="material-symbols-outlined">smart_toy</span>
          <span className="absolute top-2 right-2 size-2 bg-accent-neon rounded-full border border-background-dark animate-pulse"></span>
        </button>
      </header>

      {/* Navigation Sidebar */}
      <Sidebar 
        currentView={currentView} 
        onViewChange={setCurrentView}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden bg-surface-dark relative pt-16 lg:pt-0 transition-all duration-300">
        {renderView()}
      </main>

      {/* Persistent AI Assistant */}
      <AIPanel 
        currentView={currentView}
        isOpen={isAIPanelOpen}
        onClose={() => setIsAIPanelOpen(false)}
      />
    </div>
  );
};

export default App;
