import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-luxury-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-luxury-black">
                <span className="font-display text-sm font-bold">EG</span>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                  Excellence
                </p>
                <p className="text-sm font-semibold tracking-tight">GROSSISTE</p>
              </div>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              Distributeur officiel de parfums de Dubaï en France. Lattafa, Swiss
              Arabian, Armaf, Maison Alhambra — prix de gros B2B.
            </p>
          </div>

          {/* Coordonnées */}
          <div>
            <h3 className="text-sm font-semibold text-gold">Contact</h3>
            <ul className="mt-5 space-y-4 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gold/70" />
                <span>
                  8 Rue des Gardinoux
                  <br />
                  93300 Aubervilliers, France
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="shrink-0 text-gold/70" />
                <a
                  href="https://wa.me/33751174535"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  +33 7 51 17 45 35
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={16} className="shrink-0 text-gold/70" />
                <span>Mardi au Vendredi : 10h – 18h</span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-sm font-semibold text-gold">Commander</h3>
            <p className="mt-5 text-sm leading-relaxed text-white/60">
              Envoyez votre commande pré-remplie directement sur notre WhatsApp
              officiel.
            </p>
            <a
              href="https://wa.me/33751174535"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-luxury-black transition hover:bg-gold-soft"
            >
              <MessageCircle size={16} />
              Contacter sur WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row">
          <p>© {new Date().getFullYear()} EXCELLENCE GROSSISTE. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/70 transition">Mentions légales</a>
            <a href="#" className="hover:text-white/70 transition">CGV</a>
            <a href="#" className="hover:text-white/70 transition">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}