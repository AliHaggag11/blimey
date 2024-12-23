import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ChefHat, Calendar, Phone, ArrowRight, Star, Users } from "lucide-react";
import { PlaceholderImage } from "./ui/placeholder-image";
import { SectionHeading } from "./ui/section-heading";
import "./gradient-pattern.css";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary selection:text-primary-foreground">
      {/* Hero Section */}
      <motion.header 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
          <PlaceholderImage 
            category="Elegant Dining"
            width={1920}
            height={1080}
            className="scale-105 animate-slow-zoom"
          />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl mb-4 font-light tracking-[0.2em] uppercase text-white/90"
          >
            Welcome to
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-7xl md:text-9xl font-serif mb-6 tracking-tight"
          >
            Blimey
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl mb-12 font-light max-w-2xl mx-auto"
          >
            Extraordinary Catering for Extraordinary Moments
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="space-x-4"
          >
            <Button 
              size="lg" 
              className="bg-white text-black hover:bg-white/90 transition-colors"
            >
              Book a Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black transition-colors"
            >
              View Menu
            </Button>
          </motion.div>
        </div>
      </motion.header>

      {/* Services Section */}
      <section className="py-24 px-4 md:px-8 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5" />
        <div className="relative">
          <SectionHeading
            title="Our Services"
            subtitle="Experience culinary excellence with our comprehensive catering solutions"
          />
          
          <motion.div 
            className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="group p-8 bg-background rounded-xl shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-1">
              <ChefHat className="w-12 h-12 mb-6 text-primary group-hover:scale-110 group-hover:rotate-3 transition-all duration-500" />
              <h3 className="text-2xl font-serif mb-4">Bespoke Menus</h3>
              <p className="text-muted-foreground leading-relaxed">
                Customized culinary experiences tailored to your preferences and dietary requirements
              </p>
            </div>
            <div className="group p-8 bg-background rounded-xl shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-1">
              <Calendar className="w-12 h-12 mb-6 text-primary group-hover:scale-110 group-hover:rotate-3 transition-all duration-500" />
              <h3 className="text-2xl font-serif mb-4">Event Planning</h3>
              <p className="text-muted-foreground leading-relaxed">
                Full-service event coordination and styling to create unforgettable moments
              </p>
            </div>
            <div className="group p-8 bg-background rounded-xl shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-1">
              <Phone className="w-12 h-12 mb-6 text-primary group-hover:scale-110 group-hover:rotate-3 transition-all duration-500" />
              <h3 className="text-2xl font-serif mb-4">Personal Touch</h3>
              <p className="text-muted-foreground leading-relaxed">
                Dedicated support throughout your journey, ensuring every detail is perfect
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.05),transparent)]" />
        <div className="relative max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Star className="w-8 h-8 mx-auto mb-4" />
            <div className="text-4xl font-serif mb-2">500+</div>
            <p className="text-primary-foreground/80">Events Catered</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <Users className="w-8 h-8 mx-auto mb-4" />
            <div className="text-4xl font-serif mb-2">50,000+</div>
            <p className="text-primary-foreground/80">Happy Guests</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center"
          >
            <ChefHat className="w-8 h-8 mx-auto mb-4" />
            <div className="text-4xl font-serif mb-2">15+</div>
            <p className="text-primary-foreground/80">Expert Chefs</p>
          </motion.div>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="py-24 px-4 bg-background relative overflow-hidden">
        <div className="absolute inset-0 pattern-bg opacity-5" />
        <div className="relative max-w-6xl mx-auto">
          <SectionHeading
            title="Featured Events"
            subtitle="From intimate gatherings to grand celebrations, we bring your vision to life"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Luxury Weddings",
                category: "Wedding Catering",
                description: "Elegant celebrations crafted with love and attention to detail"
              },
              {
                title: "Corporate Events",
                category: "Corporate Catering",
                description: "Professional catering solutions for business gatherings"
              },
              {
                title: "Private Parties",
                category: "Private Party",
                description: "Intimate celebrations with personalized service"
              }
            ].map((event, index) => (
              <motion.div
                key={event.title}
                className="group relative overflow-hidden rounded-xl cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <PlaceholderImage 
                    category={event.category}
                    width={800}
                    height={600}
                    className="group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 flex flex-col justify-end transform transition-transform group-hover:translate-y-0">
                  <h3 className="text-2xl font-serif text-white mb-2">{event.title}</h3>
                  <p className="text-white/80">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Preview Section */}
      <section className="py-24 px-4 bg-secondary">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Sample Menus</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore our curated selection of culinary delights
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-background rounded-xl p-8 shadow-sm"
            >
              <h3 className="text-2xl font-serif mb-6">Seasonal Tasting Menu</h3>
              <div className="space-y-4">
                {[
                  "Herb-crusted lamb with mint jus",
                  "Pan-seared scallops with citrus butter",
                  "Wild mushroom risotto with truffle oil",
                  "Chocolate fondant with vanilla ice cream"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <p className="text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-background rounded-xl p-8 shadow-sm"
            >
              <h3 className="text-2xl font-serif mb-6">Canapé Selection</h3>
              <div className="space-y-4">
                {[
                  "Smoked salmon blini with dill cream",
                  "Mini beef wellington bites",
                  "Goat cheese and caramelized onion tartlets",
                  "Chocolate-dipped strawberries"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <p className="text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 bg-background">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">What Our Clients Say</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Hear from those who have experienced our service
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah & James",
                event: "Wedding Reception",
                quote: "Blimey transformed our wedding into a culinary masterpiece. Every detail was perfect."
              },
              {
                name: "Corporate Events Ltd",
                event: "Annual Gala",
                quote: "Professional, innovative, and reliable. Our go-to catering partner for all major events."
              },
              {
                name: "The Thompson Family",
                event: "Private Celebration",
                quote: "The personal touch and attention to detail made our celebration truly special."
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-secondary p-8 rounded-xl relative"
              >
                <div className="absolute -top-4 left-8 text-6xl text-primary opacity-20">"</div>
                <p className="text-lg mb-6 relative z-10">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section (before CTA) */}
      <section className="py-24 px-4 bg-primary text-primary-foreground">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Get in Touch</h2>
            <p className="text-primary-foreground/80 mb-8">
              We'd love to hear about your event and how we can make it extraordinary
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Phone className="w-5 h-5" />
                <p>+44 (0) 123 456 7890</p>
              </div>
              <div className="flex items-center space-x-4">
                <Calendar className="w-5 h-5" />
                <p>Available 7 days a week</p>
              </div>
              <div className="flex items-center space-x-4">
                <ChefHat className="w-5 h-5" />
                <p>Free menu consultation</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm">
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/60"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/60"
              />
              <textarea
                placeholder="Tell us about your event"
                rows={4}
                className="w-full p-3 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/60"
              />
              <Button
                size="lg"
                className="w-full bg-white text-primary hover:bg-white/90"
              >
                Send Message
              </Button>
            </form>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Ready to Create Something Special?
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Let us help you plan your next extraordinary event. Our team is ready to create a unique experience tailored just for you.
          </p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Start Planning Your Event
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border">
        <div className="max-w-6xl mx-auto py-12 px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-serif text-2xl mb-4">Blimey</h3>
              <p className="text-muted-foreground">
                Extraordinary catering for extraordinary moments
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Weddings</li>
                <li>Corporate Events</li>
                <li>Private Parties</li>
                <li>Menu Planning</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>London, UK</li>
                <li>+44 (0) 123 456 7890</li>
                <li>hello@blimey.com</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Instagram</li>
                <li>Facebook</li>
                <li>Twitter</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Blimey Catering. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  );
} 