import { Button } from "@/components/ui/button";
import { Tag } from "lucide-react";

const SpecialOffer = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-primary to-accent">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-white">
          <div className="flex items-center gap-4">
            <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm">
              <Tag className="h-8 w-8" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Special Offer!
              </h2>
              <p className="text-lg md:text-xl opacity-90">
                Get up to <span className="font-bold text-2xl">50% OFF</span> on selected items
              </p>
            </div>
          </div>
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 font-semibold px-8 shadow-lg"
          >
            Shop Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
