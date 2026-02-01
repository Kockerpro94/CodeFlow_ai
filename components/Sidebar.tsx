/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { View } from '../types';

interface SidebarProps {
  currentView: View;
  onViewChange: (view: View) => void;
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentView, onViewChange, isOpen, onClose }) => {
  
  const NavItem = ({ view, icon, label, disabled = false }: { view?: View, icon: string, label: string, disabled?: boolean }) => {
    const isActive = currentView === view;
    
    return (
      <div
        onClick={() => {
          if (!disabled && view) {
            onViewChange(view);
            onClose();
          }
        }}
        className={`
          flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 cursor-pointer relative overflow-hidden group
          ${isActive 
            ? 'bg-primary/20 text-white' 
            : 'text-[#9da6b9] hover:bg-white/5 hover:translate-x-1'}
          ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        `}
      >
        {isActive && (
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-r-full" />
        )}
        <span className={`material-symbols-outlined ${isActive ? 'text-primary' : ''}`}>{icon}</span>
        <span className="text-sm font-medium">{label}</span>
      </div>
    );
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm transition-opacity duration-300"
            onClick={onClose}
          />
      )}

      {/* Sidebar Container */}
      <aside 
        className={`
          fixed inset-y-0 left-0 z-50 w-64 bg-background-dark border-r border-[#282e39] flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
          lg:translate-x-0 lg:static lg:h-full lg:flex-shrink-0
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="p-6 flex items-center gap-3">
          <div className="size-8 rounded-lg bg-gradient-to-br from-primary to-accent-cyan flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary/20 transition-transform duration-500 hover:rotate-180">
            C
          </div>
          <h1 className="text-white text-lg font-bold tracking-tight">CodeFlow</h1>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 py-2 flex flex-col gap-2">
          <NavItem view={View.DASHBOARD} icon="dashboard" label="Dashboard" />
          <NavItem icon="folder_open" label="Projects" disabled />
          <NavItem view={View.WORKSPACE} icon="smart_toy" label="AI Workspace" />
          <NavItem view={View.KANBAN} icon="view_kanban" label="Project Canvas" />
          <NavItem view={View.PLUGINS} icon="extension" label="Marketplace" />
          <NavItem icon="bar_chart" label="Analytics" disabled />
          <NavItem view={View.ADMIN} icon="admin_panel_settings" label="Admin & Billing" />
        </nav>

        <div className="p-4 border-t border-[#282e39]">
          <NavItem icon="settings" label="Settings" disabled />
          <div className="mt-4 flex items-center gap-3 px-3">
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8 bg-slate-700 border border-slate-600 flex items-center justify-center">
               <span className="text-xs font-bold text-white">AM</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-medium text-white">Alex Morgan</span>
              <span className="text-[10px] text-[#9da6b9]">Admin Workspace</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
