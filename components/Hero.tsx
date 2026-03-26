"use client";

import { useEffect, useRef, useState } from "react";
import { RWG } from "@/lib/constants";

const STATS = [
  { value: "786M",  label: "FIXED SUPPLY",    suffix: "" },
  { value: "0%",    label: "PREMINE",          suffix: "" },
  { value: "10",    label: "MIN BLOCK TIME",   suffix: "MIN" },
  { value: "100",   label: "YEAR EMISSION",    suffix: "YR" },
];

export default function Hero() {
  const [waitEmail, setWaitEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);
  const [error, setError]         = useState("");
  const heroRef = useRef<HTMLDivElement>(null);

  const handleWaitlist = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!waitEmail.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    setLoading(true);
    setError("");
    // Will connect to Supabase waitlist table
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grid-bg scanlines pt-16"
    >
      {/* Red radial glow */}
      <div className="hero-glow absolute inset-0 pointer-events-none" />

      {/* Scan sweep */}
      <div className="scan-sweep" />

      {/* Corner brackets — cyberpunk detail */}
      <div className="absolute top-24 left-6 w-8 h-8 border-t-2 border-l-2 border-rwg-red opacity-40" />
      <div className="absolute top-24 right-6 w-8 h-8 border-t-2 border-r-2 border-rwg-red opacity-40" />
      <div className="absolute bottom-16 left-6 w-8 h-8 border-b-2 border-l-2 border-rwg-red opacity-40" />
      <div className="absolute bottom-16 right-6 w-8 h-8 border-b-2 border-r-2 border-rwg-red opacity-40" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-8">
          <span className="badge text-rwg-red border-rwg-red">
            PROOF-OF-PLAY PROTOCOL
          </span>
          <span className="badge text-rwg-gold border-rwg-gold">
            v1.0
          </span>
        </div>

        {/* Main headline */}
        <h1 className="font-orbitron font-black text-white leading-none mb-6">
          <span className="block text-4xl sm:text-6xl lg:text-8xl tracking-tight">
            REAL WORLD
          </span>
          <span className="block text-4xl sm:text-6xl lg:text-8xl tracking-tight text-rwg-red glow-red">
            GAMING
          </span>
        </h1>

        {/* Subheadline */}
        <p className="font-orbitron text-rwg-muted text-sm sm:text-base lg:text-lg tracking-widest mb-4 uppercase">
          The Third Consensus Mechanism
        </p>

        {/* Core proposition */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10 text-sm sm:text-base">
          <span className="font-mono text-rwg-text">Proof-of-Work: Expend electricity.</span>
          <span className="text-rwg-dim">·</span>
          <span className="font-mono text-rwg-text">Proof-of-Stake: Lock capital.</span>
          <span className="text-rwg-dim">·</span>
          <span className="font-mono font-semibold text-rwg-red">Proof-of-Play: Demonstrate skill.</span>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-rwg-dim mb-10 border border-rwg-dim">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="bg-rwg-black px-6 py-5 text-center"
            >
              <div className="font-orbitron font-black text-rwg-red text-2xl sm:text-3xl glow-red mb-1">
                {stat.value}
              </div>
              <div className="font-mono text-rwg-soft text-xs tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Zero allocation badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {["0% PREMINE", "0% VC ALLOCATION", "0% TEAM RESERVE", "100% PLAYER MINED"].map((item) => (
            <span key={item} className="badge text-rwg-gold border-rwg-gold bg-rwg-gold/5">
              {item}
            </span>
          ))}
        </div>

        {/* Waitlist form */}
        <div id="waitlist" className="max-w-lg mx-auto">
          {submitted ? (
            <div className="border border-rwg-green bg-rwg-green/5 p-6 text-center">
              <div className="font-orbitron text-rwg-green text-lg font-bold mb-2">
                ✓ YOU&apos;RE ON THE LIST
              </div>
              <p className="font-mono text-rwg-muted text-sm">
                We&apos;ll notify you when RWG launches. Stay tuned on X and Discord.
              </p>
            </div>
          ) : (
            <form onSubmit={handleWaitlist} className="flex flex-col sm:flex-row gap-0">
              <input
                type="email"
                value={waitEmail}
                onChange={(e) => setWaitEmail(e.target.value)}
                placeholder="enter your email address"
                className="flex-1 bg-rwg-dark border border-rwg-dim text-rwg-text font-mono text-sm px-4 py-4 placeholder-rwg-soft focus:outline-none focus:border-rwg-red transition-colors"
                required
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-rwg-red text-white font-orbitron font-bold text-xs px-8 py-4 hover:bg-rwg-red-dark transition-colors tracking-widest disabled:opacity-50 whitespace-nowrap"
              >
                {loading ? "JOINING..." : "JOIN WAITLIST"}
              </button>
            </form>
          )}
          {error && (
            <p className="font-mono text-rwg-red text-xs mt-2">{error}</p>
          )}
          <p className="font-mono text-rwg-soft text-xs mt-3">
            No spam. Just launch updates. Unsubscribe anytime.
          </p>
        </div>

        {/* Secondary CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <a
            href={RWG.links.whitepaper}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-rwg-muted border border-rwg-dim px-6 py-3 hover:border-rwg-red hover:text-rwg-red transition-all tracking-widest"
          >
            READ WHITEPAPER →
          </a>
          <a
            href={RWG.links.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-rwg-muted border border-rwg-dim px-6 py-3 hover:border-rwg-gold hover:text-rwg-gold transition-all tracking-widest"
          >
            JOIN DISCORD →
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="font-mono text-rwg-soft text-xs tracking-widest">SCROLL</span>
        <div className="w-px h-8 bg-rwg-red animate-pulse" />
      </div>
    </section>
  );
}
