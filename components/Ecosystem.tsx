"use client";

import { useEffect, useRef } from "react";
import { ECOSYSTEM_CARDS } from "@/lib/constants";

const STATUS_COLORS: Record<string, string> = {
  "BUILDING":     "#22C55E",
  "COMING SOON":  "#FFC857",
  "IN DEVELOPMENT": "#3B82F6",
};

export default function Ecosystem() {
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
    <section id="ecosystem" ref={ref} className="py-24 bg-rwg-black">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="section-animate mb-16">
          <span className="badge text-rwg-gold border-rwg-gold mb-4 inline-block">
            ECOSYSTEM
          </span>
          <h2 className="font-orbitron font-black text-white text-3xl sm:text-5xl mb-4">
            THREE COMPONENTS.<br />
            <span className="text-rwg-red">ONE ECONOMY.</span>
          </h2>
          <p className="font-inter text-rwg-muted max-w-2xl text-lg leading-relaxed">
            The RWG ecosystem is vertically integrated. Every component feeds back into the
            RWG token economy — creating genuine, organic demand driven by real utility.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-rwg-dim border border-rwg-dim">
          {ECOSYSTEM_CARDS.map((card, idx) => (
            <div
              key={card.id}
              className={`section-animate bg-rwg-panel p-8 card-hover border-l-2 flex flex-col`}
              style={{
                borderLeftColor: card.color,
                animationDelay: `${idx * 0.1}s`,
              }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <span
                    className="badge mb-3 inline-block"
                    style={{ color: card.color, borderColor: card.color }}
                  >
                    {card.label}
                  </span>
                  <div className="text-4xl mb-2">{card.icon}</div>
                </div>
                <span
                  className="badge"
                  style={{
                    color: STATUS_COLORS[card.status] || "#999",
                    borderColor: STATUS_COLORS[card.status] || "#999",
                  }}
                >
                  {card.status}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-orbitron font-bold text-white text-xl mb-4">
                {card.title}
              </h3>

              {/* Description */}
              <p className="font-inter text-rwg-muted text-sm leading-relaxed mb-6 flex-1">
                {card.desc}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {card.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 font-mono text-xs text-rwg-muted">
                    <span style={{ color: card.color }}>◆</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom connector */}
        <div className="section-animate mt-12 border border-rwg-dim bg-rwg-faint p-8 text-center">
          <p className="font-orbitron text-rwg-muted text-sm tracking-widest mb-2">
            THE FLYWHEEL
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 font-mono text-xs">
            <span className="text-rwg-red font-semibold">PLAYERS EARN RWG</span>
            <span className="text-rwg-dim">→</span>
            <span className="text-rwg-text">BUY GAMES ON STORE</span>
            <span className="text-rwg-dim">→</span>
            <span className="text-rwg-text">MORE PLAYERS JOIN</span>
            <span className="text-rwg-dim">→</span>
            <span className="text-rwg-gold font-semibold">RWG DEMAND GROWS</span>
            <span className="text-rwg-dim">→</span>
            <span className="text-rwg-red font-semibold">PLAYERS EARN MORE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
