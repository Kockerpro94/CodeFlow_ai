/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import { GoogleGenAI, Type } from "@google/genai";
import { VoxelData } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// We define the schema for the AI to ensure strict JSON output
const voxelSchema = {
  type: Type.ARRAY,
  items: {
    type: Type.OBJECT,
    properties: {
      x: { type: Type.INTEGER, description: "X coordinate (approx -10 to 10)" },
      y: { type: Type.INTEGER, description: "Y coordinate (approx -10 to 10)" },
      z: { type: Type.INTEGER, description: "Z coordinate (approx -10 to 10)" },
      color: { type: Type.STRING, description: "Hex color code (e.g. #FF5733)" },
    },
    required: ["x", "y", "z", "color"],
  },
};

export const AiService = {
  /**
   * Generates a new 3D model based on a text prompt.
   */
  async generateBuild(prompt: string): Promise<VoxelData[]> {
    const systemInstruction = `Context: You are a "Voxel Architect" using the Gemini 3 model (gemini-3-pro-preview).
    
    Constraints:
    1. Output a JSON array of voxel objects.
    2. Use between 150-600 voxels for the model.
    3. Center the model roughly around 0,0,0.
    4. Ensure physical plausibility (blocks should connect or float artistically).
    5. Use a vibrant and appropriate color palette for the subject.
    `;

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-pro-preview",
        contents: prompt,
        config: {
          systemInstruction,
          responseMimeType: "application/json",
          responseSchema: voxelSchema,
          temperature: 0.7, // Balance creativity and structure
        },
      });

      const rawData = JSON.parse(response.text || "[]");
      
      // Parse Hex strings to Numbers for the engine
      return rawData.map((v: any) => ({
        x: v.x,
        y: v.y,
        z: v.z,
        color: parseInt(v.color.replace('#', ''), 16)
      }));

    } catch (error) {
      console.error("AI Build Generation Failed:", error);
      throw error;
    }
  },

  /**
   * Rebuilds/Morphs an existing model into a new shape using the same materials (colors).
   */
  async generateMorph(prompt: string, currentColors: string[]): Promise<VoxelData[]> {
    // We sample unique colors to simulate "reusing blocks"
    const palette = currentColors.slice(0, 25).join(', ');

    const systemInstruction = `Context: You are a "Voxel Architect" in Rebuild Mode.
    
    Morphing Logic:
    Extract the color palette from the current scene and prioritize those specific colors, simulating the effect of reusing the existing LEGO-like bricks.
    
    Constraints:
    1. Prioritize using this color palette: [${palette}].
    2. Output a JSON array of voxel objects.
    3. Use between 150-600 voxels.
    4. Center the model roughly around 0,0,0.
    5. Ensure physical plausibility.
    `;

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-pro-preview",
        contents: prompt,
        config: {
          systemInstruction,
          responseMimeType: "application/json",
          responseSchema: voxelSchema,
          temperature: 0.8, // Higher temp for creative morphing
        },
      });

      const rawData = JSON.parse(response.text || "[]");

      return rawData.map((v: any) => ({
        x: v.x,
        y: v.y,
        z: v.z,
        color: parseInt(v.color.replace('#', ''), 16)
      }));

    } catch (error) {
      console.error("AI Morph Generation Failed:", error);
      throw error;
    }
  }
};
