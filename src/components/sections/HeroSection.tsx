"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, ShieldCheck, Truck, BadgeEuro } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

const REASSURANCE = [
  { icon: ShieldCheck, label: "100% Authentique" },
  { icon: BadgeEuro, label: "Minimum 100€" },
  { icon: Truck, label: "Expédition 24/48h" },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-off-white">
      {/* Halos dorés décoratifs */}
      <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-luxury-black/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <Badge variant="gold" className="mb-6">
            ✨ Distributeur Officiel — Dubaï en France
          </Badge>

          <h1 className="font-display text-4xl leading-tight tracking-tight text-luxury-black sm:text-5xl lg:text-6xl">
            Le Grossiste N°1 de{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Parfums de Dubaï</span>
              <span className="absolute inset-x-0 bottom-1 h-3 bg-gold/30 -z-0" />
            </span>{" "}
            Authentiques en France.
          </h1>

          <p className="mt-6 text-base leading-relaxed text-gray-muted sm:text-lg max-w-2xl mx-auto">
            Lattafa, Swiss Arabian & grandes marques. Approvisionnez votre boutique
            aux meilleurs prix de gros, avec facturation pro et livraison rapide.
          </p>

          {/* Badges de réassurance */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {REASSURANCE.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-luxury-black/10 bg-white px-4 py-2 text-sm font-medium shadow-sm"
              >
                <Icon size={16} className="text-gold-soft" />
                {label}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#catalogue" className="w-full sm:w-auto">
              <Button size="lg" variant="primary" className="w-full sm:w-auto gap-2 group">
                🛍️ Explorer le Catalogue B2B
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-0.5"
                />
              </Button>
            </a>
            <a
              href="https://wa.me/33751174535"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2">
                <MessageCircle size={18} />
                📲 Contact Direct WhatsApp
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}