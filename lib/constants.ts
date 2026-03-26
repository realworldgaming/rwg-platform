export const RWG = {
  token: {
    supply:       "786,000,000",
    supplyNum:    786000000,
    premine:      "0%",
    vcAlloc:      "0%",
    teamReserve:  "0%",
    blockTime:    "10 MIN",
    halving:      "5 YEARS",
    emission:     "100 YEARS",
    initialReward: "1,486.12",
    symbol:       "RWG",
    standard:     "ERC-20",
    priceUSD:     0.12,
  },
  links: {
    twitter:    "https://x.com/RWG__official",
    discord:    "https://discord.gg/ay9b9vU5b",
    linkedin:   "https://www.linkedin.com/company/real-world-gaming/",
    founder:    "https://www.linkedin.com/in/shaikjainiddin",
    whitepaper: "https://realworldgaming.github.io/Whitepaper/",
    github:     "https://github.com/realworldgaming",
  },
  founder: {
    name:   "Shaik Jainuddin",
    handle: "Oye",
    email:  "oyejainu@gmail.com",
  },
};

export const ECOSYSTEM_CARDS = [
  {
    id:       "store",
    label:    "RWG STORE",
    title:    "Own Your Games. Forever.",
    desc:     "Blockchain-native game marketplace. Buy with fiat or RWG tokens. Every purchase recorded on-chain — true permanent digital ownership no platform can ever revoke.",
    status:   "BUILDING",
    color:    "#FF1E1E",
    icon:     "🛒",
    features: ["500,000+ Games via RAWG API", "Fiat + RWG token payments", "On-chain ownership proof", "Permanent. Irrevocable."],
  },
  {
    id:       "launcher",
    label:    "RWG LAUNCHER",
    title:    "Play. Score. Earn.",
    desc:     "The mining client. Installs on your desktop, detects supported games, tracks your gameplay telemetry, computes your Proof-of-Play score, and delivers RWG tokens to your wallet every 10 minutes.",
    status:   "COMING SOON",
    color:    "#FFC857",
    icon:     "🚀",
    features: ["Windows · macOS · Linux", "Real-time PoP scoring", "Integrated RWG wallet", "10-min block rewards"],
  },
  {
    id:       "studio",
    label:    "RWG STUDIO",
    title:    "AAA. Built for PoP.",
    desc:     "In-house game development studio building original AAA titles architected from the ground up around Proof-of-Play economics. No retrofitting. PoP-native from day one.",
    status:   "IN DEVELOPMENT",
    color:    "#FFC857",
    icon:     "🎮",
    features: ["Open-world multiplayer", "AI-driven NPC systems", "Public PoP SDK", "Global competitive leagues"],
  },
];

export const POP_COMPONENTS = [
  { weight: "35%", label: "SKILL",       desc: "Performance percentile within your game context, normalised via ECDF against active population.",         icon: "⚡", color: "#FF1E1E" },
  { weight: "25%", label: "ACTIVITY",    desc: "Density and sustained nature of gameplay. Idle and AFK periods are penalised — you must actually play.",   icon: "🎯", color: "#FF1E1E" },
  { weight: "15%", label: "CONSISTENCY", desc: "EMA of historical PoP scores. Rewards sustained performers over episodic spikes and binge sessions.",      icon: "📈", color: "#FFC857" },
  { weight: "15%", label: "DIFFICULTY",  desc: "Competitive environment multiplier. Tougher opponents, harder modes — higher difficulty score.",           icon: "⚔",  color: "#FFC857" },
  { weight: "10%", label: "HUMANITY",    desc: "Shannon entropy analysis of input patterns. Bots produce low-entropy patterns. Humans don't. You're safe.", icon: "👤", color: "#22C55E" },
];

export const ROADMAP_PHASES = [
  {
    phase:    "01",
    label:    "FOUNDATION",
    period:   "NOW — Q3 2026",
    status:   "active",
    items: [
      "Deploy main website — playrwg.com",
      "RWG Store with Supabase auth",
      "Publish whitepaper on Mirror.xyz",
      "Discord community launch",
      "Deploy ERC-20 testnet contract",
      "Consistent X / social presence",
    ],
  },
  {
    phase:    "02",
    label:    "TOKEN & TESTNET",
    period:   "Q3 — Q4 2026",
    status:   "planned",
    items: [
      "RWG token live on testnet (Base Sepolia)",
      "Testnet faucet for early community",
      "JAW.id wallet integration",
      "username.rwg.eth ENS identity",
      "Launcher development begins",
      "First public token announcement",
    ],
  },
  {
    phase:    "03",
    label:    "LAUNCHER MVP",
    period:   "Q4 2026 — Q2 2027",
    status:   "planned",
    items: [
      "Launcher v1 — one game, one PoP loop",
      "First real player earns testnet RWG",
      "Oracle network — 6 regional nodes",
      "Anti-cheat v1 deployed",
      "10 verified real users earning RWG",
      "Public transaction hash proof",
    ],
  },
  {
    phase:    "04",
    label:    "MAINNET LAUNCH",
    period:   "2027+",
    status:   "future",
    items: [
      "RWG token deployed to mainnet",
      "Launcher supports 5-10 games",
      "Store accepts real fiat + crypto payments",
      "CEX listing applications",
      "Open PoP SDK to third-party devs",
      "RWG Studio first title announcement",
    ],
  },
];

export const TICKER_ITEMS = [
  "786,000,000 RWG FIXED SUPPLY",
  "0% PREMINE",
  "0% VC ALLOCATION",
  "0% TEAM RESERVE",
  "100% PLAYER MINED",
  "10 MINUTE BLOCK TIME",
  "5 YEAR HALVING CYCLE",
  "100 YEAR EMISSION",
  "PROOF-OF-PLAY",
  "SKILL REPLACES HARDWARE",
];
