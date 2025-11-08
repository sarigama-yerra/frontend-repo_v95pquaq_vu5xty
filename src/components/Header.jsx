import React from 'react';
import { Video, Instagram } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-black/70 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 text-white">
          <Video className="w-6 h-6 text-violet-400" />
          <span className="font-semibold tracking-wide">Krish Carpenter</span>
        </a>
        <nav className="flex items-center gap-4 text-sm">
          <a href="#work" className="text-white/80 hover:text-white transition">Work</a>
          <a href="#about" className="text-white/80 hover:text-white transition">About</a>
          <a href="#contact" className="text-white/80 hover:text-white transition">Contact</a>
          <a
            href="https://instagram.com/carpenter_krish_"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-white bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 px-3 py-1.5 rounded-md hover:opacity-90 transition"
          >
            <Instagram className="w-4 h-4" />
            <span>Instagram</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
