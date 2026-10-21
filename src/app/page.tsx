import { CartProvider } from "@/context/CartContext";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProductCatalog } from "@/components/sections/ProductCatalog";
import { B2BCartWidget } from "@/components/sections/B2BCartWidget";
import { AdvantagesSection } from "@/components/sections/AdvantagesSection";

export default function Home() {
  return (
    <CartProvider>
      <AnnouncementBar />
      <Navbar />
      <main>
        <HeroSection />
        <ProductCatalog />
        <AdvantagesSection />
      </main>
      <Footer />
      <B2BCartWidget />
    </CartProvider>
  );
}

