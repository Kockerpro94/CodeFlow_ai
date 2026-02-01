/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { View } from '../../types';

export const DashboardView: React.FC<{onChangeView: (v: View) => void}> = ({onChangeView}) => {
  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <header className="h-16 flex items-center justify-between px-4 sm:px-8 border-b border-[#282e39] bg-background-dark/50 backdrop-blur-md sticky top-0 z-10">
        <h2 className="text-white text-base sm:text-lg font-bold leading-tight truncate">Dashboard Overview</h2>
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="relative hidden md:block">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#9da6b9]">
              <span className="material-symbols-outlined text-[20px]">search</span>
            </span>
            <input className="bg-[#1f2937] border-none text-white text-sm rounded-lg block w-64 pl-10 p-2.5 focus:ring-1 focus:ring-primary placeholder-[#6b7280]" placeholder="Search projects..." type="text"/>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-2 text-[#9da6b9] hover:text-white hover:bg-[#282e39] rounded-lg transition-colors">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border border-surface-dark"></span>
            </button>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-8">
        <div className="max-w-6xl mx-auto flex flex-col gap-6 sm:gap-8">
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <div className="flex flex-col gap-1">
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Project Health</h3>
              <p className="text-[#9da6b9] text-xs sm:text-sm">Real-time overview of autonomous workflows and team performance.</p>
            </div>
            <div className="flex items-center gap-2 bg-[#1f2937] px-3 py-1.5 rounded-lg border border-[#282e39] self-start sm:self-auto">
              <span className="material-symbols-outlined text-[#9da6b9] text-sm">calendar_today</span>
              <span className="text-xs sm:text-sm text-white font-medium">Oct 24, 2023</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[#1f2937] p-6 rounded-xl border border-[#282e39] relative overflow-hidden group hover:border-accent-cyan/30 transition-colors">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-6xl text-accent-cyan">auto_awesome</span>
              </div>
              <div className="flex flex-col gap-4 relative z-10">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-accent-cyan/10 rounded-lg">
                    <span className="material-symbols-outlined text-accent-cyan">bolt</span>
                  </div>
                  <p className="text-[#9da6b9] font-medium text-sm">AI Efficiency Score</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white">94%</p>
                  <p className="text-accent-neon text-sm font-medium mt-1 flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">trending_up</span>
                    +24% vs last week
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#1f2937] p-6 rounded-xl border border-[#282e39] relative overflow-hidden hover:border-primary/30 transition-colors">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <span className="material-symbols-outlined text-primary">smart_toy</span>
                  </div>
                  <p className="text-[#9da6b9] font-medium text-sm">Tasks Automated</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white">1,204</p>
                  <p className="text-accent-neon text-sm font-medium mt-1 flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">arrow_upward</span>
                    +12% new automations
                  </p>
                </div>
              </div>
              <div className="w-full bg-[#282e39] h-1.5 mt-4 rounded-full overflow-hidden">
                <div className="bg-primary h-full rounded-full" style={{width: '78%'}}></div>
              </div>
            </div>

            <div className="bg-[#1f2937] p-6 rounded-xl border border-[#282e39] hover:border-primary/30 transition-colors">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-purple-500/10 rounded-lg">
                    <span className="material-symbols-outlined text-purple-400">speed</span>
                  </div>
                  <p className="text-[#9da6b9] font-medium text-sm">Team Velocity</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white">High</p>
                  <p className="text-[#9da6b9] text-sm font-medium mt-1">Consistent performance</p>
                </div>
              </div>
              <div className="flex items-center gap-1 mt-4">
                <div className="h-2 w-full bg-accent-neon rounded-full opacity-100"></div>
                <div className="h-2 w-full bg-accent-neon rounded-full opacity-100"></div>
                <div className="h-2 w-full bg-accent-neon rounded-full opacity-100"></div>
                <div className="h-2 w-full bg-accent-neon rounded-full opacity-40"></div>
                <div className="h-2 w-full bg-accent-neon rounded-full opacity-20"></div>
              </div>
            </div>
          </div>

          {/* Velocity Trends */}
          <div className="bg-[#1f2937] rounded-xl border border-[#282e39] p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h4 className="text-white font-semibold text-lg">Velocity Trends</h4>
                <p className="text-[#9da6b9] text-sm">Tasks completed across all active projects</p>
              </div>
              <div className="flex gap-2">
                <select className="bg-[#282e39] border-none text-white text-xs sm:text-sm rounded-lg focus:ring-0 p-2">
                  <option>This Week</option>
                  <option>Last Month</option>
                </select>
              </div>
            </div>
            <div className="w-full h-48 sm:h-64 relative">
              <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 50">
                <defs>
                  <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#2b6cee" stopOpacity="0.5"></stop>
                    <stop offset="100%" stopColor="#2b6cee" stopOpacity="0"></stop>
                  </linearGradient>
                </defs>
                <line stroke="#282e39" strokeWidth="0.2" x1="0" x2="100" y1="10" y2="10"></line>
                <line stroke="#282e39" strokeWidth="0.2" x1="0" x2="100" y1="20" y2="20"></line>
                <line stroke="#282e39" strokeWidth="0.2" x1="0" x2="100" y1="30" y2="30"></line>
                <line stroke="#282e39" strokeWidth="0.2" x1="0" x2="100" y1="40" y2="40"></line>
                <path d="M0,40 Q10,35 20,38 T40,25 T60,30 T80,15 T100,5 V50 H0 Z" fill="url(#chartGradient)"></path>
                <path d="M0,40 Q10,35 20,38 T40,25 T60,30 T80,15 T100,5" fill="none" stroke="#2b6cee" strokeLinecap="round" strokeWidth="0.8" vectorEffect="non-scaling-stroke"></path>
                <circle cx="80" cy="15" fill="#fff" r="1.5" stroke="#2b6cee" strokeWidth="0.5"></circle>
              </svg>
              <div className="absolute top-[20%] right-[18%] bg-[#282e39] text-white text-xs py-1 px-2 rounded border border-[#374151] shadow-lg">
                245 Tasks
              </div>
            </div>
            <div className="flex justify-between mt-2 text-[#9da6b9] text-xs font-medium px-1">
              <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
            </div>
          </div>

          {/* Active Projects List */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h4 className="text-white font-semibold text-lg">Active Projects</h4>
              <button className="text-primary text-sm font-medium hover:text-blue-400">View All</button>
            </div>
            <div className="bg-[#1f2937] border border-[#282e39] rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-[#9da6b9] min-w-[600px]">
                  <thead className="bg-[#282e39] text-xs uppercase font-semibold text-white">
                    <tr>
                      <th className="px-6 py-4">Project Name</th>
                      <th className="px-6 py-4">Status</th>
                      <th className="px-6 py-4">AI Level</th>
                      <th className="px-6 py-4">Team</th>
                      <th className="px-6 py-4 w-1/4">Progress</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#282e39]">
                    <tr className="hover:bg-[#282e39]/50 transition-colors cursor-pointer" onClick={() => onChangeView(View.KANBAN)}>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="bg-blue-500/20 p-2 rounded text-blue-400">
                            <span className="material-symbols-outlined text-[20px]">rocket_launch</span>
                          </div>
                          <div>
                            <p className="text-white font-medium">Q3 Marketing Launch</p>
                            <p className="text-xs">Due in 2 days</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 px-2.5 py-0.5 rounded-full text-xs font-medium">High Priority</span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-1 text-accent-cyan">
                          <span className="material-symbols-outlined text-[16px]">auto_awesome</span>
                          <span className="text-xs font-medium">Auto-Pilot</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex -space-x-2">
                          <div className="size-8 rounded-full border-2 border-[#1f2937] bg-gray-600 bg-cover" style={{backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDKPnuzoNaTi5oNotO6R2we-um3BRuiDd58VxrVQ_NN4mEyNsW1fAkkDZgEcVbAbqhCPVp1NOXrWnI0EFGhpor-gITwMKkQIpNXypIsRg4uEDFFEg0eSzi8nWjVNxtXi4nJAxMIkk5k0WCq_lFG5SETOamUq6Pvaw8rdLX_ONguEzlfHunMDLumcFyMXx5z3WTfcjGTT5WqbAc_Os8twrAqyPfhPIvP_1gGowFGFeb41013Y_1h1RX4xh9B0vUqEq66X2GgRYyF9W8')`}}></div>
                          <div className="size-8 rounded-full border-2 border-[#1f2937] bg-gray-600 bg-cover" style={{backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDrea33bISHE2Qn9ZgY7dd0YRqtrW5Ke51fYwpPhj8T1MgE_VvBqzZT5WPL-UXDMK2QUCfnjJM4bAhgaDEmU46GrF1k2kIAEPbzkaRfksM-Ct44hs1Iv1nsuNVQMduqUxjfvXKuh9wbt3oIfRYMoS8aUaztlI3HotJf-U_7qtH_pAKjZpJVuD1xeGAClf_dV6wMYGp1hQw0fhyV25yFSWTg5S0q1viCOg-ohs7J5-38UpLdULui_skK5abiGU1wzUO2pzklelanX1I')`}}></div>
                          <div className="size-8 rounded-full border-2 border-[#1f2937] bg-[#282e39] flex items-center justify-center text-xs text-white font-medium">+3</div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="flex-1 bg-[#282e39] rounded-full h-2">
                            <div className="bg-primary h-2 rounded-full" style={{width: '75%'}}></div>
                          </div>
                          <span className="text-white font-medium">75%</span>
                        </div>
                      </td>
                    </tr>
                    {/* Additional rows omitted for brevity */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
