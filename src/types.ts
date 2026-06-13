/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type EmotionType = 'joy' | 'sorrow' | 'stress' | 'calm' | 'excitement' | 'curious';

export interface EmotionMetrics {
  valence: number; // Positive vs negative (-1.0 to 1.0)
  arousal: number; // Excitement vs calm (0.0 to 1.0)
  dominance: number; // Confidence vs submission (0.0 to 1.0)
  empathyIndex: number; // Connection depth (0.0 to 1.0)
}

export interface EmotionProfile {
  id: EmotionType;
  nameEn: string;
  nameFa: string;
  nameAr: string;
  color: string;
  glowColor: string;
  orbScale: number;
  pulseSpeed: number;
  vibrationIntensity: number;
  themeGradient: string;
  metrics: EmotionMetrics;
}

export interface DemoMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  emotionDetected?: EmotionType;
  timestamp: string;
  processingMetrics?: {
    latencyMs: number;
    cognitiveSync: number;
    modulationShift: number;
  };
}

export interface TranslationSet {
  title: string;
  subtitle: string;
  tagline: string;
  switchLang: string;
  introText: string;
  sandboxTitle: string;
  sandboxIntro: string;
  orbStatus: string;
  typeMessagePlaceholder: string;
  sendMessage: string;
  vectorConsole: string;
  protectionTitle: string;
  protectionIntro: string;
  roiTitle: string;
  roiSub: string;
  sponsorName: string;
  sponsorEmail: string;
  sendRequest: string;
  ndaSuccess: string;
  backToTop: string;
  researchNoticeTitle: string;
  researchNoticeDesc: string;
  collaborateTitle: string;
  collaborateDesc: string;
  supportEmailLabel: string;
  linkedinLabel: string;
}
