import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
// import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-background"></div>
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url()`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-secondary/50 backdrop-blur-sm rounded-full px-4 py-2 mb-8 animate-fade-in">
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="text-sm text-muted-foreground">Build Amazing Websites</span>
        </div>
        
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
          Create Stunning
          <br />
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Web Experiences
          </span>
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in delay-300">
          Transform your ideas into beautiful, responsive websites with our cutting-edge platform. 
          Design, build, and deploy faster than ever before.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-500">
          <Button variant="hero" size="lg" className="text-lg px-8 py-6">
            Start Building
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6">
            View Examples
          </Button>
        </div>
        
        <div className="mt-12 animate-fade-in delay-700">
          <p className="text-sm text-muted-foreground mb-4">Trusted by 10,000+ creators worldwide</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-2xl font-bold">★★★★★</div>
            <div className="text-sm">4.9/5 Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;