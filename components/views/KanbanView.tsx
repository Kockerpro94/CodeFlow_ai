/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

export const KanbanView: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-[#101622] relative">
      <header className="h-16 flex items-center justify-between px-4 sm:px-6 border-b border-[#282e39] bg-background-dark/50 backdrop-blur-md z-10">
        <div className="flex items-center gap-4">
          <h2 className="text-white text-base sm:text-lg font-bold leading-tight">Project Canvas</h2>
          <div className="h-6 w-px bg-[#282e39] mx-2 hidden sm:block"></div>
          <div className="hidden sm:flex items-center gap-2">
            <button className="flex items-center gap-2 px-3 py-1.5 bg-[#1f2937] border border-[#282e39] rounded-lg text-xs text-white hover:bg-[#282e39] transition-colors">
              <span className="material-symbols-outlined text-[16px] text-[#9da6b9]">date_range</span>
              <span>Sprint 24</span>
            </button>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-accent-cyan/10 border border-accent-cyan/20 rounded-lg text-xs text-accent-cyan hover:bg-accent-cyan/20 transition-colors">
            <span className="material-symbols-outlined text-[16px]">smart_toy</span>
            <span>Auto-Assign</span>
          </button>
          <button className="p-2 bg-primary hover:bg-blue-600 text-white rounded-lg transition-colors">
            <span className="material-symbols-outlined text-[20px]">add</span>
          </button>
        </div>
      </header>

      <div className="flex-1 overflow-x-auto overflow-y-hidden p-4 sm:p-6 custom-scrollbar">
        <div className="flex h-full gap-4 sm:gap-6 min-w-max">
          {/* Column 1: Backlog */}
          <div className="flex flex-col w-72 sm:w-80 bg-[#101622] rounded-xl border border-[#282e39] h-full flex-shrink-0">
            <div className="p-4 border-b border-[#282e39] flex justify-between items-center bg-[#101622] rounded-t-xl">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-slate-500"></span>
                <h3 className="text-white font-semibold text-sm">Backlog</h3>
                <span className="text-[#9da6b9] text-xs bg-[#1f2937] px-1.5 py-0.5 rounded-md">8</span>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-3 flex flex-col gap-3">
              <div className="bg-[#1f2937] p-3 rounded-lg border border-[#282e39] hover:border-[#4b5563] cursor-pointer group shadow-sm">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[10px] font-semibold text-[#9da6b9] bg-[#282e39] px-1.5 py-0.5 rounded uppercase tracking-wider">CX-1042</span>
                </div>
                <h4 className="text-white text-sm font-medium mb-3 leading-snug group-hover:text-primary transition-colors">Update authentication flow for mobile users</h4>
                <div className="flex items-center justify-between mt-auto">
                  <span className="bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 px-1.5 py-0.5 rounded text-[10px] font-medium">Med</span>
                </div>
              </div>
              <div className="bg-[#1f2937] p-3 rounded-lg border border-[#282e39] hover:border-[#4b5563] cursor-pointer group shadow-sm opacity-60">
                <h4 className="text-white text-sm font-medium mb-3">Legacy database cleanup script</h4>
                <div className="flex items-center justify-between mt-auto">
                  <span className="bg-slate-500/10 text-slate-400 border border-slate-500/20 px-1.5 py-0.5 rounded text-[10px] font-medium">Low</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: In Progress */}
          <div className="flex flex-col w-72 sm:w-80 bg-[#101622] rounded-xl border border-[#282e39] h-full flex-shrink-0">
            <div className="p-4 border-b border-[#282e39] flex justify-between items-center bg-[#101622] rounded-t-xl">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-primary animate-pulse"></span>
                <h3 className="text-white font-semibold text-sm">In Progress</h3>
                <span className="text-[#9da6b9] text-xs bg-[#1f2937] px-1.5 py-0.5 rounded-md">3</span>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-3 flex flex-col gap-3">
              <div className="bg-[#1f2937] p-3 rounded-lg border-l-2 border-l-primary border-y border-r border-y-[#282e39] border-r-[#282e39] hover:border-r-[#4b5563] cursor-pointer group shadow-lg">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[10px] font-semibold text-[#9da6b9] bg-[#282e39] px-1.5 py-0.5 rounded uppercase tracking-wider">CX-902</span>
                  <span className="material-symbols-outlined text-[16px] text-accent-cyan animate-spin-slow">sync</span>
                </div>
                <h4 className="text-white text-sm font-medium mb-3 leading-snug group-hover:text-primary transition-colors">Refactor backend API endpoints for v2.0</h4>
                <span className="bg-red-500/10 text-red-500 border border-red-500/20 px-1.5 py-0.5 rounded text-[10px] font-medium">Critical</span>
              </div>

              <div className="bg-[#1f2937] p-3 rounded-lg border border-accent-cyan/30 ai-border-glow cursor-pointer group shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 p-2 opacity-10">
                  <span className="material-symbols-outlined text-4xl text-accent-cyan">smart_toy</span>
                </div>
                <div className="flex justify-between items-start mb-2 relative z-10">
                  <span className="text-[10px] font-semibold text-[#9da6b9] bg-[#282e39] px-1.5 py-0.5 rounded uppercase tracking-wider">CX-1108</span>
                  <div className="flex items-center gap-1 bg-accent-cyan/10 border border-accent-cyan/20 px-1.5 py-0.5 rounded">
                    <span className="material-symbols-outlined text-[12px] text-accent-cyan">auto_awesome</span>
                    <span className="text-[9px] font-bold text-accent-cyan uppercase">Auto-Pilot</span>
                  </div>
                </div>
                <h4 className="text-white text-sm font-medium mb-3 relative z-10">Generate unit tests for payment gateway integration</h4>
                <div className="w-full bg-[#282e39] h-1 mt-3 rounded-full overflow-hidden relative z-10">
                  <div className="bg-accent-cyan h-full rounded-full" style={{width: '60%'}}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: AI Review */}
          <div className="flex flex-col w-72 sm:w-80 bg-[#101622] rounded-xl border border-[#282e39] h-full flex-shrink-0">
            <div className="p-4 border-b border-[#282e39] flex justify-between items-center bg-[#101622] rounded-t-xl">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-accent-cyan shadow-[0_0_8px_rgba(34,211,238,0.6)]"></span>
                <h3 className="text-white font-semibold text-sm">AI Review</h3>
                <span className="text-[#9da6b9] text-xs bg-[#1f2937] px-1.5 py-0.5 rounded-md">2</span>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-3 flex flex-col gap-3">
              <div className="bg-[#1f2937] p-3 rounded-lg border border-[#282e39] hover:border-accent-cyan/40 cursor-pointer group shadow-sm transition-all">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[10px] font-semibold text-[#9da6b9] bg-[#282e39] px-1.5 py-0.5 rounded uppercase tracking-wider">CX-885</span>
                  <div className="flex items-center gap-1 text-accent-cyan">
                    <span className="material-symbols-outlined text-[14px]">psychology</span>
                    <span className="text-[10px] font-medium">Analyzing</span>
                  </div>
                </div>
                <h4 className="text-white text-sm font-medium mb-2">Design system component library documentation</h4>
                <p className="text-[#9da6b9] text-xs mb-3 line-clamp-2">AI is checking for consistency with Figma tokens and accessibility standards...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};