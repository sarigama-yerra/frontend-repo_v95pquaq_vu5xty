import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black text-white/80">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">© {new Date().getFullYear()} Krish Carpenter. All rights reserved.</p>
        <div className="text-xs text-white/60">
          Built with love for storytelling.
        </div>
      </div>
    </footer>
  );
}
