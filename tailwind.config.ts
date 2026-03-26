import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // RWG Design System — exact values from master doc
        "rwg-black":   "#0B0B0B",
        "rwg-dark":    "#161616",
        "rwg-panel":   "#1C1C1C",
        "rwg-faint":   "#1F1F1F",
        "rwg-dim":     "#3A3A3A",
        "rwg-soft":    "#666666",
        "rwg-muted":   "#999999",
        "rwg-text":    "#E8E3DB",
        "rwg-red":     "#FF1E1E",
        "rwg-red-dark":"#CC1515",
        "rwg-gold":    "#FFC857",
        "rwg-gold-lt": "#FFD97D",
        "rwg-green":   "#22C55E",
        "rwg-blue":    "#3B82F6",
      },
      fontFamily: {
        orbitron:  ["Orbitron", "sans-serif"],
        inter:     ["Inter", "sans-serif"],
        exo:       ["Exo 2", "sans-serif"],
        mono:      ["JetBrains Mono", "monospace"],
      },
      borderRadius: {
        DEFAULT: "0px", // Sharp corners — cyberpunk aesthetic
        none: "0px",
      },
      animation: {
        "scan":        "scan 3s linear infinite",
        "pulse-red":   "pulseRed 2s ease-in-out infinite",
        "ticker":      "ticker 20s linear infinite",
        "fade-up":     "fadeUp 0.6s ease-out forwards",
        "glow":        "glow 2s ease-in-out infinite alternate",
        "counter":     "counter 2s ease-out forwards",
      },
      keyframes: {
        scan: {
          "0%":   { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        pulseRed: {
          "0%, 100%": { opacity: "0.4" },
          "50%":      { opacity: "1" },
        },
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glow: {
          "0%":   { boxShadow: "0 0 5px #FF1E1E, 0 0 10px #FF1E1E" },
          "100%": { boxShadow: "0 0 20px #FF1E1E, 0 0 40px #FF1E1E, 0 0 60px #FF1E1E33" },
        },
        ticker: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
