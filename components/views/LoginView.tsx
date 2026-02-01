/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';

export const LoginView: React.FC<{onLogin: () => void}> = ({onLogin}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onLogin();
    }, 1200);
  };

  return (
    <div className={`w-full h-full flex overflow-hidden opacity-0 transition-opacity duration-700 ${isVisible ? 'opacity-100' : ''}`}>
      {/* Left side - Branding (Cinematic Entrance) */}
      <div 
        className={`hidden lg:flex w-1/2 relative flex-col justify-between p-12 bg-[#0d121c] overflow-hidden transform transition-all duration-1000 delay-100 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}
      >
        {/* Animated Background */}
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,_#2b6cee_0%,_transparent_25%),radial-gradient(circle_at_70%_60%,_#0bda5e_0%,_transparent_25%)] animate-pulse-slow"></div>
          <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(#282e39 1px, transparent 1px)', backgroundSize: '32px 32px', opacity: 0.5}}></div>
        </div>
        
        <div className="relative z-10 flex items-center gap-3">
          <div className="size-10 rounded-xl bg-gradient-to-br from-primary to-accent-cyan flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-primary/20">
            C
          </div>
          <h1 className="text-white text-xl font-bold tracking-tight">CodeFlow</h1>
        </div>

        <div className="relative z-10 max-w-xl">
          <div className="mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-xs font-semibold uppercase tracking-wider mb-6">
              <span className="material-symbols-outlined text-[16px]">verified_user</span>
              Enterprise Case Study
            </span>
            <blockquote className="text-4xl font-semibold leading-tight text-white mb-6">
              "CodeFlow autonomous agents reduced our deployment cycles by <span className="ai-gradient-text">40% within the first quarter</span>."
            </blockquote>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="size-12 rounded-full border-2 border-primary/30 p-0.5">
              <div className="size-full rounded-full bg-cover bg-center bg-gray-700 flex items-center justify-center text-white font-bold">JD</div>
            </div>
            <div>
              <div className="text-white font-bold text-lg">Alex Morgan</div>
              <div className="text-[#9da6b9] text-sm">CTO, Global Tech Solutions</div>
            </div>
          </div>
        </div>

        <div className="relative z-10 flex gap-6 text-sm text-[#6b7280]">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>

      {/* Right side - Login Form (Smooth Fade In) */}
      <div 
        className={`w-full lg:w-1/2 flex flex-col justify-center items-center p-6 bg-surface-dark relative border-l border-[#282e39] transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}
      >
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white">Welcome back</h2>
            <p className="mt-2 text-sm text-[#9da6b9]">Securely access your CodeFlow workspace</p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 px-4 py-2.5 border border-[#282e39] rounded-lg hover:bg-[#1f2937] hover:border-[#374151] transition-all bg-[#161b26] text-white font-medium text-sm group hover:scale-[1.02] active:scale-[0.98]">
              <span className="material-symbols-outlined text-[20px]">hub</span>
              GitHub
            </button>
            <button className="flex items-center justify-center gap-2 px-4 py-2.5 border border-[#282e39] rounded-lg hover:bg-[#1f2937] hover:border-[#374151] transition-all bg-[#161b26] text-white font-medium text-sm group hover:scale-[1.02] active:scale-[0.98]">
              <span className="material-symbols-outlined text-[20px]">lock</span>
              SSO
            </button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#282e39]"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-surface-dark text-[#6b7280]">Or continue with email</span>
            </div>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#9da6b9] mb-1.5">Work Email</label>
                <div className="relative group">
                  <input 
                    type="email" 
                    id="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full rounded-lg bg-[#101622] border border-[#282e39] text-white placeholder-[#52525b] focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm px-4 py-2.5 transition-all group-hover:border-[#374151]" 
                    placeholder="name@company.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-[#9da6b9] mb-1.5">Password</label>
                <div className="relative group">
                  <input 
                    type="password" 
                    id="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full rounded-lg bg-[#101622] border border-[#282e39] text-white placeholder-[#52525b] focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm px-4 py-2.5 transition-all group-hover:border-[#374151]" 
                    placeholder="••••••••"
                  />
                </div>
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full flex justify-center items-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-primary hover:bg-blue-600 focus:outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden active:scale-95"
            >
              {isLoading ? (
                <span className="material-symbols-outlined text-[20px] animate-spin">progress_activity</span>
              ) : (
                <>
                  <span className="material-symbols-outlined text-[20px] mr-2">login</span>
                  Sign in to Workspace
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
