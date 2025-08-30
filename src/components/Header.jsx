import { Rocket } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/5 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-sky-500 to-cyan-400 text-black">
            <Rocket className="h-5 w-5" />
          </span>
          <span className="font-semibold tracking-tight">Twistr</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#how" className="hover:text-white transition">How it works</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#" className="hidden sm:inline-flex text-sm px-3 h-9 items-center rounded-md border border-white/15 hover:border-white/30 transition">Docs</a>
          <a href="#" className="inline-flex text-sm px-4 h-9 items-center rounded-md bg-gradient-to-r from-sky-500 to-cyan-400 text-black font-medium shadow-[0_0_0_1px_#ffffff20_inset] hover:brightness-110 transition">
            Sign in with X
          </a>
        </div>
      </div>
    </header>
  );
}
