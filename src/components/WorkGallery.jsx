import React from 'react';

// Update these entries with your own video links.
// Supports: YouTube (watch or share links), Vimeo links, or direct .mp4 URLs.
const videos = [
  {
    title: 'Wedding Highlight – Akash x Riya',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    title: 'Cinematic Travel Reel – Ladakh',
    url: 'https://player.vimeo.com/video/76979871',
  },
  {
    title: 'Commercial Product Edit – Matte Finish',
    url: 'https://filesamples.com/samples/video/mp4/sample_960x400_ocean_with_audio.mp4',
  },
];

function getYouTubeEmbed(url) {
  try {
    const u = new URL(url);
    if (u.hostname.includes('youtube.com')) {
      const id = u.searchParams.get('v');
      if (id) return `https://www.youtube.com/embed/${id}`;
    }
    if (u.hostname.includes('youtu.be')) {
      const id = u.pathname.replace('/', '');
      if (id) return `https://www.youtube.com/embed/${id}`;
    }
  } catch (_) {}
  return null;
}

function isVimeo(url) {
  try {
    const u = new URL(url);
    return u.hostname.includes('vimeo.com');
  } catch (_) {
    return false;
  }
}

function isMP4(url) {
  return /\.mp4($|\?)/i.test(url);
}

function VideoCard({ title, url }) {
  const yt = getYouTubeEmbed(url);
  const vimeo = isVimeo(url);
  const mp4 = isMP4(url);

  return (
    <div className="group rounded-xl overflow-hidden border border-gray-200 bg-gray-50 hover:shadow-lg transition">
      <div className="aspect-video bg-black">
        {yt && (
          <iframe
            src={`${yt}?rel=0`}
            title={title}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        )}
        {!yt && vimeo && (
          <iframe
            src={url}
            title={title}
            className="w-full h-full"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        )}
        {!yt && !vimeo && mp4 && (
          <video controls className="w-full h-full object-cover">
            <source src={url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        {!yt && !vimeo && !mp4 && (
          <div className="w-full h-full flex items-center justify-center text-white/80">
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-white"
            >
              Open Video
            </a>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 group-hover:text-violet-600 transition">{title}</h3>
        <p className="text-sm text-gray-600">Update this list with your own links.</p>
      </div>
    </div>
  );
}

export default function WorkGallery() {
  return (
    <section id="work" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">My Edited Videos</h2>
        <p className="text-gray-600 mt-2">You can replace these with your YouTube, Vimeo, or .mp4 links.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((v, i) => (
            <VideoCard key={i} title={v.title} url={v.url} />
          ))}
        </div>
      </div>
    </section>
  );
}
