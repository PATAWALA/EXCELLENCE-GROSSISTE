"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShoppingBag, Check } from "lucide-react";
import Image from "next/image";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { QuantityStepper } from "@/components/ui/QuantityStepper";
import { formatPrice, cn } from "@/lib/utils";
import type { Brand } from "@/types";

const BRANDS: ("Tous" | Brand)[] = [
  "Tous",
  "Lattafa",
  "Swiss Arabian",
  "Armaf",
  "Maison Alhambra",
];

function ProductCard({ product }: { product: (typeof products)[number] }) {
  const { addItem, items } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const inCart = items.find((i) => i.id === product.id);

  const handleAdd = () => {
    addItem(product, qty);
    setAdded(true);
    setQty(1);
    setTimeout(() => setAdded(false), 1400);
  };

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-card hover:shadow-float transition-shadow duration-300"
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-gray-soft/30">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3">
          {product.inStock && (
            <Badge variant="success" className="bg-white/95 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Stock disponible
            </Badge>
          )}
        </div>
      </div>

      {/* Contenu */}
      <div className="flex flex-1 flex-col p-5">
        <p className="text-[11px] font-medium uppercase tracking-wider text-gold-soft">
          {product.brand}
        </p>
        <h3 className="mt-1 font-display text-lg font-semibold leading-snug text-luxury-black">
          {product.name}
        </h3>
        <p className="mt-0.5 text-sm text-gray-muted">{product.volume}</p>

        <div className="mt-4 flex items-end justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-wider text-gray-muted">
              Prix de gros HT
            </p>
            <p className="font-display text-xl font-bold text-luxury-black">
              {formatPrice(product.price)}
            </p>
          </div>
          {inCart && (
            <Badge variant="gold">×{inCart.qty} au panier</Badge>
          )}
        </div>

        <div className="mt-5 flex items-center gap-2">
          <QuantityStepper value={qty} onChange={setQty} />
          <Button
            onClick={handleAdd}
            variant={added ? "gold" : "primary"}
            className="flex-1 gap-2"
          >
            {added ? (
              <>
                <Check size={16} /> Ajouté
              </>
            ) : (
              <>
                <ShoppingBag size={16} /> Ajouter
              </>
            )}
          </Button>
        </div>
      </div>
    </motion.article>
  );
}

export function ProductCatalog() {
  const [brand, setBrand] = useState<(typeof BRANDS)[number]>("Tous");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchBrand = brand === "Tous" || p.brand === brand;
      const matchQuery =
        query.trim() === "" ||
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.brand.toLowerCase().includes(query.toLowerCase());
      return matchBrand && matchQuery;
    });
  }, [brand, query]);

  return (
    <section id="catalogue" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">
            Catalogue B2B
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Nos best-sellers parfums
          </h2>
          <p className="mt-4 text-gray-muted">
            Prix de gros dégressifs à partir de 100€ de commande. Tous nos
            flacons sont 100% authentiques et scellés.
          </p>
        </div>

        {/* Barre de recherche & filtres */}
        <div className="mt-12 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full max-w-md">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-muted"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Rechercher un parfum, une marque…"
              className="h-11 w-full rounded-full border border-luxury-black/10 bg-off-white pl-11 pr-4 text-sm outline-none transition focus:border-luxury-black/30 focus:bg-white"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {BRANDS.map((b) => (
              <button
                key={b}
                onClick={() => setBrand(b)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition",
                  brand === b
                    ? "border-luxury-black bg-luxury-black text-white"
                    : "border-luxury-black/10 bg-white text-luxury-black/70 hover:border-luxury-black/30 hover:text-luxury-black"
                )}
              >
                {b}
              </button>
            ))}
          </div>
        </div>

        {/* Grille */}
        <motion.div
          layout
          className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="mt-16 text-center text-gray-muted">
            Aucun parfum ne correspond à votre recherche.
          </p>
        )}
      </div>
    </section>
  );
}