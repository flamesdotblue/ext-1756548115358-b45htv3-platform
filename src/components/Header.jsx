import React from 'react';
import { Twitter, Rocket, Menu } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/5 bg-neutral-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-indigo-500">
            <Rocket className="h-5 w-5" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-wide text-white">AeroTweet</span>
            <span className="text-[11px] text-white/60">Twitter Automation</span>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#features" className="text-sm text-white/80 hover:text-white">Features</a>
          <a href="#pricing" className="text-sm text-white/80 hover:text-white">Pricing</a>
          <a href="#faq" className="text-sm text-white/80 hover:text-white">FAQ</a>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href="#" className="text-sm text-white/80 hover:text-white">Sign in</a>
          <a href="#" className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-neutral-900 transition hover:bg-white/90">
            <Twitter className="h-4 w-4 text-sky-500" />
            Sign in with Twitter
          </a>
        </div>

        <button onClick={() => setOpen((v) => !v)} className="inline-flex items-center justify-center rounded-lg border border-white/10 p-2 text-white md:hidden">
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {open && (
        <div className="border-t border-white/5 px-4 py-3 md:hidden">
          <div className="flex flex-col gap-3">
            <a href="#features" className="text-sm text-white/80 hover:text-white">Features</a>
            <a href="#pricing" className="text-sm text-white/80 hover:text-white">Pricing</a>
            <a href="#faq" className="text-sm text-white/80 hover:text-white">FAQ</a>
            <a href="#" className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-neutral-900">
              <Twitter className="h-4 w-4 text-sky-500" />
              Sign in with Twitter
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
