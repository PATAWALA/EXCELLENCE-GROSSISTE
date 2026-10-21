import { MapPin, Truck, FileText, Clock } from "lucide-react";

const ITEMS = [
  {
    icon: MapPin,
    title: "Retrait en magasin",
    desc: "8 Rue des Gardinoux, 93300 Aubervilliers. Retrait gratuit sur place.",
  },
  {
    icon: Truck,
    title: "Livraison France & Europe",
    desc: "Expédition sécurisée 24/48h. Colis suivi et assuré.",
  },
  {
    icon: FileText,
    title: "Facturation Pro avec TVA",
    desc: "Factures conformes pour la revente. TVA récupérable.",
  },
  {
    icon: Clock,
    title: "Support réactif",
    desc: "Mardi au Vendredi : 10h–18h. Réponse WhatsApp rapide.",
  },
];

export function AdvantagesSection() {
  return (
    <section id="avantages" className="bg-off-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">
            Conditions Grossiste
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Pensé pour les professionnels
          </h2>
          <p className="mt-4 text-gray-muted">
            Une logistique fiable, des prix compétitifs, un accompagnement
            dédié — pour faire grandir votre boutique.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-luxury-black/5 bg-white p-6 shadow-card"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-luxury-black text-gold">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 font-semibold text-luxury-black">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-gray-muted">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}