"use client";

import { useEffect, useRef } from "react";
import { POP_COMPONENTS } from "@/lib/constants";

const STEPS = [
  {
    num:   "01",
    title: "INSTALL LAUNCHER",
    desc:  "Download the RWG Launcher on your Windows, Mac, or Linux machine. Install takes under a minute.",
    color: "#FF1E1E",
  },
  {
    num:   "02",
    title: "PLAY A SUPPORTED GAME",
    desc:  "Launch any supported game through RWG. The Launcher silently tracks your telemetry in the background.",
    color: "#FF1E1E",
  },
  {
    num:   "03",
    title: "EARN RWG EVERY 10 MIN",
    desc:  "Every 10 minutes, your PoP score is computed, validated through our oracle network, and RWG tokens are delivered to your wallet.",
    color: "#FFC857",
  },
];

export default function ProofOfPlay() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    const els = ref.current?.querySelectorAll(".section-animate");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="protocol" ref={ref} className="py-24 bg-rwg-dark grid-bg">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section header */}
        <div className="section-animate mb-16">
          <span className="badge text-rwg-red border-rwg-red mb-4 inline-block">
            THE PROTOCOL
          </span>
          <h2 className="font-orbitron font-black text-white text-3xl sm:text-5xl mb-4">
            PROOF-OF-PLAY
          </h2>
          <p className="font-inter text-rwg-muted max-w-2xl text-lg leading-relaxed">
            The third blockchain consensus mechanism. Just as Bitcoin replaced gold mining
            with computation, RWG replaces computation with human gameplay. Skill is the resource.
          </p>
        </div>

        {/* How it works — 3 steps */}
        <div className="section-animate grid grid-cols-1 md:grid-cols-3 gap-px bg-rwg-dim mb-20 border border-rwg-dim">
          {STEPS.map((step) => (
            <div key={step.num} className="bg-rwg-black p-8 red-accent card-hover relative group">
              <div
                className="font-orbitron font-black text-6xl mb-4 opacity-10 group-hover:opacity-20 transition-opacity"
                style={{ color: step.color }}
              >
                {step.num}
              </div>
              <h3
                className="font-orbitron font-bold text-sm tracking-widest mb-3"
                style={{ color: step.color }}
              >
                {step.title}
              </h3>
              <p className="font-inter text-rwg-muted text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* PoP Score Formula */}
        <div className="section-animate mb-16">
          <div className="bg-rwg-panel border border-rwg-dim p-8 red-accent">
            <div className="font-mono text-rwg-muted text-xs tracking-widest mb-4">
              // POP SCORE FORMULA
            </div>
            <div className="font-mono text-rwg-text text-sm sm:text-base overflow-x-auto">
              <span className="text-rwg-gold">POP_i</span>
              <span className="text-rwg-muted"> = </span>
              <span className="text-rwg-red">786</span>
              <span className="text-rwg-muted"> × (</span>
              <span className="text-white">w1·Skill + w2·Activity + w3·Consistency + w4·Difficulty + w5·Humanity</span>
              <span className="text-rwg-muted">)</span>
            </div>
            <div className="font-mono text-rwg-muted text-xs mt-4">
              Max score: <span className="text-rwg-red">786 points</span> per 10-minute block cycle ·
              Eligibility: <span className="text-rwg-gold">top 40% of active players per block</span>
            </div>
          </div>
        </div>

        {/* 5 Components */}
        <div className="section-animate">
          <h3 className="font-orbitron font-bold text-white text-xl mb-8 tracking-widest">
            5 SCORE COMPONENTS
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-rwg-dim border border-rwg-dim">
            {POP_COMPONENTS.map((comp) => (
              <div key={comp.label} className="bg-rwg-black p-6 card-hover group">
                <div className="text-2xl mb-3">{comp.icon}</div>
                <div
                  className="font-orbitron font-black text-2xl mb-1"
                  style={{ color: comp.color }}
                >
                  {comp.weight}
                </div>
                <div className="font-mono text-white text-xs tracking-widest mb-3 font-semibold">
                  {comp.label}
                </div>
                <p className="font-inter text-rwg-soft text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {comp.desc}
                </p>
              </div>
            ))}
          </div>
          <p className="font-mono text-rwg-soft text-xs mt-4 text-center">
            Hover each component to learn more
          </p>
        </div>

        {/* Comparison table */}
        <div className="section-animate mt-16">
          <h3 className="font-orbitron font-bold text-white text-xl mb-8 tracking-widest">
            THE THREE CONSENSUS MECHANISMS
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-rwg-dim font-mono text-sm">
              <thead>
                <tr className="bg-rwg-panel">
                  <th className="border border-rwg-dim text-left p-4 text-rwg-muted text-xs tracking-widest">PROPERTY</th>
                  <th className="border border-rwg-dim text-left p-4 text-rwg-muted text-xs tracking-widest">PROOF-OF-WORK</th>
                  <th className="border border-rwg-dim text-left p-4 text-rwg-muted text-xs tracking-widest">PROOF-OF-STAKE</th>
                  <th className="border border-rwg-dim text-left p-4 text-rwg-red text-xs tracking-widest bg-rwg-red/5">PROOF-OF-PLAY ◆</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Resource",         "Electricity + ASIC", "Staked capital",     "Player skill + time"],
                  ["Capital Required", "High",               "High",               "None"],
                  ["Barrier to Entry", "Hardware",           "Token ownership",    "Gameplay ability"],
                  ["Egalitarian",      "No",                 "No",                 "Yes"],
                  ["Supply Model",     "Fixed (Bitcoin)",    "Variable",           "Fixed · 786M"],
                  ["Environmental",    "Very high",          "Low",                "Negligible"],
                ].map(([prop, pow, pos, pop]) => (
                  <tr key={prop} className="hover:bg-rwg-faint transition-colors">
                    <td className="border border-rwg-dim p-4 text-rwg-muted text-xs">{prop}</td>
                    <td className="border border-rwg-dim p-4 text-rwg-text text-xs">{pow}</td>
                    <td className="border border-rwg-dim p-4 text-rwg-text text-xs">{pos}</td>
                    <td className="border border-rwg-dim p-4 text-rwg-red text-xs font-semibold bg-rwg-red/5">{pop}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
