import { ProductCard } from "@/components/ProductCard";
import { gemstonesData } from "@/data/gemstones";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Gemstones = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <header className="sticky top-0 z-10 backdrop-blur-xl bg-background/80 border-b border-border/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => navigate("/")}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-primary" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Gemstones Collection
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 space-y-16">
        {Object.entries(gemstonesData).map(([category, { subcategories }]) => (
          <section key={category} className="space-y-8">
            {/* Category Header */}
            <div className="text-center space-y-2">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {category} Gemstones
              </h2>
              <div className="h-1 w-24 mx-auto bg-gradient-to-r from-primary to-accent rounded-full" />
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {category === "Precious"
                  ? "Discover our exquisite collection of precious gemstones, carefully curated for their exceptional quality and astrological significance."
                  : "Explore our beautiful semiprecious stones, each with unique properties and healing energies for your spiritual journey."}
              </p>
            </div>

            {/* Subcategories */}
            {Object.entries(subcategories).map(([subcategory, products]) => (
              <div key={subcategory} className="space-y-6">
                {/* Subcategory Header */}
                <div className="flex items-center gap-3">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-border" />
                  <h3 className="text-2xl font-semibold text-foreground px-4">{subcategory}</h3>
                  <div className="h-px flex-1 bg-gradient-to-l from-transparent via-border to-border" />
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            ))}
          </section>
        ))}
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 mt-16 py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>All gemstones are certified and come with authenticity guarantee</p>
        </div>
      </footer>
    </div>
  );
};

export default Gemstones;
