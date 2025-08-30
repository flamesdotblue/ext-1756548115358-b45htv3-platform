import { Rocket, Shield, PlayCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-sky-500/20 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-cyan-400 text-black">
                <Rocket className="h-3.5 w-3.5" />
              </span>
              Ship faster on X with safe automation
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
              Automate your X (Twitter) growth without sounding like a bot
            </h1>
            <p className="mt-4 text-white/75 text-lg leading-relaxed">
              Twistr helps founders and creators schedule threads, auto-reply to mentions, and curate lead lists using smart filters—so you can grow while you sleep.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-sky-500 to-cyan-400 text-black px-5 h-11 font-medium shadow-[0_0_0_1px_#ffffff20_inset] hover:brightness-110 transition">
                Start free trial
              </a>
              <a href="#" className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-4 h-11 hover:bg-white/10 transition">
                <PlayCircle className="h-5 w-5 text-white/80" />
                Watch demo
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-white/60">
              <div className="flex -space-x-2">
                <img src="https://i.pravatar.cc/40?img=1" alt="user" className="h-7 w-7 rounded-full ring-2 ring-white/10" />
                <img src="https://i.pravatar.cc/40?img=2" alt="user" className="h-7 w-7 rounded-full ring-2 ring-white/10" />
                <img src="https://i.pravatar.cc/40?img=3" alt="user" className="h-7 w-7 rounded-full ring-2 ring-white/10" />
              </div>
              <span>Trusted by 3,000+ creators</span>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              <div className="rounded-xl border border-white/10 bg-gradient-to-b from-white/10 to-transparent p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Smart Auto-Reply</h3>
                    <p className="text-xs text-white/60">Rules that feel human</p>
                  </div>
                  <span className="text-xs text-emerald-400">Live</span>
                </div>
                <div className="mt-4 rounded-lg border border-white/10 bg-black/30 p-3 text-sm">
                  <p className="text-white/80">When someone mentions @twistr</p>
                  <ul className="mt-2 space-y-2 text-white/70">
                    <li>• If bio includes "founder"</li>
                    <li>• If follower count &gt; 1,000</li>
                    <li>• Send reply: "Thanks for the mention! Here’s a resource you might like ⬇️"</li>
                  </ul>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
                  <div className="rounded-md border border-white/10 bg-white/5 p-3">
                    <p className="text-white/70">Auto DMs</p>
                    <p className="mt-1 text-white/50">Deliver lead magnets when users comment a keyword.</p>
                  </div>
                  <div className="rounded-md border border-white/10 bg-white/5 p-3">
                    <p className="text-white/70">Thread Scheduler</p>
                    <p className="mt-1 text-white/50">Queue threads at peak times based on your audience.</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs text-white/70">
                  <Shield className="h-4 w-4 text-emerald-400" />
                  Safe limits, random delays, and human-like cadence
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
