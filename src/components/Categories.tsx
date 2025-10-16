import { Shirt, Smartphone, Sparkles, UtensilsCrossed } from "lucide-react";
import { Card } from "@/components/ui/card";

const categories = [
  {
    id: 1,
    name: "Clothes",
    icon: Shirt,
    color: "from-pink-500 to-rose-500",
    items: "5,234 items",
  },
  {
    id: 2,
    name: "Phones",
    icon: Smartphone,
    color: "from-purple-500 to-pink-500",
    items: "1,567 items",
  },
  {
    id: 3,
    name: "Cosmetics",
    icon: Sparkles,
    color: "from-rose-500 to-pink-600",
    items: "3,891 items",
  },
  {
    id: 4,
    name: "Food",
    icon: UtensilsCrossed,
    color: "from-pink-600 to-rose-600",
    items: "2,345 items",
  },
];

const Categories = () => {
  return (
    <section id="categories" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Shop by Category</h2>
          <p className="text-muted-foreground text-lg">
            Discover our wide range of products
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Card
                key={category.id}
                className="group cursor-pointer overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-lg"
              >
                <div className="p-6 text-center">
                  <div className={`mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{category.items}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
