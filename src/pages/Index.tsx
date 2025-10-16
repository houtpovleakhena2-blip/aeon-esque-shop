import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import SpecialOffer from "@/components/SpecialOffer";
import Categories from "@/components/Categories";
import ProductGrid from "@/components/ProductGrid";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroCarousel />
        <SpecialOffer />
        <Categories />
        <ProductGrid />
        <Partners />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
