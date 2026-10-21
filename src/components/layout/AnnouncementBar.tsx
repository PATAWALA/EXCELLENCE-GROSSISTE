export function AnnouncementBar() {
  return (
    <div className="bg-luxury-black text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2.5 text-center text-[11px] sm:text-xs font-medium tracking-wide">
        <span className="hidden sm:inline">✨ Distributeur Officiel France</span>
        <span className="hidden sm:inline text-gold">•</span>
        <span>
          Minimum de commande : <strong className="text-gold">100€</strong>
        </span>
        <span className="text-gold">•</span>
        <span className="hidden md:inline">
          Retrait Aubervilliers ou Livraison Europe 🚀
        </span>
      </div>
    </div>
  );
}