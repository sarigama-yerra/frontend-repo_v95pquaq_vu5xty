import React from 'react';

const videos = [
  {
    title: 'Event Highlight Reel',
    thumbnail: 'https://images.unsplash.com/photo-1515121060808-3c61bd9b5278?q=80&w=1200&auto=format&fit=crop',
    url: 'https://www.instagram.com/carpenter_krish_/'
  },
  {
    title: 'Cinematic Travel Edit',
    thumbnail: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1200&auto=format&fit=crop',
    url: 'https://www.instagram.com/carpenter_krish_/'
  },
  {
    title: 'Product Promo Cut',
    thumbnail: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=1200&auto=format&fit=crop',
    url: 'https://www.instagram.com/carpenter_krish_/'
  },
];

export default function WorkGallery() {
  return (
    <section id="work" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Featured Work</h2>
        <p className="text-gray-600 mt-2">A peek into edits I’ve crafted recently.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((v, i) => (
            <a key={i} href={v.url} target="_blank" rel="noreferrer" className="group block rounded-xl overflow-hidden border border-gray-200 bg-gray-50 hover:shadow-lg transition">
              <div className="aspect-video overflow-hidden">
                <img src={v.thumbnail} alt={v.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 group-hover:text-violet-600 transition">{v.title}</h3>
                <p className="text-sm text-gray-600">Tap to view on Instagram</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
