"use client";

import { useEffect, useRef } from "react";
import { RWG } from "@/lib/constants";

const COMMUNITY_LINKS = [
  {
    platform:    "X / TWITTER",
    handle:      "@RWG__official",
    desc:        "Latest updates, milestones, and development progress. Follow the build in real time.",
    href:        RWG.links.twitter,
    color:       "#FF1E1E",
    icon:        "✕",
    cta:         "FOLLOW ON X",
  },
  {
    platform:    "DISCORD",
    handle:      "discord.gg/RWG",
    desc:        "Join the community. Early believers, feedback, announcements, and direct access to the founder.",
    href:        RWG.links.discord,
    color:       "#FFC857",
    icon:        "◈",
    cta:         "JOIN DISCORD",
  },
  {
    platform:    "WHITEPAPER",
    handle:      "v1.0 — LIVE",
    desc:        "30-page technical document. Proof-of-Play spec, tokenomics, oracle network, anti-cheat architecture.",
    href:        RWG.links.whitepaper,
    color:       "#3B82F6",
    icon:        "◎",
    cta:         "READ WHITEPAPER",
  },
];

export default function Community() {
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
    <section id="community" ref={ref} className="py-24 bg-rwg-dark grid-bg">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="section-animate mb-16 text-center">
          <span className="badge text-rwg-gold border-rwg-gold mb-4 inline-block">
            COMMUNITY
          </span>
          <h2 className="font-orbitron font-black text-white text-3xl sm:text-5xl mb-4">
            JOIN THE MOVEMENT
          </h2>
          <p className="font-inter text-rwg-muted max-w-xl mx-auto text-lg leading-relaxed">
            RWG is being built in public. Every milestone announced. Every decision transparent.
            Be here from the beginning.
          </p>
        </div>

        {/* Community cards */}
        <div className="section-animate grid grid-cols-1 md:grid-cols-3 gap-px bg-rwg-dim border border-rwg-dim mb-16">
          {COMMUNITY_LINKS.map((link) => (
            <div
              key={link.platform}
              className="bg-rwg-black p-8 card-hover flex flex-col border-l-2"
              style={{ borderLeftColor: link.color }}
            >
              <div
                className="font-orbitron font-black text-5xl mb-4"
                style={{ color: link.color }}
              >
                {link.icon}
              </div>
              <span className="font-mono text-xs tracking-widest mb-1" style={{ color: link.color }}>
                {link.platform}
              </span>
              <h3 className="font-orbitron font-bold text-white text-lg mb-3">
                {link.handle}
              </h3>
              <p className="font-inter text-rwg-muted text-sm leading-relaxed flex-1 mb-6">
                {link.desc}
              </p>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs px-6 py-3 text-center transition-all tracking-widest border font-semibold"
                style={{
                  color:            link.color,
                  borderColor:      link.color,
                  backgroundColor:  "transparent",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = link.color;
                  (e.currentTarget as HTMLAnchorElement).style.color = "#0B0B0B";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
                  (e.currentTarget as HTMLAnchorElement).style.color = link.color;
                }}
              >
                {link.cta} →
              </a>
            </div>
          ))}
        </div>

        {/* Founder note */}
        <div className="section-animate bg-rwg-panel border border-rwg-dim p-8 red-accent">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-rwg-red flex-shrink-0 flex items-center justify-center font-orbitron font-black text-white">
              O
            </div>
            <div>
              <p className="font-mono text-rwg-red text-xs tracking-widest mb-1">
                FROM THE FOUNDER
              </p>
              <p className="font-inter text-rwg-text text-sm leading-relaxed mb-3">
                &quot;RWG is built on the same philosophical foundation as Bitcoin — zero premine,
                zero VC, zero team allocation. Every token that will ever exist will have been
                earned by a real player through real gameplay. This is non-negotiable and
                will never change regardless of funding pressure.&quot;
              </p>
              <div className="flex items-center gap-3">
                <span className="font-mono text-rwg-muted text-xs">
                  — Shaik Jainuddin (Oye), Founder
                </span>
                <a
                  href={RWG.links.founder}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-rwg-red hover:underline"
                >
                  LinkedIn →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
