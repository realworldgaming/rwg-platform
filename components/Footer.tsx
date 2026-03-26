import { RWG } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-rwg-black border-t border-rwg-dim">
      {/* Top bar */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-rwg-red flex items-center justify-center">
                <span className="font-orbitron font-black text-white text-xs">R</span>
              </div>
              <span className="font-orbitron font-bold text-white text-sm tracking-widest">
                REAL WORLD GAMING
              </span>
            </div>
            <p className="font-inter text-rwg-muted text-sm leading-relaxed mb-4 max-w-sm">
              The third blockchain consensus mechanism. Skill replaces hardware.
              786,000,000 RWG tokens — 100% earned through Proof-of-Play.
            </p>
            <div className="flex items-center gap-3">
              {[
                { label: "X", href: RWG.links.twitter },
                { label: "DC", href: RWG.links.discord },
                { label: "LI", href: RWG.links.linkedin },
                { label: "GH", href: RWG.links.github },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 border border-rwg-dim flex items-center justify-center font-mono text-xs text-rwg-muted hover:border-rwg-red hover:text-rwg-red transition-all"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Platform */}
          <div>
            <p className="font-mono text-rwg-muted text-xs tracking-widest mb-4">PLATFORM</p>
            <ul className="space-y-2">
              {["RWG Store", "RWG Launcher", "RWG Studio", "PoP Mining"].map((item) => (
                <li key={item}>
                  <span className="font-inter text-rwg-soft text-sm hover:text-rwg-red transition-colors cursor-default">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Protocol */}
          <div>
            <p className="font-mono text-rwg-muted text-xs tracking-widest mb-4">PROTOCOL</p>
            <ul className="space-y-2">
              {[
                { label: "Whitepaper", href: RWG.links.whitepaper },
                { label: "PoP Score Model", href: `${RWG.links.whitepaper}#pop-score` },
                { label: "Tokenomics", href: `${RWG.links.whitepaper}#tokenomics` },
                { label: "Oracle Network", href: `${RWG.links.whitepaper}#oracle` },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-inter text-rwg-soft text-sm hover:text-rwg-red transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-rwg-dim">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono text-rwg-soft text-xs">
            © 2026 Real World Gaming. Founder: Shaik Jainuddin · {RWG.founder.email}
          </p>
          <div className="flex items-center gap-4 font-mono text-xs">
            <span className="text-rwg-soft">786,000,000 RWG</span>
            <span className="text-rwg-dim">·</span>
            <span className="text-rwg-soft">PROOF-OF-PLAY</span>
            <span className="text-rwg-dim">·</span>
            <span className="text-rwg-red">PLAY.OWN.EARN.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
