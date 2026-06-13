/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { EmotionType, EmotionProfile } from '../types';

interface EmotionOrbProps {
  currentEmotion: EmotionProfile;
  lang: 'en' | 'fa';
}

export default function EmotionOrb({ currentEmotion, lang }: EmotionOrbProps) {
  const { color, glowColor, orbScale, pulseSpeed, vibrationIntensity, metrics } = currentEmotion;

  // Generate dynamic aura layers
  return (
    <div className="relative flex flex-col items-center justify-center p-8 bg-slate-900/60 rounded-3xl border border-slate-800/80 backdrop-blur-md overflow-hidden min-h-[420px]">
      {/* Dynamic Background Fluid Glow */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none transition-all duration-1000 ease-outBlur"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${color} 0%, rgba(15, 23, 42, 0) 70%)`
        }}
      />

      {/* Interactive Orb Engine Visualizer */}
      <div className="relative w-72 h-72 flex items-center justify-center">
        {/* Layer 1: Outermost dynamic atmospheric glow */}
        <motion.div
          id="atmospheric-glow"
          className="absolute rounded-full"
          style={{
            width: '260px',
            height: '260px',
            border: `2px dashed ${color}20`,
            boxShadow: `0 0 80px 20px ${glowColor}`,
          }}
          animate={{
            rotate: 360,
            scale: [0.95 * orbScale, 1.05 * orbScale, 0.95 * orbScale],
          }}
          transition={{
            rotate: { duration: 30 / vibrationIntensity, repeat: Infinity, ease: 'linear' },
            scale: { duration: pulseSpeed, repeat: Infinity, ease: 'easeInOut' }
          }}
        />

        {/* Layer 2: Medium orbit ring */}
        <motion.div
          id="orbit-ring"
          className="absolute rounded-full"
          style={{
            width: '200px',
            height: '200px',
            border: `1.5px solid ${color}40`,
          }}
          animate={{
            rotate: -360,
            scale: [1.02 * orbScale, 0.97 * orbScale, 1.02 * orbScale],
          }}
          transition={{
            rotate: { duration: 15 / vibrationIntensity, repeat: Infinity, ease: 'linear' },
            scale: { duration: pulseSpeed * 0.8, repeat: Infinity, ease: 'easeInOut' }
          }}
        />

        {/* Layer 3: Main Core Pulsing Orb */}
        <motion.div
          id="core-orb"
          className="absolute rounded-full cursor-pointer flex items-center justify-center group"
          style={{
            width: '140px',
            height: '140px',
            background: `radial-gradient(circle at 35% 35%, #ffffff 0%, ${color} 40%, #030712 100%)`,
            boxShadow: `inset 0 0 20px rgba(255, 255, 255, 0.4), 0 0 45px ${color}`,
          }}
          animate={{
            scale: [orbScale, 1.08 * orbScale, orbScale],
            x: [0, (Math.random() - 0.5) * vibrationIntensity * 2.5, 0],
            y: [0, (Math.random() - 0.5) * vibrationIntensity * 2.5, 0],
          }}
          transition={{
            scale: { duration: pulseSpeed * 0.5, repeat: Infinity, ease: 'easeInOut' },
            x: { duration: 0.1, repeat: Infinity, ease: 'linear' },
            y: { duration: 0.1, repeat: Infinity, ease: 'linear' }
          }}
          whileHover={{ scale: 1.15 * orbScale }}
        >
          {/* Internal core glisten */}
          <div className="absolute top-4 left-6 w-8 h-4 bg-white/20 rounded-full rotate-[-30deg] blur-[1px]" />
          <div className="absolute w-4 h-4 bg-white/40 rounded-full blur-[2px] top-6 left-10" />

          {/* Core Status indicator */}
          <span className="text-[10px] tracking-widest uppercase font-mono font-bold text-white/80 select-none opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
            {currentEmotion.id}
          </span>
        </motion.div>

        {/* Subtle Orbiting Satellites */}
        {[0, 120, 240].map((angle, idx) => (
          <motion.div
            key={idx}
            className="absolute w-3 h-3 rounded-full shadow-[0_0_12px_rgba(255,255,255,0.8)]"
            style={{
              backgroundColor: color,
              originX: '110px',
              originY: '110px',
              left: 'calc(50% - 110px)',
              top: 'calc(50% - 110px)',
            }}
            animate={{
              rotate: angle + 360,
            }}
            transition={{
              duration: 8 - idx * 2,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Real-time Bio-metric Feedback */}
      <div className="w-full mt-4 bg-slate-950/70 p-4 rounded-2xl border border-slate-800/80 font-mono text-xs z-10">
        <div className="flex justify-between items-center mb-3">
          <span className="text-slate-400 text-[11px] uppercase tracking-wider font-bold">
            {lang === 'fa' ? 'سیگنال‌های نوسان' : 'Fluctuation Signals'}
          </span>
          <span className="text-white font-medium bg-white/10 px-2 py-0.5 rounded text-[10px]" style={{ color }}>
            {lang === 'fa' ? currentEmotion.nameFa : currentEmotion.nameEn}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-1">
            <div className="flex justify-between text-slate-400 text-[10px]">
              <span>VALENCE:</span>
              <span className="font-bold text-white">{(metrics.valence >= 0 ? '+' : '') + metrics.valence}</span>
            </div>
            <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
              <motion.div 
                className="h-full rounded-full transition-all duration-1000"
                style={{ 
                  backgroundColor: color,
                  width: `${((metrics.valence + 1) / 2) * 100}%` 
                }} 
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex justify-between text-slate-400 text-[10px]">
              <span>AROUSAL:</span>
              <span className="font-bold text-white">{metrics.arousal}</span>
            </div>
            <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
              <motion.div 
                className="h-full rounded-full transition-all duration-1000"
                style={{ 
                  backgroundColor: color,
                  width: `${metrics.arousal * 100}%` 
                }} 
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex justify-between text-slate-400 text-[10px]">
              <span>DOMINANCE:</span>
              <span className="font-bold text-white">{metrics.dominance}</span>
            </div>
            <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
              <motion.div 
                className="h-full rounded-full transition-all duration-1000"
                style={{ 
                  backgroundColor: color,
                  width: `${metrics.dominance * 100}%` 
                }} 
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex justify-between text-slate-400 text-[10px]">
              <span>EMPATHY:</span>
              <span className="font-bold text-white">{metrics.empathyIndex}</span>
            </div>
            <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
              <motion.div 
                className="h-full rounded-full transition-all duration-1000"
                style={{ 
                  backgroundColor: color,
                  width: `${metrics.empathyIndex * 100}%` 
                }} 
              />
            </div>
          </div>
        </div>

        <div className="mt-3 pt-3 border-t border-slate-800/80 grid grid-cols-3 text-[10px] text-slate-500 text-center">
          <div>
            <div className="text-slate-400 font-bold">{(1 / pulseSpeed * 5).toFixed(2)} Hz</div>
            <div>{lang === 'fa' ? 'شتاب تپش' : 'Pulse rate'}</div>
          </div>
          <div>
            <div className="text-slate-400 font-bold">{vibrationIntensity * 10} m/s²</div>
            <div>{lang === 'fa' ? 'لرزش هسته' : 'Core jitter'}</div>
          </div>
          <div>
            <div className="text-slate-400 font-bold">{(orbScale * 120).toFixed(0)} nm</div>
            <div>{lang === 'fa' ? 'شعاع اتمی' : 'Spectral radius'}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
