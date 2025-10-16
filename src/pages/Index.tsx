import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import SpecialOffer from "@/components/SpecialOffer";
import Categories from "@/components/Categories";
import DealsTimer from "@/components/DealsTimer";
import ProductGrid from "@/components/ProductGrid";
import Testimonials from "@/components/Testimonials";
import Partners from "@/components/Partners";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroCarousel />
        <SpecialOffer />
        <Categories />
        <DealsTimer />
        <ProductGrid />
        <Testimonials />
        <Partners />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
