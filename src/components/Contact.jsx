import React from 'react';
import { Phone, Mail, Instagram, User } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-16 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Let’s work together</h2>
          <p className="text-gray-600 mt-3">Have footage to turn into a compelling story? I’m available for reels, event highlights, promos, vlogs, and more.</p>
          <ul className="mt-6 space-y-3 text-gray-800">
            <li className="flex items-center gap-3"><User className="w-5 h-5 text-violet-600" /> <span>Krish Carpenter</span></li>
            <li className="flex items-center gap-3"><Phone className="w-5 h-5 text-violet-600" /> <a className="hover:text-violet-600" href="tel:+917803998864">+91 7803998864</a></li>
            <li className="flex items-center gap-3"><Mail className="w-5 h-5 text-violet-600" /> <a className="hover:text-violet-600" href="mailto:krishcarpenter123@gmail.com">krishcarpenter123@gmail.com</a></li>
            <li className="flex items-center gap-3"><Instagram className="w-5 h-5 text-violet-600" /> <a className="hover:text-violet-600" href="https://instagram.com/carpenter_krish_" target="_blank" rel="noreferrer">@carpenter_krish_</a></li>
          </ul>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <form className="grid gap-4">
            <input type="text" placeholder="Your Name" className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-500" />
            <input type="email" placeholder="Email" className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-500" />
            <textarea placeholder="Project details" rows="5" className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-500"></textarea>
            <button type="button" className="bg-violet-600 hover:bg-violet-500 text-white rounded-lg px-5 py-3 font-medium">Send Inquiry</button>
          </form>
          <p className="text-xs text-gray-500 mt-3">This is a demo form. Use the contact details to reach me directly.</p>
        </div>
      </div>
    </section>
  );
}
