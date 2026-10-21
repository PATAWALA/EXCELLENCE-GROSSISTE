"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingBag,
  X,
  Trash2,
  MessageCircle,
  ChevronUp,
  Lock,
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/Button";
import { QuantityStepper } from "@/components/ui/QuantityStepper";
import { formatPrice, buildWhatsAppMessage, cn } from "@/lib/utils";

const MIN_ORDER = 100;

export function B2BCartWidget() {
  const { items, total, count, updateQty, removeItem, clear } = useCart();
  const [open, setOpen] = useState(false);

  const remaining = Math.max(0, MIN_ORDER - total);
  const progress = Math.min(100, (total / MIN_ORDER) * 100);
  const canOrder = total >= MIN_ORDER && items.length > 0;

  const handleWhatsApp = () => {
    if (!canOrder) return;
    const url = buildWhatsAppMessage(items, total);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      {/* Bouton flottant */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8, type: "spring" }}
        onClick={() => setOpen(true)}
        className={cn(
          "fixed bottom-6 right-6 z-50 flex h-15 items-center gap-3 rounded-full bg-luxury-black px-5 text-white shadow-float transition hover:bg-luxury-soft",
          open && "pointer-events-none opacity-0"
        )}
        style={{ height: 60 }}
      >
        <div className="relative">
          <ShoppingBag size={20} />
          {count > 0 && (
            <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-gold px-1 text-[10px] font-bold text-luxury-black">
              {count}
            </span>
          )}
        </div>
        <div className="hidden text-left sm:block">
          <p className="text-[10px] uppercase tracking-wider text-white/60">
            Panier B2B
          </p>
          <p className="text-sm font-semibold tabular-nums">
            {formatPrice(total)}
          </p>
        </div>
        <ChevronUp size={16} className="opacity-60" />
      </motion.button>

      {/* Overlay + Drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-50 bg-luxury-black/40 backdrop-blur-sm"
            />

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-white shadow-2xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-luxury-black/5 px-6 py-5">
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-gold-soft">
                    Bordereau B2B
                  </p>
                  <h2 className="font-display text-xl font-bold">
                    Mon Panier
                  </h2>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-luxury-black/5"
                  aria-label="Fermer"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Barre de progression minimum */}
              <div className="border-b border-luxury-black/5 px-6 py-4">
                <div className="flex items-center justify-between text-xs">
                  {canOrder ? (
                    <span className="font-medium text-emerald-600">
                      ✓ Minimum atteint — vous pouvez commander
                    </span>
                  ) : (
                    <span className="text-gray-muted">
                      Ajoutez encore{" "}
                      <strong className="text-luxury-black">
                        {formatPrice(remaining)}
                      </strong>{" "}
                      pour atteindre 100 €
                    </span>
                  )}
                  <span className="font-semibold tabular-nums text-luxury-black">
                    {formatPrice(total)}
                  </span>
                </div>
                <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-gray-soft">
                  <motion.div
                    className={cn(
                      "h-full rounded-full transition-colors",
                      canOrder ? "bg-emerald-500" : "bg-gold"
                    )}
                    animate={{ width: `${progress}%` }}
                    transition={{ type: "spring", damping: 20 }}
                  />
                </div>
              </div>

              {/* Liste produits */}
              <div className="flex-1 overflow-y-auto px-6 py-4">
                {items.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-20 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-off-white">
                      <ShoppingBag size={24} className="text-gray-muted" />
                    </div>
                    <p className="mt-4 font-medium">Votre panier est vide</p>
                    <p className="mt-1 text-sm text-gray-muted">
                      Ajoutez des parfums pour passer commande.
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-5"
                      onClick={() => {
                        setOpen(false);
                        document
                          .getElementById("catalogue")
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      Voir le catalogue
                    </Button>
                  </div>
                ) : (
                  <ul className="space-y-4">
                    {items.map((item) => (
                      <li
                        key={item.id}
                        className="flex gap-3 rounded-xl border border-luxury-black/5 p-3"
                      >
                        <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-gray-soft/30">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="flex flex-1 flex-col">
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <p className="text-[10px] uppercase tracking-wider text-gold-soft">
                                {item.brand}
                              </p>
                              <p className="text-sm font-semibold leading-tight">
                                {item.name}
                              </p>
                              <p className="text-[11px] text-gray-muted">
                                {item.volume}
                              </p>
                            </div>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="flex h-7 w-7 items-center justify-center rounded-full text-gray-muted hover:bg-red-50 hover:text-red-500"
                              aria-label="Retirer"
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                          <div className="mt-2 flex items-center justify-between">
                            <QuantityStepper
                              value={item.qty}
                              onChange={(v) => updateQty(item.id, v)}
                            />
                            <p className="text-sm font-semibold tabular-nums">
                              {formatPrice(item.price * item.qty)}
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Footer */}
              <div className="border-t border-luxury-black/5 bg-off-white px-6 py-5">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-gray-muted">
                      Total HT
                    </p>
                    <p className="font-display text-2xl font-bold tabular-nums">
                      {formatPrice(total)}
                    </p>
                  </div>
                  {items.length > 0 && (
                    <button
                      onClick={clear}
                      className="text-xs text-gray-muted underline-offset-2 hover:text-red-500 hover:underline"
                    >
                      Vider
                    </button>
                  )}
                </div>

                <Button
                  onClick={handleWhatsApp}
                  disabled={!canOrder}
                  variant="primary"
                  size="lg"
                  className="w-full gap-2"
                >
                  {canOrder ? (
                    <>
                      <MessageCircle size={18} />
                      Valider sur WhatsApp
                    </>
                  ) : (
                    <>
                      <Lock size={16} />
                      Minimum 100€ requis
                    </>
                  )}
                </Button>
                <p className="mt-3 text-center text-[11px] text-gray-muted">
                  Commande envoyée pré-remplie sur WhatsApp • Confirmation
                  manuelle par notre équipe
                </p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}