"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, MessageCircle, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Catalogue Lattafa", href: "#catalogue" },
  { label: "Swiss Arabian", href: "#catalogue" },
  { label: "Nouveautés", href: "#catalogue" },
  { label: "Conditions B2B", href: "#avantages" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { count } = useCart();

  return (
    <header className="sticky top-0 z-40 border-b border-luxury-black/5 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-luxury-black text-white transition group-hover:bg-gold group-hover:text-luxury-black">
            <span className="font-display text-sm font-bold tracking-tight">
              EG
            </span>
          </div>
          <div className="hidden sm:block leading-tight">
            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-muted">
              Excellence
            </p>
            <p className="text-sm font-semibold tracking-tight">
              GROSSISTE
            </p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-luxury-black/70 hover:text-luxury-black transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="https://wa.me/33751174535"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex"
          >
            <Button variant="ghost" size="sm" className="gap-2">
              <MessageCircle size={16} />
              <span className="hidden md:inline">WhatsApp</span>
            </Button>
          </a>
          <a href="#catalogue" className="relative">
            <Button variant="primary" size="sm" className="gap-2">
              <ShoppingBag size={16} />
              <span className="hidden sm:inline">Commander</span>
              {count > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-gold px-1 text-[10px] font-bold text-luxury-black">
                  {count}
                </span>
              )}
            </Button>
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden flex h-9 w-9 items-center justify-center rounded-full hover:bg-luxury-black/5"
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300",
          open ? "max-h-96 border-t border-luxury-black/5" : "max-h-0"
        )}
      >
        <nav className="flex flex-col gap-1 p-4">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-medium hover:bg-luxury-black/5 transition"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/33751174535"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2"
          >
            <Button variant="gold" className="w-full gap-2">
              <MessageCircle size={16} />
              Contacter sur WhatsApp
            </Button>
          </a>
        </nav>
      </div>
    </header>
  );
}