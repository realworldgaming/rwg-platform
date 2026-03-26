"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { RWG } from "@/lib/constants";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "WHITEPAPER", href: RWG.links.whitepaper, external: true },
  { label: "STORE",      href: "#ecosystem" },
  { label: "PROTOCOL",   href: "#protocol" },
  { label: "TOKENOMICS", href: "#tokenomics" },
  { label: "ROADMAP",    href: "#roadmap" },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-rwg-black/95 backdrop-blur-md border-b border-rwg-dim"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 bg-rwg-red flex items-center justify-center animate-pulse-red">
            <span className="font-orbitron font-black text-white text-xs">R</span>
          </div>
          <span className="font-orbitron font-bold text-white text-sm tracking-widest group-hover:text-rwg-red transition-colors">
            REAL WORLD GAMING
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-rwg-muted hover:text-rwg-red transition-colors tracking-widest animated-underline"
              >
                {link.label}
              </a>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="font-mono text-xs text-rwg-muted hover:text-rwg-red transition-colors tracking-widest animated-underline"
              >
                {link.label}
              </a>
            )
          )}
        </div>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={RWG.links.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs border border-rwg-dim text-rwg-muted px-4 py-2 hover:border-rwg-red hover:text-rwg-red transition-all"
          >
            DISCORD
          </a>
          <a
            href="#waitlist"
            className="font-mono text-xs bg-rwg-red text-white px-4 py-2 hover:bg-rwg-red-dark transition-colors font-semibold tracking-widest"
          >
            JOIN WAITLIST
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden text-rwg-muted hover:text-rwg-red"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-rwg-dark border-b border-rwg-dim">
          <div className="px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-rwg-muted hover:text-rwg-red transition-colors tracking-widest"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-mono text-xs text-rwg-muted hover:text-rwg-red transition-colors tracking-widest"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              )
            )}
            <a
              href="#waitlist"
              className="font-mono text-xs bg-rwg-red text-white px-4 py-2 text-center hover:bg-rwg-red-dark transition-colors font-semibold tracking-widest mt-2"
              onClick={() => setMenuOpen(false)}
            >
              JOIN WAITLIST
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
