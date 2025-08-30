import React from 'react';
import { Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2 text-sm text-white/70">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-sky-500 to-indigo-500">
              <Twitter className="h-4 w-4" />
            </div>
            <span>AeroTweet © {new Date().getFullYear()}</span>
          </div>
          <nav className="flex items-center gap-6 text-sm text-white/70">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
            <a href="mailto:hello@example.com" className="inline-flex items-center gap-1 hover:text-white">
              <Mail className="h-4 w-4" /> Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
