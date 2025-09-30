import { useParams, useNavigate } from "react-router-dom";
import { gemstonesData } from "@/data/gemstones";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Plus, Minus, ShoppingCart, Sparkles } from "lucide-react";
import { useState } from "react";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  // Find the product by ID
  let foundProduct = null;
  for (const category of Object.values(gemstonesData)) {
    for (const products of Object.values(category.subcategories)) {
      const product = products.find((p) => p.id === id);
      if (product) {
        foundProduct = product;
        break;
      }
    }
    if (foundProduct) break;
  }

  if (!foundProduct) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <Button onClick={() => navigate("/gemstones")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Gemstones
          </Button>
        </div>
      </div>
    );
  }

  const discount = Math.round(
    ((foundProduct.originalPrice - foundProduct.price) / foundProduct.originalPrice) * 100
  );

  const handleQuantityChange = (delta: number) => {
    setQuantity((prev) => Math.max(1, Math.min(foundProduct.quantity, prev + delta)));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <header className="sticky top-0 z-10 backdrop-blur-xl bg-background/80 border-b border-border/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => navigate("/gemstones")}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-primary" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Product Details
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="space-y-8">
          {/* 360° Video Section */}
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="relative aspect-video bg-gradient-to-br from-muted/30 to-muted/10 flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                    <Sparkles className="h-10 w-10 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">360° Stone View</h3>
                    <p className="text-muted-foreground text-sm">
                      Video placeholder - Add your 360° rotation video here
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Product Details Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Image & Info */}
            <div className="space-y-6">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative aspect-square">
                    <img
                      src={foundProduct.images[0]}
                      alt={foundProduct.name}
                      className="w-full h-full object-cover"
                    />
                    <Badge
                      variant="secondary"
                      className="absolute top-4 right-4 shadow-lg"
                    >
                      {discount}% OFF
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h2 className="text-3xl font-bold mb-2">{foundProduct.name}</h2>
                    <p className="text-sm text-muted-foreground">Product ID: {foundProduct.id}</p>
                  </div>

                  <div className="flex gap-2 flex-wrap">
                    <Badge variant="outline">{foundProduct.category}</Badge>
                    <Badge variant="outline">{foundProduct.subcategory}</Badge>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-baseline gap-3">
                      <span className="text-4xl font-bold text-primary">
                        ₹{foundProduct.price.toLocaleString()}
                      </span>
                      <span className="text-xl text-muted-foreground line-through">
                        ₹{foundProduct.originalPrice.toLocaleString()}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {foundProduct.quantity} pieces available
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Actions & Benefits */}
            <div className="space-y-6">
              {/* Description */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Description</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {foundProduct.description}
                  </p>
                </CardContent>
              </Card>

              {/* Quantity Selector */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Select Quantity</h3>
                  <div className="flex items-center gap-4">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleQuantityChange(-1)}
                      disabled={quantity <= 1}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="text-2xl font-bold w-16 text-center">{quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleQuantityChange(1)}
                      disabled={quantity >= foundProduct.quantity}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground mt-3">
                    Total: ₹{(foundProduct.price * quantity).toLocaleString()}
                  </p>
                </CardContent>
              </Card>

              {/* Buy Button */}
              <Button variant="elegant" size="lg" className="w-full text-lg h-14">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Buy Now
              </Button>

              {/* Benefits */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                    Benefits
                  </h3>
                  <ul className="space-y-3">
                    {foundProduct.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
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

export default ProductDetail;
