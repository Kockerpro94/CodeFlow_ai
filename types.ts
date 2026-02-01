/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import { Color } from 'three';

export enum View {
  DASHBOARD = 'DASHBOARD',
  WORKSPACE = 'WORKSPACE',
  KANBAN = 'KANBAN',
  ADMIN = 'ADMIN',
  PLUGINS = 'PLUGINS'
}

export interface Message {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
  isStreaming?: boolean;
}

export interface Project {
  id: string;
  name: string;
  status: 'High Priority' | 'On Track' | 'Critical';
  progress: number;
  aiLevel: 'Auto-Pilot' | 'Manual' | 'Processing';
  teamMembers: string[];
}

export enum AppState {
  STABLE = 'STABLE',
  DISMANTLING = 'DISMANTLING',
  REBUILDING = 'REBUILDING'
}

export interface VoxelData {
  x: number;
  y: number;
  z: number;
  color: number;
}

export interface SimulationVoxel {
  id: number;
  x: number;
  y: number;
  z: number;
  color: Color;
  vx: number;
  vy: number;
  vz: number;
  rx: number;
  ry: number;
  rz: number;
  rvx: number;
  rvy: number;
  rvz: number;
}

export interface RebuildTarget {
  x: number;
  y: number;
  z: number;
  delay: number;
  isRubble?: boolean;
}

export interface SavedModel {
  name: string;
  data: string;
}
