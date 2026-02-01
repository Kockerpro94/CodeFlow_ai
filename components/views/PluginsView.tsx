/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

export const PluginsView: React.FC = () => {
  return (
    <div className="flex flex-col h-full">
      <header className="h-16 flex items-center justify-between px-8 border-b border-[#282e39] bg-background-dark/50 backdrop-blur-md sticky top-0 z-10">
        <h2 className="text-white text-lg font-bold leading-tight">Plugin Marketplace</h2>
        <div className="flex items-center gap-6">
          <div className="relative hidden md:block">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#9da6b9]">
              <span className="material-symbols-outlined text-[20px]">search</span>
            </span>
            <input className="bg-[#1f2937] border-none text-white text-sm rounded-lg block w-72 pl-10 p-2.5 focus:ring-1 focus:ring-primary placeholder-[#6b7280]" placeholder="Search plugins, integrations..." type="text"/>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-2 text-[#9da6b9] hover:text-white hover:bg-[#282e39] rounded-lg transition-colors">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border border-surface-dark"></span>
            </button>
          </div>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto p-8">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row justify-between items-end gap-4">
              <div className="flex flex-col gap-1">
                <h3 className="text-3xl font-bold text-white tracking-tight">Extend CodeFlow</h3>
                <p className="text-[#9da6b9] text-sm max-w-2xl">Browse our library of enterprise-grade plugins and custom AI models designed to automate your workflows.</p>
              </div>
              <div className="flex items-center gap-2">
                <button className="text-sm font-medium text-white flex items-center gap-1 bg-primary hover:bg-blue-600 px-3 py-2 rounded-lg transition-colors">
                  <span className="material-symbols-outlined text-sm">add</span>
                  Submit Plugin
                </button>
              </div>
            </div>
            
            <div className="flex gap-2 overflow-x-auto pb-2 border-b border-[#282e39]">
              <button className="whitespace-nowrap px-4 py-2 rounded-lg bg-primary/10 text-primary border border-primary/20 text-sm font-medium">All Apps</button>
              <button className="whitespace-nowrap px-4 py-2 rounded-lg bg-transparent text-[#9da6b9] hover:text-white hover:bg-[#282e39] text-sm font-medium transition-colors">Recommended</button>
              <button className="whitespace-nowrap px-4 py-2 rounded-lg bg-transparent text-[#9da6b9] hover:text-white hover:bg-[#282e39] text-sm font-medium transition-colors">Dev Tools</button>
              <button className="whitespace-nowrap px-4 py-2 rounded-lg bg-transparent text-[#9da6b9] hover:text-white hover:bg-[#282e39] text-sm font-medium transition-colors">Automation</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Plugin 1 */}
            <div className="bg-[#1f2937] rounded-xl border border-[#282e39] p-6 hover:border-primary/50 transition-all group flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <div className="size-12 rounded-xl bg-[#282e39] flex items-center justify-center p-2 border border-[#374151]">
                  <span className="material-symbols-outlined text-purple-400 text-3xl">forum</span>
                </div>
                <span className="bg-purple-500/10 text-purple-400 border border-purple-500/20 px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider">Communication</span>
              </div>
              <div className="mb-4">
                <h4 className="text-white font-bold text-lg flex items-center gap-2">Slack Integration <span className="material-symbols-outlined text-blue-400 text-[16px]">verified</span></h4>
                <p className="text-[#9da6b9] text-sm mt-2 line-clamp-2">Connect your team's communication channels. Receive AI alerts, task summaries, and execute commands directly from Slack.</p>
              </div>
              <button className="mt-auto w-full py-2 rounded-lg bg-[#282e39] border border-[#374151] text-white text-sm font-medium hover:bg-[#374151] hover:text-accent-cyan transition-colors flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-[18px]">settings</span>
                Configure
              </button>
            </div>

            {/* Plugin 2 */}
            <div className="bg-[#1f2937] rounded-xl border border-[#282e39] p-6 hover:border-primary/50 transition-all group flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <div className="size-12 rounded-xl bg-[#282e39] flex items-center justify-center p-2 border border-[#374151]">
                  <span className="material-symbols-outlined text-white text-3xl">code</span>
                </div>
                <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider">Dev Tools</span>
              </div>
              <div className="mb-4">
                <h4 className="text-white font-bold text-lg flex items-center gap-2">GitHub Sync <span className="material-symbols-outlined text-blue-400 text-[16px]">verified</span></h4>
                <p className="text-[#9da6b9] text-sm mt-2 line-clamp-2">Auto-sync repositories, track pull requests, and let Nexus AI analyze code quality and suggest improvements.</p>
              </div>
              <button className="mt-auto w-full py-2 rounded-lg bg-[#282e39] border border-[#374151] text-white text-sm font-medium hover:bg-[#374151] hover:text-accent-cyan transition-colors flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-[18px]">settings</span>
                Configure
              </button>
            </div>

            {/* Plugin 3 */}
            <div className="bg-[#1f2937] rounded-xl border border-accent-cyan/20 p-6 hover:border-accent-cyan/50 transition-all group flex flex-col h-full relative overflow-hidden">
              <div className="absolute -right-4 -top-4 bg-accent-cyan/10 w-24 h-24 rounded-full blur-2xl"></div>
              <div className="flex justify-between items-start mb-4 relative z-10">
                <div className="size-12 rounded-xl bg-gradient-to-br from-primary to-accent-cyan flex items-center justify-center p-2 shadow-lg">
                  <span className="material-symbols-outlined text-white text-2xl">psychology</span>
                </div>
                <span className="bg-accent-neon/10 text-accent-neon border border-accent-neon/20 px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider">Automation</span>
              </div>
              <div className="mb-4 relative z-10">
                <h4 className="text-white font-bold text-lg flex items-center gap-2">CodeFlow Custom LLM</h4>
                <p className="text-[#9da6b9] text-sm mt-2 line-clamp-2">Deploy proprietary fine-tuned models for specialized tasks. Includes context-aware autonomous agents.</p>
              </div>
              <button className="mt-auto w-full py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-blue-600 shadow-lg shadow-blue-900/20 transition-all flex items-center justify-center gap-2 relative z-10">
                <span className="material-symbols-outlined text-[18px]">download</span>
                Install Model
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
