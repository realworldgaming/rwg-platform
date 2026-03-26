"use client";

import { useEffect, useRef } from "react";

export default function Ecosystem() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.08 }
    );
    const els = ref.current?.querySelectorAll(".section-animate");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="ecosystem" ref={ref} className="bg-rwg-black">

      {/* SECTION HEADER */}
      <div className="py-24 border-b border-rwg-dim">
        <div className="max-w-7xl mx-auto px-6">
          <div className="section-animate">
            <span className="badge text-rwg-gold border-rwg-gold mb-4 inline-block">ECOSYSTEM</span>
            <h2 className="font-orbitron font-black text-white text-3xl sm:text-5xl mb-4">
              THREE PILLARS.<br />
              <span className="text-rwg-red">ONE ECONOMY.</span>
            </h2>
            <p className="font-inter text-rwg-muted max-w-2xl text-lg leading-relaxed">
              Every component of RWG feeds back into the token economy — creating genuine,
              organic demand through real utility. Not speculation. Real use.
            </p>
          </div>
          <div className="section-animate grid grid-cols-3 gap-px bg-rwg-dim border border-rwg-dim mt-12">
            <a href="#store" className="bg-rwg-panel p-6 flex flex-col items-center text-center hover:bg-rwg-faint transition-colors group">
              <span className="font-orbitron font-black text-3xl mb-2 group-hover:scale-110 transition-transform text-rwg-red">01</span>
              <span className="font-mono text-white text-xs font-bold tracking-widest mb-1">RWG STORE</span>
              <span className="font-inter text-rwg-soft text-xs">Buy and Own Games</span>
            </a>
            <a href="#launcher" className="bg-rwg-panel p-6 flex flex-col items-center text-center hover:bg-rwg-faint transition-colors group">
              <span className="font-orbitron font-black text-3xl mb-2 group-hover:scale-110 transition-transform text-rwg-gold">02</span>
              <span className="font-mono text-white text-xs font-bold tracking-widest mb-1">RWG LAUNCHER</span>
              <span className="font-inter text-rwg-soft text-xs">Play and Earn RWG</span>
            </a>
            <a href="#studio" className="bg-rwg-panel p-6 flex flex-col items-center text-center hover:bg-rwg-faint transition-colors group">
              <span className="font-orbitron font-black text-3xl mb-2 group-hover:scale-110 transition-transform text-rwg-blue">03</span>
              <span className="font-mono text-white text-xs font-bold tracking-widest mb-1">RWG STUDIO</span>
              <span className="font-inter text-rwg-soft text-xs">Build and Launch Games</span>
            </a>
          </div>
        </div>
      </div>

      {/* PILLAR 01 — RWG STORE */}
      <div id="store" className="py-24 border-b border-rwg-dim grid-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="section-animate flex items-center gap-4 mb-12">
            <div className="w-1 h-16 bg-rwg-red" />
            <div>
              <span className="badge text-rwg-red border-rwg-red mb-2 inline-block">PILLAR 01</span>
              <h3 className="font-orbitron font-black text-white text-3xl sm:text-4xl">RWG STORE</h3>
            </div>
            <div className="ml-auto"><span className="badge text-rwg-green border-rwg-green">BUILDING</span></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="section-animate">
              <p className="font-inter text-rwg-text text-xl leading-relaxed mb-8 font-light">
                The RWG Store is a <span className="text-rwg-red font-semibold">blockchain-native game marketplace</span> where
                players discover, buy, and permanently own games. Every purchase is recorded
                on-chain. No platform can ever revoke, delete, or restrict your games.
              </p>
              <div className="bg-rwg-panel border border-rwg-dim p-6 red-accent mb-6">
                <p className="font-mono text-rwg-red text-xs tracking-widest mb-2">THE PROBLEM IT SOLVES</p>
                <p className="font-inter text-rwg-muted text-sm leading-relaxed">
                  Steam can ban your account. PSN can remove games from your library.
                  Publishers shut down servers and your games disappear.
                  <span className="text-rwg-text"> With RWG Store, the game belongs to
                  your wallet address — permanently, cryptographically, irrevocably.</span>
                </p>
              </div>
              <div className="space-y-3">
                {[
                  { icon: "🛒", title: "500,000+ Games", desc: "Full catalogue powered by RAWG API — AAA, indie, retro. Every genre, every platform." },
                  { icon: "💳", title: "Buy with Fiat or RWG Tokens", desc: "Pay with card, crypto, or RWG tokens. RWG purchases get a discount — real token utility." },
                  { icon: "⛓", title: "On-Chain Ownership", desc: "Every purchase minted as a blockchain record. Your wallet is your proof of ownership. Forever." },
                  { icon: "📚", title: "Unified Game Library", desc: "All purchased games appear instantly in your RWG Launcher. One library across all platforms." },
                  { icon: "🎬", title: "Social and Streaming Built-In", desc: "Player profiles, community hubs, game clips, live streaming — all inside the Store." },
                  { icon: "💰", title: "Creator Monetisation", desc: "Content creators earn RWG automatically via on-chain revenue attribution. No middleman takes a cut." },
                ].map((f) => (
                  <div key={f.title} className="flex items-start gap-4 p-4 bg-rwg-faint border border-rwg-dim hover:border-rwg-red transition-colors group">
                    <span className="text-xl flex-shrink-0">{f.icon}</span>
                    <div>
                      <p className="font-mono text-white text-xs font-semibold tracking-widest mb-1 group-hover:text-rwg-red transition-colors">{f.title}</p>
                      <p className="font-inter text-rwg-muted text-xs leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="section-animate">
              <div className="bg-rwg-panel border border-rwg-dim overflow-hidden">
                <div className="bg-rwg-dark border-b border-rwg-dim px-4 py-3 flex items-center gap-2">
                  <div className="w-3 h-3 bg-rwg-red" />
                  <div className="w-3 h-3 bg-rwg-gold" />
                  <div className="w-3 h-3 bg-rwg-green" />
                  <div className="flex-1 mx-4 bg-rwg-faint px-3 py-1 font-mono text-xs text-rwg-soft">store.playrwg.com</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-rwg-red text-xs tracking-widest font-bold">FEATURED GAMES</span>
                    <span className="badge text-rwg-muted border-rwg-dim">500,000+ TITLES</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {[
                      { title: "Cyberpunk 2077", genre: "RPG",    price: "29.99", rwg: "249", badge: "PoP", bc: "#FF1E1E" },
                      { title: "Elden Ring",      genre: "ACTION", price: "39.99", rwg: "333", badge: "HOT", bc: "#FFC857" },
                      { title: "Valorant",         genre: "FPS",    price: "FREE",  rwg: "0",   badge: "PoP", bc: "#FF1E1E" },
                      { title: "RWG Origin",       genre: "RWG",    price: "SOON",  rwg: "—",   badge: "NEW", bc: "#3B82F6" },
                    ].map((g) => (
                      <div key={g.title} className="bg-rwg-black border border-rwg-dim p-3 hover:border-rwg-red transition-colors">
                        <div className="w-full h-14 bg-rwg-faint mb-2 flex items-center justify-center">
                          <span className="font-mono text-rwg-dim text-xs">COVER</span>
                        </div>
                        <div className="flex items-start justify-between mb-1">
                          <p className="font-exo text-white text-xs font-semibold">{g.title}</p>
                          <span className="font-mono text-xs px-1 border" style={{ color: g.bc, borderColor: g.bc, fontSize: "9px" }}>{g.badge}</span>
                        </div>
                        <p className="font-mono text-rwg-soft text-xs">{g.genre}</p>
                        <div className="mt-2 flex items-center justify-between">
                          <span className="font-mono text-rwg-red text-xs font-bold">${g.price}</span>
                          <span className="font-mono text-rwg-muted text-xs">{g.rwg} RWG</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="bg-rwg-faint border border-rwg-dim p-3 text-center">
                    <p className="font-mono text-rwg-soft text-xs">Powered by RAWG API · On-chain ownership proof</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PILLAR 02 — RWG LAUNCHER */}
      <div id="launcher" className="py-24 border-b border-rwg-dim bg-rwg-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="section-animate flex items-center gap-4 mb-12">
            <div className="w-1 h-16 bg-rwg-gold" />
            <div>
              <span className="badge text-rwg-gold border-rwg-gold mb-2 inline-block">PILLAR 02</span>
              <h3 className="font-orbitron font-black text-white text-3xl sm:text-4xl">RWG LAUNCHER</h3>
            </div>
            <div className="ml-auto"><span className="badge text-rwg-gold border-rwg-gold">COMING SOON</span></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="section-animate order-2 lg:order-1">
              <div className="bg-rwg-black border border-rwg-dim overflow-hidden">
                <div className="bg-rwg-panel border-b border-rwg-dim px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-rwg-gold flex items-center justify-center">
                      <span className="font-orbitron text-black text-xs font-black">R</span>
                    </div>
                    <span className="font-mono text-white text-xs font-bold tracking-widest">RWG LAUNCHER</span>
                  </div>
                  <span className="badge text-rwg-green border-rwg-green text-xs">MINING ACTIVE</span>
                </div>
                <div className="p-6">
                  <div className="bg-rwg-panel border border-rwg-gold/30 p-4 mb-4 text-center">
                    <p className="font-mono text-rwg-muted text-xs tracking-widest mb-1">NEXT BLOCK REWARD IN</p>
                    <p className="font-orbitron font-black text-rwg-gold text-4xl">07:23</p>
                    <p className="font-mono text-rwg-soft text-xs mt-1">Block #000,001 · 144 blocks/day</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-rwg-faint border border-rwg-dim p-3 text-center">
                      <p className="font-mono text-rwg-muted text-xs mb-1">YOUR POP SCORE</p>
                      <p className="font-orbitron font-black text-rwg-red text-2xl">623<span className="text-sm">/786</span></p>
                      <p className="font-mono text-rwg-green text-xs">PRO TIER</p>
                    </div>
                    <div className="bg-rwg-faint border border-rwg-dim p-3 text-center">
                      <p className="font-mono text-rwg-muted text-xs mb-1">EARNED TODAY</p>
                      <p className="font-orbitron font-black text-rwg-gold text-2xl">142.3</p>
                      <p className="font-mono text-rwg-muted text-xs">RWG</p>
                    </div>
                  </div>
                  <div className="bg-rwg-faint border border-rwg-red/30 p-3 flex items-center gap-3 mb-4">
                    <div className="w-2 h-2 bg-rwg-red animate-pulse flex-shrink-0" />
                    <div className="flex-1">
                      <p className="font-mono text-rwg-red text-xs font-bold tracking-widest">CURRENTLY PLAYING</p>
                      <p className="font-exo text-white text-sm font-semibold">Valorant</p>
                    </div>
                    <div className="text-right">
                      <p className="font-mono text-rwg-muted text-xs">Session</p>
                      <p className="font-mono text-white text-xs font-bold">1h 23m</p>
                    </div>
                  </div>
                  <div className="border border-rwg-dim overflow-hidden">
                    <div className="bg-rwg-panel px-3 py-2 font-mono text-rwg-muted text-xs tracking-widest">REWARD TIERS</div>
                    {[
                      { tier: "ULTRA", top: "Top 4%",  share: "50% of block", color: "#FF1E1E" },
                      { tier: "PRO",   top: "Top 7%",  share: "30% of block", color: "#FFC857" },
                      { tier: "BASE",  top: "Top 40%", share: "20% of block", color: "#22C55E" },
                    ].map((t) => (
                      <div key={t.tier} className="flex items-center justify-between px-3 py-2 border-t border-rwg-dim">
                        <span className="font-mono text-xs font-bold" style={{ color: t.color }}>{t.tier}</span>
                        <span className="font-mono text-rwg-muted text-xs">{t.top}</span>
                        <span className="font-mono text-rwg-text text-xs">{t.share}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="section-animate order-1 lg:order-2">
              <p className="font-inter text-rwg-text text-xl leading-relaxed mb-8 font-light">
                The RWG Launcher is the <span className="text-rwg-gold font-semibold">mining client</span> — the most
                critical piece of the ecosystem. Install it once. Play your favorite games.
                Earn RWG tokens automatically every 10 minutes. No hardware. No capital. Just skill.
              </p>
              <div className="bg-rwg-panel border border-rwg-gold/20 p-6 mb-6" style={{ borderLeft: "2px solid #FFC857" }}>
                <p className="font-mono text-rwg-gold text-xs tracking-widest mb-2">HOW MINING WORKS</p>
                <p className="font-inter text-rwg-muted text-sm leading-relaxed">
                  Every 10 minutes is a new block. The Launcher computes your Proof-of-Play score
                  from your gameplay and submits it to the oracle network.
                  <span className="text-rwg-text"> If you are in the top 40% of active players,
                  you earn a share of that block reward delivered straight to your wallet.</span>
                </p>
              </div>
              <div className="space-y-4 mb-6">
                {[
                  { step: "01", title: "Install on Windows, Mac or Linux", desc: "One installer. Runs silently in background. Does not slow your games at all." },
                  { step: "02", title: "Launch any supported game", desc: "Launcher detects supported games automatically and begins telemetry capture in background." },
                  { step: "03", title: "PoP score computed every 10 minutes", desc: "Skill, Activity, Consistency, Difficulty, Humanity — five components, one final score." },
                  { step: "04", title: "Oracle network validates your score", desc: "Six regional oracle nodes validate gameplay data. Decentralised. Tamper-proof." },
                  { step: "05", title: "RWG delivered to your wallet", desc: "Smart contract distributes your block reward share on-chain. Transparent. Automatic." },
                ].map((s) => (
                  <div key={s.step} className="flex items-start gap-4 p-4 bg-rwg-faint border border-rwg-dim hover:border-rwg-gold transition-colors">
                    <span className="font-orbitron font-black text-rwg-gold text-lg flex-shrink-0 w-8">{s.step}</span>
                    <div>
                      <p className="font-mono text-white text-xs font-semibold tracking-widest mb-1">{s.title}</p>
                      <p className="font-inter text-rwg-muted text-xs leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PILLAR 03 — RWG STUDIO */}
      <div id="studio" className="py-24 border-b border-rwg-dim grid-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="section-animate flex items-center gap-4 mb-12">
            <div className="w-1 h-16 bg-rwg-blue" />
            <div>
              <span className="badge text-rwg-blue border-rwg-blue mb-2 inline-block">PILLAR 03</span>
              <h3 className="font-orbitron font-black text-white text-3xl sm:text-4xl">RWG STUDIO</h3>
            </div>
            <div className="ml-auto"><span className="badge text-rwg-blue border-rwg-blue">IN DEVELOPMENT</span></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="section-animate">
              <p className="font-inter text-rwg-text text-xl leading-relaxed mb-8 font-light">
                RWG Studio is the <span className="text-rwg-blue font-semibold">in-house AAA game development division</span> —
                building original titles architected from the ground up around Proof-of-Play.
                Not retrofitted onto existing games. PoP-native from the first line of code.
              </p>
              <div className="bg-rwg-panel border border-rwg-blue/20 p-6 mb-6" style={{ borderLeft: "2px solid #3B82F6" }}>
                <p className="font-mono text-rwg-blue text-xs tracking-widest mb-2">WHY STUDIO MATTERS</p>
                <p className="font-inter text-rwg-muted text-sm leading-relaxed">
                  Third-party integrations are limited by what existing games expose.
                  <span className="text-rwg-text"> RWG Studio games are designed so that every mechanic,
                  every skill expression, every competitive interaction directly feeds a
                  measurable Proof-of-Play signal. The game is the mining rig.</span>
                </p>
              </div>
              <div className="space-y-3 mb-8">
                {[
                  { icon: "🌍", title: "Open-World Multiplayer", desc: "Large-scale persistent environments with territorial competition, player economies, and skill-verified progression systems." },
                  { icon: "🤖", title: "AI-Driven NPC Systems", desc: "Generative AI NPCs creating unpredictable environments — preventing mechanical farming, rewarding genuine skill every session." },
                  { icon: "🏆", title: "Global Competitive Leagues", desc: "Protocol-funded prize structures for competitive play. Esports infrastructure without centralised intermediaries extracting value." },
                  { icon: "🛠", title: "Public PoP SDK for Any Developer", desc: "Any game studio — indie or AAA — can integrate Proof-of-Play. Their players earn RWG by playing their game." },
                  { icon: "🎨", title: "Creator Tools and Modding", desc: "Third-party developers build on RWG Studio infrastructure. On-chain content licensing means creators earn from user-generated content." },
                ].map((f) => (
                  <div key={f.title} className="flex items-start gap-4 p-4 bg-rwg-faint border border-rwg-dim hover:border-rwg-blue transition-colors group">
                    <span className="text-xl flex-shrink-0">{f.icon}</span>
                    <div>
                      <p className="font-mono text-white text-xs font-semibold tracking-widest mb-1 group-hover:text-rwg-blue transition-colors">{f.title}</p>
                      <p className="font-inter text-rwg-muted text-xs leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="section-animate">
              <div className="bg-rwg-panel border border-rwg-blue/30 p-6 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-rwg-blue flex items-center justify-center flex-shrink-0">
                    <span className="font-mono text-black font-bold text-xs">SDK</span>
                  </div>
                  <div>
                    <p className="font-mono text-rwg-blue text-xs tracking-widest font-bold">FOR GAME DEVELOPERS</p>
                    <p className="font-inter text-white text-sm font-semibold">Integrate PoP into your game</p>
                  </div>
                </div>
                <p className="font-inter text-rwg-muted text-sm leading-relaxed mb-4">
                  Any studio can integrate Proof-of-Play via the RWG Studio SDK.
                  Your players mine RWG tokens by playing your game. Powerful player
                  acquisition and retention built in from launch day.
                </p>
                <div className="space-y-2">
                  {[
                    "Integrate the RWG Studio SDK into your game",
                    "Define which gameplay actions emit telemetry signals",
                    "Players earn RWG by playing your game",
                    "Your game gets listed on RWG Store and Launcher",
                    "Revenue share on all RWG Store sales",
                  ].map((step, i) => (
                    <div key={i} className="flex items-center gap-3 font-mono text-xs text-rwg-muted">
                      <span className="text-rwg-blue font-bold">{String(i + 1).padStart(2, "0")}</span>
                      {step}
                    </div>
                  ))}
                </div>
              </div>
              <div className="border border-rwg-dim overflow-hidden mb-6">
                <div className="bg-rwg-panel px-4 py-2 font-mono text-rwg-muted text-xs tracking-widest">WHO CAN BUILD WITH RWG STUDIO</div>
                {[
                  { type: "RWG STUDIO TITLES",  desc: "Built in-house. Fully PoP-native from day one.",         color: "#FF1E1E" },
                  { type: "PARTNER STUDIOS",     desc: "Third-party developers using the public PoP SDK.",       color: "#FFC857" },
                  { type: "INDIE DEVELOPERS",    desc: "Solo devs and small teams fully welcome.",               color: "#3B82F6" },
                  { type: "COMMUNITY MODDERS",   desc: "User-generated content with on-chain ownership rights.", color: "#22C55E" },
                ].map((t) => (
                  <div key={t.type} className="flex items-center gap-4 px-4 py-3 border-t border-rwg-dim hover:bg-rwg-faint transition-colors">
                    <div className="w-2 h-2 flex-shrink-0" style={{ backgroundColor: t.color }} />
                    <div>
                      <p className="font-mono text-xs font-bold" style={{ color: t.color }}>{t.type}</p>
                      <p className="font-inter text-rwg-soft text-xs">{t.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-rwg-faint border border-rwg-dim p-6 text-center">
                <p className="font-mono text-rwg-soft text-xs tracking-widest mb-2">FIRST STUDIO TITLE</p>
                <p className="font-orbitron font-black text-white text-2xl mb-2">RWG ORIGIN</p>
                <p className="font-inter text-rwg-muted text-sm mb-4">
                  Open-world multiplayer. Built natively for Proof-of-Play. Full announcement in Phase 4.
                </p>
                <span className="badge text-rwg-blue border-rwg-blue">IN DEVELOPMENT</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* THE FLYWHEEL */}
      <div className="py-16 bg-rwg-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="section-animate text-center mb-10">
            <p className="font-orbitron font-bold text-white text-xl tracking-widest">THE RWG FLYWHEEL</p>
            <p className="font-inter text-rwg-muted text-sm mt-2">Three pillars. One self-reinforcing economy.</p>
          </div>
          <div className="section-animate flex flex-wrap items-center justify-center gap-3 font-mono text-xs text-center">
            {[
              { label: "PLAYERS EARN RWG", sub: "via Launcher",        color: "#FF1E1E" },
              { label: "→", color: "#3A3A3A" },
              { label: "BUY GAMES", sub: "on Store",                   color: "#FFC857" },
              { label: "→", color: "#3A3A3A" },
              { label: "MORE PLAYERS JOIN", sub: "see real earnings",  color: "#22C55E" },
              { label: "→", color: "#3A3A3A" },
              { label: "STUDIOS BUILD", sub: "with PoP SDK",           color: "#3B82F6" },
              { label: "→", color: "#3A3A3A" },
              { label: "RWG DEMAND GROWS", sub: "token scarcity",      color: "#FFC857" },
              { label: "→", color: "#3A3A3A" },
              { label: "PLAYERS EARN MORE", sub: "cycle repeats",      color: "#FF1E1E" },
            ].map((item, i) =>
              item.label === "→" ? (
                <span key={i} className="font-orbitron text-xl" style={{ color: item.color }}>→</span>
              ) : (
                <div key={i} className="bg-rwg-panel border border-rwg-dim p-4 min-w-32">
                  <p className="font-mono text-xs font-bold mb-1" style={{ color: item.color }}>{item.label}</p>
                  {item.sub && <p className="font-inter text-rwg-soft text-xs">{item.sub}</p>}
                </div>
              )
            )}
          </div>
        </div>
      </div>

    </section>
  );
}
