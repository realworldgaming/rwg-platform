import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Real World Gaming — Proof-of-Play Protocol",
  description:
    "RWG introduces Proof-of-Play — the third blockchain consensus mechanism. Skill replaces hardware. Gameplay generates value. 786M tokens earned through play alone.",
  keywords: [
    "RWG", "Real World Gaming", "Proof of Play", "blockchain gaming",
    "play to earn", "crypto gaming", "RWG token", "PoP mining",
  ],
  openGraph: {
    title: "Real World Gaming — Proof-of-Play Protocol",
    description: "Skill replaces hardware. 786M tokens. 0% premine. 100% player-mined.",
    url: "https://playrwg.com",
    siteName: "Real World Gaming",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Real World Gaming — Proof-of-Play Protocol",
    description: "Skill replaces hardware. 786M tokens. 0% premine. 100% player-mined.",
    creator: "@RWG__official",
  },
  themeColor: "#0B0B0B",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700;800;900&family=Inter:wght@300;400;500;600;700&family=Exo+2:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-rwg-black text-rwg-text antialiased">
        {children}
      </body>
    </html>
  );
}
