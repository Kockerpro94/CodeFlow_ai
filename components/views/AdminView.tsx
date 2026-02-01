/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

export const AdminView: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-background-dark p-4 sm:p-8 overflow-y-auto">
      <div className="max-w-6xl mx-auto flex flex-col gap-8 w-full">
        <div className="flex flex-col gap-1">
          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Billing Usage & Tier Management</h3>
          <p className="text-[#9da6b9] text-xs sm:text-sm">Monitor your resource consumption, seat allocation, and billing history.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-[#1f2937] to-[#161b26] p-6 rounded-xl border border-[#282e39] relative overflow-hidden group">
            <div className="flex flex-col h-full justify-between relative z-10">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-primary/20 text-primary text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">Current Plan</span>
                </div>
                <h4 className="text-2xl font-bold text-white mb-1">Enterprise</h4>
                <p className="text-[#9da6b9] text-sm">Billed annually</p>
              </div>
              <div className="mt-6">
                <p className="text-3xl font-bold text-white">$499<span className="text-lg text-[#9da6b9] font-normal">/mo</span></p>
                <p className="text-xs text-[#9da6b9] mt-2 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">event_repeat</span> 
                  Next invoice: Nov 24, 2023
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#1f2937] p-6 rounded-xl border border-[#282e39] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-yellow-500/10 rounded-lg">
                    <span className="material-symbols-outlined text-yellow-500">token</span>
                  </div>
                  <p className="text-[#9da6b9] font-medium text-sm">AI Token Limit</p>
                </div>
                <span className="text-white font-bold bg-yellow-500/20 text-yellow-500 px-2 py-0.5 rounded text-xs">80% Used</span>
              </div>
              <div className="mb-2">
                <p className="text-2xl font-bold text-white">8.0M <span className="text-sm text-[#9da6b9] font-normal">/ 10M</span></p>
              </div>
              <div className="w-full bg-[#282e39] h-2.5 rounded-full overflow-hidden mt-2">
                <div className="bg-yellow-500 h-full rounded-full" style={{width: '80%'}}></div>
              </div>
            </div>
          </div>

          <div className="bg-[#1f2937] p-6 rounded-xl border border-[#282e39] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-accent-cyan/10 rounded-lg">
                    <span className="material-symbols-outlined text-accent-cyan">group</span>
                  </div>
                  <p className="text-[#9da6b9] font-medium text-sm">Active Seats</p>
                </div>
                <span className="text-white font-bold">18/20</span>
              </div>
              <div className="mb-2">
                <p className="text-2xl font-bold text-white">18 <span className="text-sm text-[#9da6b9] font-normal">Users</span></p>
              </div>
              <div className="w-full bg-[#282e39] h-2.5 rounded-full overflow-hidden mt-2">
                <div className="bg-accent-cyan h-full rounded-full" style={{width: '90%'}}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#1f2937] rounded-xl border border-[#282e39] overflow-hidden flex flex-col">
          <div className="p-6 border-b border-[#282e39] flex justify-between items-center bg-[#1f2937]">
            <h4 className="text-white font-semibold text-lg">Recent Invoices</h4>
            <button className="text-sm text-primary hover:text-white transition-colors font-medium flex items-center gap-1">
              View All <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-[#9da6b9] min-w-[500px]">
              <thead className="bg-[#282e39] text-xs uppercase font-semibold text-white">
                <tr>
                  <th className="px-6 py-4">Invoice ID</th>
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4">Amount</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#282e39]">
                <tr className="hover:bg-[#282e39]/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-white">INV-2023-010</td>
                  <td className="px-6 py-4">Oct 01, 2023</td>
                  <td className="px-6 py-4 text-white font-medium">$499.00</td>
                  <td className="px-6 py-4"><span className="bg-green-500/10 text-green-500 border border-green-500/20 px-2 py-0.5 rounded text-xs font-medium">Paid</span></td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-[#9da6b9] hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-[20px]">download</span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};