import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Palette, Smartphone, Globe, Code, Shield } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Build and deploy websites in minutes, not hours. Our optimized platform ensures maximum performance."
  },
  {
    icon: Palette,
    title: "Beautiful Designs",
    description: "Choose from hundreds of professionally designed templates or create your own unique style."
  },
  {
    icon: Smartphone,
    title: "Mobile Responsive",
    description: "Every website automatically adapts to any device size for a perfect user experience."
  },
  {
    icon: Globe,
    title: "Global CDN",
    description: "Your websites load fast worldwide with our distributed content delivery network."
  },
  {
    icon: Code,
    title: "No Code Required",
    description: "Visual drag-and-drop builder with advanced customization options for developers."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with SSL certificates, backups, and monitoring included."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">
            Everything You Need to
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Succeed</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to help you create, customize, and scale your web presence effortlessly.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="group border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-glow-primary/20 transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{animationDelay: `${index * 100}ms`}}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:animate-glow">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;