import { ShoppingCart, Star, Heart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Cotton T-Shirt",
    category: "Clothes",
    price: 29.99,
    originalPrice: 49.99,
    discount: 40,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
  },
  {
    id: 2,
    name: "Smartphone X Pro",
    category: "Phones",
    price: 799.99,
    originalPrice: 999.99,
    discount: 20,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
  },
  {
    id: 3,
    name: "Luxury Face Cream",
    category: "Cosmetics",
    price: 45.99,
    originalPrice: 69.99,
    discount: 35,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400",
  },
  {
    id: 4,
    name: "Organic Snack Box",
    category: "Food",
    price: 24.99,
    originalPrice: 34.99,
    discount: 28,
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=400",
  },
  {
    id: 5,
    name: "Designer Jeans",
    category: "Clothes",
    price: 89.99,
    originalPrice: 149.99,
    discount: 40,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400",
  },
  {
    id: 6,
    name: "Wireless Earbuds",
    category: "Phones",
    price: 129.99,
    originalPrice: 179.99,
    discount: 28,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400",
  },
  {
    id: 7,
    name: "Lipstick Set",
    category: "Cosmetics",
    price: 34.99,
    originalPrice: 59.99,
    discount: 42,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400",
  },
  {
    id: 8,
    name: "Premium Coffee",
    category: "Food",
    price: 19.99,
    originalPrice: 29.99,
    discount: 33,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400",
  },
];


const ProductGrid = () => {
  const [wishlist, setWishlist] = useState<number[]>([]);

  const handleAddToCart = (productName: string) => {
    toast.success(`${productName} added to cart!`, {
      description: "Check your cart to complete the purchase",
    });
  };

  const toggleWishlist = (productId: number, productName: string) => {
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter(id => id !== productId));
      toast.info(`${productName} removed from wishlist`);
    } else {
      setWishlist([...wishlist, productId]);
      toast.success(`${productName} added to wishlist!`);
    }
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
          <p className="text-muted-foreground text-lg">
            Discover our handpicked collection of trending items
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                {product.discount > 0 && (
                  <Badge className="absolute top-3 left-3 bg-destructive text-destructive-foreground font-semibold">
                    -{product.discount}%
                  </Badge>
                )}
                
                {/* Quick Action Buttons */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => toggleWishlist(product.id, product.name)}
                    className={`p-2 rounded-full backdrop-blur-sm transition-colors ${
                      wishlist.includes(product.id) 
                        ? 'bg-primary text-white' 
                        : 'bg-white/90 text-primary hover:bg-primary hover:text-white'
                    }`}
                    aria-label="Add to wishlist"
                  >
                    <Heart className={`h-5 w-5 ${wishlist.includes(product.id) ? 'fill-current' : ''}`} />
                  </button>
                  <button
                    className="p-2 bg-white/90 text-primary rounded-full hover:bg-primary hover:text-white backdrop-blur-sm transition-colors"
                    aria-label="Quick view"
                    onClick={() => toast.info("Quick view coming soon!")}
                  >
                    <Eye className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <p className="text-xs text-muted-foreground mb-1">{product.category}</p>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{product.rating}</span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl font-bold text-primary">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>

                {/* Add to Cart Button */}
                <Button
                  onClick={() => handleAddToCart(product.name)}
                  className="w-full group-hover:bg-accent transition-colors"
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="font-semibold">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
