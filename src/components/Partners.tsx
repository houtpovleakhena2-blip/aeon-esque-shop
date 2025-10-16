const partners = [
  { id: 1, name: "Brand 1", logo: "https://via.placeholder.com/150x60/E2007A/FFFFFF?text=Brand+1" },
  { id: 2, name: "Brand 2", logo: "https://via.placeholder.com/150x60/E2007A/FFFFFF?text=Brand+2" },
  { id: 3, name: "Brand 3", logo: "https://via.placeholder.com/150x60/E2007A/FFFFFF?text=Brand+3" },
  { id: 4, name: "Brand 4", logo: "https://via.placeholder.com/150x60/E2007A/FFFFFF?text=Brand+4" },
  { id: 5, name: "Brand 5", logo: "https://via.placeholder.com/150x60/E2007A/FFFFFF?text=Brand+5" },
  { id: 6, name: "Brand 6", logo: "https://via.placeholder.com/150x60/E2007A/FFFFFF?text=Brand+6" },
];

const Partners = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Partners</h2>
          <p className="text-muted-foreground text-lg">
            Trusted brands we work with
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-12 w-auto opacity-60 hover:opacity-100 transition-opacity"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
