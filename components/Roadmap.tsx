"use client";

import { useEffect, useRef } from "react";
import { ROADMAP_PHASES } from "@/lib/constants";

const STATUS_STYLE: Record<string, { border: string; badge: string; dot: string }> = {
  active:  { border: "border-rwg-red",  badge: "text-rwg-red border-rwg-red",   dot: "bg-rwg-red animate-pulse" },
  planned: { border: "border-rwg-dim",  badge: "text-rwg-gold border-rwg-gold", dot: "bg-rwg-dim" },
  future:  { border: "border-rwg-dim",  badge: "text-rwg-soft border-rwg-dim",  dot: "bg-rwg-dim" },
};

export default function Roadmap() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    const els = ref.current?.querySelectorAll(".section-animate");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="roadmap" ref={ref} className="py-24 bg-rwg-black">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="section-animate mb-16">
          <span className="badge text-rwg-red border-rwg-red mb-4 inline-block">
            ROADMAP
          </span>
          <h2 className="font-orbitron font-black text-white text-3xl sm:text-5xl mb-4">
            THE ROAD TO <span className="text-rwg-red">MAINNET</span>
          </h2>
          <p className="font-inter text-rwg-muted max-w-2xl text-lg leading-relaxed">
            Four phases. Foundation through global gaming ecosystem.
            Every milestone is public and verifiable.
          </p>
        </div>

        {/* Phase cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-rwg-dim border border-rwg-dim">
          {ROADMAP_PHASES.map((phase, idx) => {
            const style = STATUS_STYLE[phase.status];
            return (
              <div
                key={phase.phase}
                className={`section-animate bg-rwg-panel p-6 card-hover flex flex-col border-l-2 ${style.border}`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {/* Phase number */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-orbitron font-black text-5xl text-rwg-dim opacity-50">
                    {phase.phase}
                  </span>
                  <span className={`badge ${style.badge}`}>
                    {phase.status === "active" ? "● ACTIVE" : phase.status === "planned" ? "PLANNED" : "FUTURE"}
                  </span>
                </div>

                {/* Title + period */}
                <h3 className="font-orbitron font-bold text-white text-sm tracking-widest mb-1">
                  {phase.label}
                </h3>
                <p className="font-mono text-rwg-soft text-xs mb-6">{phase.period}</p>

                {/* Items */}
                <ul className="space-y-2 flex-1">
                  {phase.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 font-mono text-xs text-rwg-muted">
                      <span className={`mt-1 w-1.5 h-1.5 flex-shrink-0 ${style.dot}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Current focus callout */}
        <div className="section-animate mt-8 bg-rwg-red/5 border border-rwg-red p-6 flex flex-col sm:flex-row items-center gap-6">
          <div className="flex-shrink-0">
            <div className="w-3 h-3 bg-rwg-red animate-pulse" />
          </div>
          <div className="flex-1">
            <p className="font-orbitron font-bold text-rwg-red text-sm tracking-widest mb-1">
              CURRENT FOCUS — PHASE 01
            </p>
            <p className="font-inter text-rwg-muted text-sm">
              Building the foundation. Website live on Vercel. Store with real Supabase auth.
              Whitepaper published on Mirror.xyz. Testnet token contract deployment.
              Every milestone announced publicly.
            </p>
          </div>
          <a
            href={`https://x.com/RWG__official`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 font-mono text-xs text-rwg-red border border-rwg-red px-4 py-2 hover:bg-rwg-red hover:text-white transition-all tracking-widest whitespace-nowrap"
          >
            FOLLOW PROGRESS →
          </a>
        </div>
      </div>
    </section>
  );
}
