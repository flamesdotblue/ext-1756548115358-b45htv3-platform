import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Zap, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 pb-12 pt-16 md:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
            <span className="inline-flex items-center gap-1">
              <Twitter className="h-3.5 w-3.5 text-sky-500" />
              Works with X (Twitter)
            </span>
            <span className="h-3 w-px bg-white/10" />
            <span className="text-white/60">No-code setup • Safe automations</span>
          </div>

          <h1 className="bg-gradient-to-br from-white to-white/70 bg-clip-text text-4xl font-semibold tracking-tight text-transparent sm:text-5xl md:text-6xl">
            Automate your Twitter growth, the smart and safe way
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            Schedule threads, auto-reply to prospects, curate lists, and engage 10x faster. AeroTweet handles the busywork so you can focus on creating signal, not noise.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#pricing" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:brightness-110">
              Start free trial
            </a>
            <a href="#features" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 hover:bg-white/10">
              <Zap className="h-4 w-4 text-yellow-300" />
              See how it works
            </a>
          </div>

          <div className="mt-8 grid grid-cols-2 items-center gap-4 text-left sm:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-2xl font-semibold">10x</p>
              <p className="text-xs text-white/60">Faster engagement</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-2xl font-semibold">0 code</p>
              <p className="text-xs text-white/60">5-min setup</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-white/70" />
                <p className="text-xs text-white/60">24/7 queue</p>
              </div>
              <p className="mt-1 text-sm">Never miss peak hours</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-3 shadow-2xl shadow-indigo-900/20"
        >
          <div className="rounded-xl border border-white/10 bg-neutral-950/80">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2 text-xs text-white/60">
              <div className="flex gap-1">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
              </div>
              Automation Preview
            </div>
            <div className="grid gap-0 md:grid-cols-2">
              <div className="p-5">
                <p className="text-sm text-white/70">Rule</p>
                <h3 className="mt-1 text-lg font-medium">Auto-reply when mentioned by a founder</h3>
                <ul className="mt-4 space-y-2 text-sm text-white/70">
                  <li>• If bio includes "founder"</li>
                  <li>• If follower count > 1,000</li>
                  <li>• Send reply: "Thanks for the mention! Here’s a resource you might like ⬇️"</li>
                </ul>
              </div>
              <div className="border-t border-white/10 p-5 md:border-l md:border-t-0">
                <div className="flex items-start gap-3">
                  <div className="h-9 w-9 shrink-0 rounded-full bg-gradient-to-br from-sky-500 to-indigo-500" />
                  <div>
                    <p className="text-sm"><span className="text-white/60">You</span> • replying to <span className="text-sky-400">@founder</span></p>
                    <p className="mt-1 text-white/90">Appreciate the tag! We just wrote a thread on automating outreach — here7s the link.</p>
                  </div>
                </div>
                <div className="mt-4 rounded-lg border border-white/10 bg-white/5 p-3 text-xs text-white/70">
                  Tip: Tweak your conditions to keep automations relevant and human.
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
