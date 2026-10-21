"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  MessageCircle,
  ShieldCheck,
  Truck,
  BadgeEuro,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

const REASSURANCE = [
  { icon: ShieldCheck, label: "100% Authentique" },
  { icon: BadgeEuro, label: "Minimum 100€" },
  { icon: Truck, label: "Expédition 24/48h" },
];

// Variantes d'animation réutilisables
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.12,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-luxury-black">
      {/* --- IMAGE DE FOND IMMERSIVE --- */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&w=2000&q=80"
          alt="Flacons de parfums orientaux de luxe"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 animate-[slowZoom_20s_ease-in-out_infinite_alternate]"
        />
        {/* Overlay dégradé noir → transparent pour lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-black via-luxury-black/85 to-luxury-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-luxury-black/60" />
      </div>

      {/* --- HALOS DORÉS ANIMÉS --- */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-gold/20 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-gold-soft/10 blur-3xl"
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* --- CONTENU --- */}
      <div className="relative mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-28">
        {/* Badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          <Badge
            variant="gold"
            className="border-gold/40 bg-gold/10 text-gold backdrop-blur-sm"
          >
            ✨ Distributeur Officiel — Dubaï en France
          </Badge>
        </motion.div>

        {/* Titre */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="mt-6 max-w-4xl font-display text-4xl leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
        >
          Le Grossiste N°1 de{" "}
          <span className="relative inline-block">
            <span className="relative z-10 bg-gradient-to-r from-gold via-gold-soft to-gold bg-clip-text text-transparent">
              Parfums de Dubaï
            </span>
            <motion.span
              className="absolute inset-x-0 bottom-2 h-1 bg-gradient-to-r from-transparent via-gold to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
            />
          </span>{" "}
          Authentiques en France.
        </motion.h1>

        {/* Sous-titre */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg"
        >
          Lattafa, Swiss Arabian & grandes marques. Approvisionnez votre boutique
          aux meilleurs prix de gros, avec facturation pro et livraison rapide.
        </motion.p>

        {/* Badges de réassurance */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          {REASSURANCE.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-md"
            >
              <Icon size={16} className="text-gold" />
              {label}
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4}
          className="mt-10 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row"
        >
          <a href="#catalogue" className="w-full sm:w-auto">
            <Button
              size="lg"
              variant="gold"
              className="group w-full gap-2 shadow-[0_0_40px_-8px_rgba(212,175,55,0.5)] sm:w-auto"
            >
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
            <Button
              size="lg"
              variant="outline"
              className="w-full gap-2 border-white/20 bg-white/5 text-white backdrop-blur-md hover:border-white/40 hover:bg-white/10 sm:w-auto"
            >
              <MessageCircle size={18} />
              📲 Contact Direct WhatsApp
            </Button>
          </a>
        </motion.div>

        {/* Petit indicateur de scroll animé */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex h-10 w-6 items-start justify-center rounded-full border border-white/30 p-1.5"
          >
            <span className="h-2 w-1 rounded-full bg-gold" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}