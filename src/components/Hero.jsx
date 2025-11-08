import React from 'react';
import { Rocket, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-fuchsia-600/10 to-blue-600/10 pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 py-20 md:py-28 relative">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 mb-4">
            <Rocket className="w-3.5 h-3.5 text-violet-300" />
            <span>Professional Video Editor</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Turning raw footage into cinematic stories
          </h1>
          <p className="mt-4 text-white/80 text-lg md:text-xl">
            I’m Krish Carpenter — I edit, color grade, and craft engaging videos for brands, creators, and events.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#work" className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 transition text-white px-5 py-3 rounded-lg font-medium">
              <Play className="w-5 h-5" />
              View My Work
            </a>
            <a href="#contact" className="px-5 py-3 rounded-lg font-medium border border-white/20 hover:bg-white/10 transition">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
