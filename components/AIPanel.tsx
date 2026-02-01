/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useRef, useEffect } from 'react';
import { View, Message } from '../types';
import { GoogleGenAI } from "@google/genai";

interface AIPanelProps {
  currentView: View;
  isOpen: boolean;
  onClose: () => void;
}

export const AIPanel: React.FC<AIPanelProps> = ({ currentView, isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'model',
      text: `Hello. I am CodeFlow AI. I'm monitoring the ${currentView.toLowerCase()} for anomalies and optimization opportunities.`,
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  // Context awareness prompt
  const getContextPrompt = (view: View) => {
    const technicalBreakdown = `
    APPLICATION ARCHITECTURE (VOXEL ARCHITECT):
    This application uses the Gemini 3 model (gemini-3-pro-preview) to generate 3D voxel models based on text descriptions.
    
    Technical Breakdown:
    1. Structured JSON Output: The app uses the responseSchema feature of the Gemini API to force the model to return data in a specific JSON format (Array of objects with x, y, z, color).
    
    2. Prompt Engineering:
       - Context: "Voxel Architect"
       - Constraints: 150-600 voxels, centered, physically plausible.
       - Morphing Logic: Extracts color palette from current scene and instructs Gemini to prioritize those colors (reusing bricks).
       
    3. Engine Integration:
       - Raw JSON parsed by React.
       - Fed into custom Three.js engine (VoxelEngine).
       - New Builds: Wipe and place.
       - Rebuilds: Calculate path, animate flying blocks from old to new positions.
    `;

    const base = `You are CodeFlow AI, an advanced enterprise autonomous agent integrated into the CodeFlow development platform. You are concise, professional, and helpful. You analyze data, suggest code optimizations, and manage workflows.
    
    ${technicalBreakdown}
    `;
    
    switch (view) {
      case View.DASHBOARD:
        return `${base} The user is on the Main Dashboard.
        Context: Project Health is good. AI Efficiency Score: 94% (+24% vs last week). Tasks Automated: 1,204.
        Active Projects: Q3 Marketing Launch (High Priority, 75% done), Platform Migration (Critical, 12% done, On Hold), AI Model Training (On Track, 45% done).
        Alert: Platform Migration is stalled due to backend resource allocation.`;
      
      case View.WORKSPACE:
        return `${base} The user is in the CodeFlow Studio (AI Workspace) using the Voxel Architect.
        Active Agents: VoxelEngine (Rendering), Gemini 3 (Generating).
        Current State: Ready to build or morph 3D models.`;
        
      case View.KANBAN:
        return `${base} The user is on the Project Canvas (Kanban).
        Columns: Backlog (8 tasks), In Progress (3 tasks), AI Review (2 tasks), Done (12 tasks).
        Blocker detected: Task CX-902 (Refactor backend API) is blocking 2 downstream dependencies in the 'In Progress' column.`;
        
      case View.ADMIN:
        return `${base} The user is in Admin & Billing.
        Current Spend: $4,250 (+5.2%). Active Seats: 42/50. AI Token Usage: 1.2M (High Usage - 80% limit).
        User 'Marcus Vance' has unusual login activity flagged from Tallinn, Estonia.`;

      case View.PLUGINS:
        return `${base} The user is in the Plugin Marketplace.
        Available: Slack Integration, GitHub Sync, CodeFlow Custom LLM, Jira Connect.`;
        
      default:
        return base;
    }
  };

  const handleSend = async () => {
    if (!input.trim()) return;
    if (!process.env.API_KEY) {
        console.warn("API Key missing");
    }

    const userMsg: Message = { role: 'user', text: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    try {
      if (process.env.API_KEY) {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const systemInstruction = getContextPrompt(currentView);
        
        const response = await ai.models.generateContent({
          model: 'gemini-3-flash-preview',
          contents: input,
          config: { systemInstruction }
        });

        const text = response.text || "I processed that, but have no textual response.";
        
        setMessages(prev => [...prev, {
          role: 'model',
          text: text,
          timestamp: new Date()
        }]);
      } else {
        // Fallback simulation if no API key
        setTimeout(() => {
             setMessages(prev => [...prev, {
                role: 'model',
                text: "I'm in demo mode (no API key). I would normally analyze that request against your enterprise data.",
                timestamp: new Date()
              }]);
        }, 1000);
      }

    } catch (e) {
      console.error(e);
      setMessages(prev => [...prev, {
        role: 'model',
        text: "System Error: Unable to connect to neural core.",
        timestamp: new Date()
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      {/* Mobile Backdrop for AI Panel */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      <aside className={`
        fixed inset-y-0 right-0 z-50 w-80 bg-background-dark border-l border-[#282e39] flex flex-col transition-transform duration-300 ease-in-out shadow-2xl
        lg:translate-x-0 lg:static lg:h-full lg:flex-shrink-0
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        {/* Header */}
        <div className="h-16 flex items-center justify-between px-6 border-b border-[#282e39] bg-surface-dark">
          <div className="flex items-center gap-2">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-cyan"></span>
            </div>
            <h3 className="text-white font-bold text-sm tracking-wide">CODEFLOW AI</h3>
          </div>
          <button onClick={onClose} className="text-[#9da6b9] hover:text-white lg:hidden">
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
          <button className="text-[#9da6b9] hover:text-white hidden lg:block">
            <span className="material-symbols-outlined text-[20px]">more_horiz</span>
          </button>
        </div>

        {/* Chat Stream */}
        <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
          <div className="text-center text-[10px] text-[#52525b] font-medium my-2">
            SESSION STARTED
          </div>

          {messages.map((msg, idx) => (
            <div key={idx} className={`flex flex-col gap-2 ${msg.role === 'user' ? 'items-end self-end max-w-[90%]' : 'items-start max-w-[90%]'}`}>
              {msg.role === 'model' && (
                <div className="flex items-center gap-2 mb-1">
                  <span className="material-symbols-outlined text-accent-cyan text-sm">smart_toy</span>
                  <span className="text-accent-cyan text-xs font-bold">CodeFlow AI</span>
                </div>
              )}
              
              <div className={`
                text-sm p-3 rounded-2xl shadow-sm
                ${msg.role === 'model' 
                  ? 'bg-[#1f2937] text-[#e2e8f0] rounded-tl-none border border-accent-cyan/20 ai-border-glow' 
                  : 'bg-primary text-white rounded-tr-none shadow-md'}
              `}>
                {msg.text}
              </div>
              <span className="text-[10px] text-[#52525b]">
                  {msg.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
              </span>
            </div>
          ))}

          {isTyping && (
            <div className="flex flex-col gap-2 items-start max-w-[90%] opacity-60">
              <div className="flex items-center gap-2 mb-1">
                <span className="material-symbols-outlined text-accent-cyan text-sm">smart_toy</span>
                <span className="text-accent-cyan text-xs font-bold">CodeFlow AI</span>
              </div>
              <div className="bg-[#1f2937] text-[#9da6b9] text-sm p-3 rounded-2xl rounded-tl-none border border-[#282e39] flex items-center gap-2">
                <span className="size-1.5 bg-accent-cyan rounded-full animate-bounce"></span>
                <span className="size-1.5 bg-accent-cyan rounded-full animate-bounce delay-75"></span>
                <span className="size-1.5 bg-accent-cyan rounded-full animate-bounce delay-150"></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 bg-surface-dark border-t border-[#282e39]">
          <div className="relative">
            <input 
              className="w-full bg-[#1f2937] text-white text-sm rounded-xl pl-4 pr-12 py-3 border border-[#282e39] focus:ring-1 focus:ring-accent-cyan focus:border-accent-cyan placeholder:text-[#52525b] outline-none transition-all" 
              placeholder="Ask CodeFlow..." 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button 
              onClick={handleSend}
              className="absolute right-2 top-2 p-1 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              <span className="material-symbols-outlined text-[18px] block">arrow_upward</span>
            </button>
          </div>
          <div className="flex justify-center mt-2">
            <span className="text-[10px] text-[#52525b]">CodeFlow v2.4 (Enterprise)</span>
          </div>
        </div>
      </aside>
    </>
  );
};
