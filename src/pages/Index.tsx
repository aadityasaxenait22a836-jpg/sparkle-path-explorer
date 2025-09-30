import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Sparkles } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Sparkles className="h-8 w-8 text-secondary animate-pulse" />
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Triyakshi Gems
          </h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Discover the mystical power of authentic gemstones and crystals for spiritual growth, healing, and prosperity
        </p>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {/* Gemstones Card */}
          <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
            <div className="aspect-square relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-pink-500/20 group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Sparkles className="h-24 w-24 text-primary/40" />
              </div>
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-bold text-primary">Gemstones</h3>
              <p className="text-sm text-muted-foreground">
                Healing crystals and precious stones for spiritual growth
              </p>
              <Button
                variant="elegant"
                className="w-full"
                onClick={() => navigate("/gemstones")}
              >
                Explore
              </Button>
            </div>
          </Card>

          {/* Other Categories - Placeholders */}
          <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 opacity-60">
            <div className="aspect-square relative overflow-hidden bg-gradient-to-br from-amber-500/20 to-orange-500/20" />
            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-bold">Rudraksh</h3>
              <p className="text-sm text-muted-foreground">
                Sacred beads for meditation and spiritual protection
              </p>
              <Button variant="outline" className="w-full" disabled>
                Coming Soon
              </Button>
            </div>
          </Card>

          <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 opacity-60">
            <div className="aspect-square relative overflow-hidden bg-gradient-to-br from-red-500/20 to-yellow-500/20" />
            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-bold">Lucky Store</h3>
              <p className="text-sm text-muted-foreground">
                Feng shui items and lucky charms for prosperity
              </p>
              <Button variant="outline" className="w-full" disabled>
                Coming Soon
              </Button>
            </div>
          </Card>

          <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 opacity-60">
            <div className="aspect-square relative overflow-hidden bg-gradient-to-br from-blue-500/20 to-cyan-500/20" />
            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-bold">Health Calculator</h3>
              <p className="text-sm text-muted-foreground">
                Personalized recommendations based on your birth chart
              </p>
              <Button variant="outline" className="w-full" disabled>
                Coming Soon
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
