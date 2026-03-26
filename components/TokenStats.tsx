"use client";

import { useEffect, useRef, useState } from "react";
import { RWG } from "@/lib/constants";

const EMISSION_ROWS = [
  { years: "YEARS 1–5",   reward: "1,486.12 RWG", annual: "~78.1M RWG",  cumulative: "~9.9%",   highlight: true },
  { years: "YEARS 6–10",  reward: "743.06 RWG",   annual: "~39.0M RWG",  cumulative: "~14.8%",  highlight: false },
  { years: "YEARS 11–15", reward: "371.53 RWG",   annual: "~19.5M RWG",  cumulative: "~17.3%",  highlight: false },
  { years: "YEARS 16–20", reward: "185.77 RWG",   annual: "~9.8M RWG",   cumulative: "~18.5%",  highlight: false },
  { years: "YEAR 40+",    reward: "5.0 RWG (floor)", annual: "Minimal", cumulative: "~100%",   highlight: false },
];

const ALLOCATION_ITEMS = [
  { label: "PLAYER MINING",  pct: 100, color: "#FF1E1E", desc: "Every single token earned through gameplay" },
  { label: "VC ALLOCATION",  pct: 0,   color: "#3A3A3A", desc: "Zero investor tokens. Ever." },
  { label: "TEAM RESERVE",   pct: 0,   color: "#3A3A3A", desc: "Founder mines tokens like everyone else" },
  { label: "PREMINE",        pct: 0,   color: "#3A3A3A", desc: "No tokens created before launch" },
];

export default function TokenStats() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            setVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );
    const els = ref.current?.querySelectorAll(".section-animate");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="tokenomics" ref={ref} className="py-24 bg-rwg-dark grid-bg">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="section-animate mb-16">
          <span className="badge text-rwg-gold border-rwg-gold mb-4 inline-block">
            TOKENOMICS
          </span>
          <h2 className="font-orbitron font-black text-white text-3xl sm:text-5xl mb-4">
            RWG TOKEN
          </h2>
          <p className="font-inter text-rwg-muted max-w-2xl text-lg leading-relaxed">
            Engineered for 100 years of sustainable distribution. Every token in existence
            was earned through real gameplay — never allocated, never reserved, never sold.
          </p>
        </div>

        {/* Key stats grid */}
        <div className="section-animate grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-rwg-dim border border-rwg-dim mb-16">
          {[
            { label: "TOTAL SUPPLY",    value: "786M",    sub: "FIXED FOREVER",   color: "#FF1E1E" },
            { label: "PREMINE",         value: "0%",      sub: "ZERO",            color: "#22C55E" },
            { label: "VC ALLOCATION",   value: "0%",      sub: "ZERO",            color: "#22C55E" },
            { label: "TEAM RESERVE",    value: "0%",      sub: "ZERO",            color: "#22C55E" },
            { label: "BLOCK TIME",      value: "10MIN",   sub: "LIKE BITCOIN",    color: "#FFC857" },
            { label: "EMISSION",        value: "100YR",   sub: "LONGEST EVER",    color: "#FFC857" },
          ].map((stat) => (
            <div key={stat.label} className="bg-rwg-black p-6 text-center">
              <div
                className="font-orbitron font-black text-2xl sm:text-3xl mb-1"
                style={{ color: stat.color }}
              >
                {stat.value}
              </div>
              <div className="font-mono text-rwg-soft text-xs tracking-widest mb-1">
                {stat.label}
              </div>
              <div className="font-mono text-xs" style={{ color: stat.color, opacity: 0.6 }}>
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Allocation visual */}
          <div className="section-animate">
            <h3 className="font-orbitron font-bold text-white text-lg tracking-widest mb-6">
              TOKEN ALLOCATION
            </h3>
            <div className="space-y-4">
              {ALLOCATION_ITEMS.map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-mono text-xs text-rwg-muted tracking-widest">{item.label}</span>
                    <span
                      className="font-orbitron font-black text-lg"
                      style={{ color: item.color === "#3A3A3A" ? "#3A3A3A" : item.color }}
                    >
                      {item.pct}%
                    </span>
                  </div>
                  <div className="h-2 bg-rwg-dim overflow-hidden">
                    <div
                      className="h-full transition-all duration-1000"
                      style={{
                        width: visible ? `${item.pct}%` : "0%",
                        backgroundColor: item.color,
                        minWidth: item.pct === 0 ? "0" : "2px",
                      }}
                    />
                  </div>
                  <p className="font-mono text-rwg-soft text-xs mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-rwg-panel border border-rwg-dim p-4 red-accent">
              <p className="font-mono text-rwg-red text-xs font-semibold tracking-widest mb-1">
                NON-NEGOTIABLE
              </p>
              <p className="font-inter text-rwg-muted text-sm">
                These values are protocol constants. They cannot and will not change
                regardless of funding pressure or investor demands.
              </p>
            </div>
          </div>

          {/* Emission schedule */}
          <div className="section-animate">
            <h3 className="font-orbitron font-bold text-white text-lg tracking-widest mb-6">
              EMISSION SCHEDULE
            </h3>
            <div className="border border-rwg-dim overflow-hidden">
              <table className="w-full font-mono text-xs">
                <thead>
                  <tr className="bg-rwg-panel">
                    <th className="border-b border-rwg-dim text-left p-3 text-rwg-muted tracking-widest">PERIOD</th>
                    <th className="border-b border-rwg-dim text-left p-3 text-rwg-muted tracking-widest">BLOCK REWARD</th>
                    <th className="border-b border-rwg-dim text-left p-3 text-rwg-muted tracking-widest">ANNUAL</th>
                    <th className="border-b border-rwg-dim text-left p-3 text-rwg-muted tracking-widest">CUM %</th>
                  </tr>
                </thead>
                <tbody>
                  {EMISSION_ROWS.map((row) => (
                    <tr
                      key={row.years}
                      className={`border-b border-rwg-faint transition-colors ${
                        row.highlight ? "bg-rwg-red/5" : "hover:bg-rwg-faint"
                      }`}
                    >
                      <td className={`p-3 ${row.highlight ? "text-rwg-red font-semibold" : "text-rwg-muted"}`}>
                        {row.years}
                      </td>
                      <td className={`p-3 ${row.highlight ? "text-rwg-text" : "text-rwg-muted"}`}>
                        {row.reward}
                      </td>
                      <td className="p-3 text-rwg-muted">{row.annual}</td>
                      <td className={`p-3 ${row.highlight ? "text-rwg-gold" : "text-rwg-soft"}`}>
                        {row.cumulative}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 font-mono text-rwg-soft text-xs space-y-1">
              <p>◆ Halving every 5 years (262,800 blocks)</p>
              <p>◆ Permanent floor: 5.0 RWG/block from ~Year 40</p>
              <p>◆ Modelled on Bitcoin — extended to 100 years</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
