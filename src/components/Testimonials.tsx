import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Startup Founder",
    image: "/placeholder.svg",
    content: "WebCraft transformed our online presence completely. What used to take weeks now takes hours. The results speak for themselves - our conversion rate increased by 300%.",
    rating: 5
  },
  {
    name: "Marcus Rodriguez",
    role: "Creative Director",
    image: "/placeholder.svg", 
    content: "As a designer, I'm particular about aesthetics. WebCraft gives me the creative freedom I need while handling all the technical complexity. It's simply brilliant.",
    rating: 5
  },
  {
    name: "Emily Watson",
    role: "E-commerce Owner",
    image: "/placeholder.svg",
    content: "My online store has never looked better. The mobile experience is flawless and sales have doubled since switching to WebCraft. Couldn't be happier!",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">
            What Our <span className="bg-gradient-secondary bg-clip-text text-transparent">Customers Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied customers who've transformed their businesses with WebCraft.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="border-border/50 bg-card/80 backdrop-blur-sm hover:shadow-glow-accent/20 transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{animationDelay: `${index * 200}ms`}}
            >
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-accent text-lg">★</span>
                  ))}
                </div>
                
                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback className="bg-gradient-primary text-primary-foreground">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;