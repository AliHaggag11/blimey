import { motion, useTransform, useScroll } from "framer-motion";
import { Button } from "./ui/button";
import { ChefHat, Calendar, Phone, ArrowRight, Star, Users, Instagram, Facebook, Twitter, MapPin, Mail, PhoneCall } from "lucide-react";
import { PlaceholderImage } from "./ui/placeholder-image";
import { SectionHeading } from "./ui/section-heading";
import "./gradient-pattern.css";
import { CustomCursor } from './ui/cursor';
import { SmoothScroll } from './ui/smooth-scroll';
import { CountUp } from "./ui/count-up";
import { RevealText } from "./ui/reveal-text";
import { ParallaxScroll } from "./ui/parallax-scroll";
import { ImageGallery } from "./ui/image-gallery";
import { Reveal } from "./ui/reveal";
import { ScrollText } from "./ui/scroll-text";

export default function LandingPage() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="min-h-screen bg-background selection:bg-primary selection:text-primary-foreground">
      <CustomCursor />
      <SmoothScroll />

      {/* Hero Section */}
      <motion.header 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-screen flex items-center justify-center overflow-hidden after:content-[''] after:absolute after:inset-0 after:bg-black/40 after:z-10
          [perspective:1000px]"
      >
        <motion.div 
          className="absolute inset-0 z-0"
          style={{
            translateY: useTransform(scrollYProgress, [0, 1], [0, 150]),
            scale: useTransform(scrollYProgress, [0, 1], [1, 1.2])
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent" />
          <img 
            src="/imgs/saile-ilyas-SiwrpBnxDww-unsplash.jpg"
            alt="Elegant dining setup"
            className="w-full h-full object-cover scale-105 animate-slow-zoom"
          />
        </motion.div>

        <motion.div
          className="absolute inset-0 z-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {Array.from({ length: 20 }).map(() => (
            <div
              key={Math.random()}
              className="absolute w-2 h-2 bg-white/10 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${5 + Math.random() * 5}s infinite ease-in-out ${Math.random() * 5}s`
              }}
            />
          ))}
        </motion.div>

        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <img 
              src="/imgs/logo.png" 
              alt="Blimey Logo" 
              className="h-24 md:h-32 mx-auto"
            />
          </motion.div>
          
          <RevealText
            text="Welcome to"
            delay={0.2}
            className="text-lg md:text-xl mb-4 font-medium tracking-[0.2em] uppercase text-white/90"
          />
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-7xl md:text-9xl font-serif mb-6 tracking-tight font-bold text-white [text-shadow:_0_1px_30px_rgb(0_0_0_/_40%)]"
          >
            Blimey
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl mb-12 font-medium max-w-2xl mx-auto text-white/90"
          >
            Egypt's Premier Luxury Catering Experience
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="space-x-4 relative"
          >
            <Button 
              size="lg" 
              className="bg-white text-black hover:bg-white hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Book a Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-white/5 border-white/20 text-white hover:bg-white/95 hover:text-black hover:scale-105 
                transition-all duration-300 shadow-xl backdrop-blur-sm hover:border-transparent 
                hover:shadow-white/20 hover:shadow-2xl"
            >
              View Our Menus
            </Button>
          </motion.div>
        </div>
      </motion.header>

      {/* Services Section */}
      <section className="py-24 px-4 md:px-8 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5" />
        <div className="relative">
          <Reveal duration={1}>
            <SectionHeading
              title="Our Services"
              subtitle="Experience culinary excellence with our comprehensive catering solutions"
            />
          </Reveal>
          
          <motion.div 
            className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 lg:px-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {[
              {
                icon: <ChefHat className="w-12 h-12 mb-6 text-primary" />,
                title: "Bespoke Menus",
                description: "Customized culinary experiences tailored to your preferences"
              },
              {
                icon: <Calendar className="w-12 h-12 mb-6 text-primary" />,
                title: "Event Planning",
                description: "Full-service event coordination and styling to create unforgettable moments"
              },
              {
                icon: <Phone className="w-12 h-12 mb-6 text-primary" />,
                title: "Personal Touch",
                description: "Dedicated support throughout your journey, ensuring every detail is perfect"
              }
            ].map((service, index) => (
              <Reveal
                key={service.title}
                delay={index * 0.2}
                duration={1}
                direction="up"
                distance={50}
              >
                <motion.div
                  className="group p-8 bg-background rounded-xl hover:shadow-2xl transition-all duration-700
                    hover:-translate-y-2 relative overflow-hidden cursor-pointer
                    border border-transparent hover:border-primary/10"
                >
                  {/* Background gradient effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent 
                    opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out" />
                  
                  {/* Animated border */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                    <div className="absolute inset-y-0 left-0 w-[1px] bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
                    <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                    <div className="absolute inset-y-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                  </div>

                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: 0.5 + index * 0.2,
                      duration: 0.7,
                      ease: [0.25, 1, 0.5, 1]
                    }}
                    className="relative"
                  >
                    <div className="relative group-hover:scale-110 group-hover:rotate-3 transition-transform duration-700">
                      {service.icon}
                      <div className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-700 bg-primary/20" />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 + index * 0.2 }}
                    className="relative"
                  >
                    <h3 className="text-2xl font-serif mb-4 group-hover:text-primary transition-colors duration-700">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-700">
                      {service.description}
                    </p>
                  </motion.div>
                  
                  {/* Hover indicator */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-2 group-hover:translate-y-0">
                    <ArrowRight className="w-5 h-5 text-primary" />
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 pattern-bg opacity-5" />
        <div className="relative">
          <SectionHeading
            title="Our Gallery"
            subtitle="A glimpse into our world of culinary excellence and event mastery"
          />
          <ImageGallery />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <Reveal duration={1} blur={false}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.05),transparent)]" />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Star className="w-8 h-8 mx-auto mb-4" />,
                title: "Events Catered",
                count: 500,
                duration: 6,
                suffix: "+"
              },
              {
                icon: <Users className="w-8 h-8 mx-auto mb-4" />,
                title: "Happy Guests",
                count: 50000,
                duration: 7,
                suffix: "+"
              },
              {
                icon: <ChefHat className="w-8 h-8 mx-auto mb-4" />,
                title: "Expert Chefs",
                count: 15,
                duration: 5,
                suffix: "+"
              }
            ].map((stat, index) => (
              <Reveal
                key={stat.title}
                delay={index * 0.3}
                duration={1}
                direction="up"
                blur={false}
                distance={30}
              >
                <motion.div 
                  className="text-center"
                >
                  {stat.icon}
                  <CountUp end={stat.count} duration={stat.duration} suffix={stat.suffix} />
                  <p className="text-primary-foreground/80">{stat.title}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Featured Events Section */}
      <section className="py-24 px-4 bg-background relative overflow-hidden">
        <div className="absolute inset-0 pattern-bg opacity-5" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal duration={1}>
            <SectionHeading
              title="Featured Events"
              subtitle="From intimate gatherings to grand celebrations, we bring your vision to life"
            />
          </Reveal>
          
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
              <Reveal
                key={event.title}
                delay={index * 0.3}
                duration={1}
                direction="up"
                distance={50}
              >
                <motion.div
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
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Scrolling Text Section */}
      <section className="relative overflow-hidden border-y border-primary/10">
        <div className="relative">
          <ScrollText 
            baseVelocity={-2}
          >
            Luxury Catering • Fine Dining • Bespoke Events • Egyptian Excellence
          </ScrollText>
        </div>
      </section>

      {/* Menu Preview Section */}
      <section className="py-24 px-4 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,0,0,0.02),transparent)]" />
        <Reveal duration={1}>
          <SectionHeading
            title="Our Signature Menus"
            subtitle="A fusion of Egyptian heritage and international cuisine"
          />
        </Reveal>
        
        <ParallaxScroll offset={100}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {[
              {
                title: "Traditional Egyptian Feast",
                icon: <ChefHat className="w-8 h-8 text-primary" />,
                items: [
                  "Mezze platter with homemade tahini",
                  "Grilled kofta with aromatic spices",
                  "Molokhia with tender duck",
                  "Om Ali with premium nuts"
                ]
              },
              {
                title: "Modern Fusion Selection",
                icon: <Star className="w-8 h-8 text-primary" />,
                items: [
                  "Dukkah-crusted salmon with citrus",
                  "Zaatar-spiced lamb cutlets",
                  "Truffle-infused koshari",
                  "Baklava cheesecake fusion"
                ]
              }
            ].map((menu, index) => (
              <Reveal
                key={menu.title}
                delay={index * 0.3}
                duration={1}
                direction={index % 2 === 0 ? 'left' : 'right'}
                distance={70}
              >
                <motion.div 
                  className="bg-background rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-500
                    border border-primary/5 hover:border-primary/10 relative group overflow-hidden"
                >
                  {/* Background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] via-transparent to-transparent 
                    opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  
                  {/* Content */}
                  <div className="relative">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="p-3 bg-primary/5 rounded-lg group-hover:scale-110 transition-transform duration-500">
                        {menu.icon}
                      </div>
                      <h3 className="text-2xl font-serif group-hover:text-primary transition-colors duration-500">
                        {menu.title}
                      </h3>
                    </div>
                  
                    <div className="space-y-6">
                      {menu.items.map((item, index) => (
                        <div 
                          key={index} 
                          className="flex items-center space-x-4 group/item"
                        >
                          <div className="w-2 h-2 rounded-full bg-primary/50 group-hover/item:bg-primary 
                            transition-colors duration-300" />
                          <p className="text-muted-foreground group-hover/item:text-foreground 
                            transition-colors duration-300">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Animated border */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                    <div className="absolute inset-y-0 left-0 w-[1px] bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
                    <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                    <div className="absolute inset-y-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </ParallaxScroll>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 bg-background">
        <Reveal duration={1}>
          <motion.div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif mb-6">What Our Clients Say</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Trusted by Egypt's most discerning hosts
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Nour & Ahmed",
                  event: "Wedding at Four Seasons Nile Plaza",
                  quote: "Blimey created an unforgettable fusion of traditional and modern cuisine for our special day."
                },
                {
                  name: "Cairo International Corp",
                  event: "Annual Gala",
                  quote: "The perfect blend of professionalism and local flavors. Our international guests were impressed."
                },
                {
                  name: "The Hassan Family",
                  event: "Ramadan Gathering",
                  quote: "Their attention to detail and respect for tradition made our iftar truly special."
                }
              ].map((testimonial, index) => (
                <Reveal
                  key={testimonial.name}
                  delay={index * 0.3}
                  duration={1}
                  direction={index % 2 === 0 ? 'left' : 'right'}
                  distance={70}
                >
                  <motion.div
                    className="bg-secondary p-8 rounded-xl relative"
                  >
                    <div className="absolute -top-4 left-8 text-6xl text-primary opacity-20">"</div>
                    <p className="text-lg mb-6 relative z-10">{testimonial.quote}</p>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.event}</p>
                    </div>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </motion.div>
        </Reveal>
      </section>

      {/* Contact Section (before CTA) */}
      <section className="py-24 px-4 bg-primary text-primary-foreground">
        <motion.div 
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Get in Touch</h2>
            <p className="text-primary-foreground/80 mb-8">
              Let us bring Egyptian hospitality to your next event
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Phone className="w-5 h-5" />
                <p>+20 (0) 100 123 4567</p>
              </div>
              <div className="flex items-center space-x-4">
                <Calendar className="w-5 h-5" />
                <p>Available 7 days a week</p>
              </div>
              <div className="flex items-center space-x-4">
                <ChefHat className="w-5 h-5" />
                <p>Complimentary tasting sessions</p>
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
      <footer className="bg-background border-t border-border relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,0,0,0.02),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,0,0,0.02),transparent_50%)]" />
        </div>
        <div className="relative max-w-7xl mx-auto py-16 px-6 lg:px-8">
          {/* Top Section with Logo */}
          <div className="flex flex-col items-center mb-16">
            <img 
              src="/imgs/logo.png" 
              alt="Blimey Logo" 
              className="h-16 mb-6 hover:opacity-80 transition-all duration-300 hover:scale-105"
            />
            <p className="text-lg text-muted-foreground max-w-md text-center">
              Crafting extraordinary culinary experiences for Egypt's most memorable moments
            </p>
            <div className="mt-8 relative">
              <div className="h-px w-40 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 border border-primary/30" />
            </div>
          </div>

          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 py-12 border-y border-border/50 
            [background:linear-gradient(to_right,transparent,rgba(0,0,0,0.02)_50%,transparent)]
            lg:gap-x-16">
            {/* Company Info */}
            <div className="md:col-span-5 space-y-6">
              <h4 className="font-serif text-xl">About Blimey</h4>
              <p className="text-muted-foreground leading-relaxed">
                Egypt's premier luxury catering service, bringing sophistication and culinary excellence to your special occasions.
              </p>
              <div className="flex items-center space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center 
                    hover:bg-primary/10 hover:scale-110 hover:rotate-6 transition-all duration-300 group 
                    border border-primary/10 hover:border-primary/30"
                >
                  <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center 
                    hover:bg-primary/10 hover:scale-110 hover:rotate-6 transition-all duration-300 group 
                    border border-primary/10 hover:border-primary/30"
                >
                  <Facebook className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center 
                    hover:bg-primary/10 hover:scale-110 hover:rotate-6 transition-all duration-300 group 
                    border border-primary/10 hover:border-primary/30"
                >
                  <Twitter className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              </div>
              <div className="pt-6">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="text-xs hover:bg-primary hover:text-white border-primary/20 
                    transition-all duration-300 group"
                >
                  Download Our Brochure
                  <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-3">
              <h4 className="font-serif text-xl mb-6 relative inline-block after:content-[''] 
                after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-px after:bg-primary/30">
                Services
              </h4>
              <ul className="space-y-4">
                {['Luxury Weddings', 'Corporate Events', 'Private Functions', 'Ramadan Gatherings'].map((item) => (
                  <li key={item}>
                    <a 
                      href="#" 
                      className="text-muted-foreground hover:text-primary transition-all duration-300 
                        flex items-center group relative overflow-hidden"
                    >
                      <span className="absolute -left-full group-hover:left-0 w-full h-px bg-primary/30 
                        transition-all duration-500 -bottom-px" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-4 lg:col-span-4">
              <h4 className="font-serif text-xl mb-6 relative inline-block after:content-[''] 
                after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-px after:bg-primary/30">
                Contact Us
              </h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p>New Cairo, Egypt</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <PhoneCall className="w-5 h-5 text-primary" />
                  <p>+20 (0) 100 123 4567</p>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Mail className="w-5 h-5 text-primary" />
                  <p>hello@blimey.eg</p>
                </div>
              </div>
              <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/10 
                backdrop-blur-sm hover:border-primary/30 transition-colors duration-300">
                <p className="text-sm font-medium mb-2">Business Hours</p>
                <p className="text-sm text-muted-foreground">
                  Sunday - Thursday: 9:00 AM - 8:00 PM<br />
                  Friday - Saturday: 10:00 AM - 6:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-4 
            text-sm text-muted-foreground">
            <p className="font-light">
              &copy; {new Date().getFullYear()} Blimey Catering. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {['Terms', 'Privacy', 'Cookies'].map((item) => (
                <a 
                  key={item}
                  href="#" 
                  className="hover:text-primary transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-px left-0 w-0 h-px bg-primary 
                    group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-10 h-10 rounded-full bg-primary/5 
            flex items-center justify-center transition-all duration-300 
            hover:scale-110 border border-primary/10 hover:border-primary/30 
            hover:bg-primary/10 group"
        >
          <ArrowRight className="w-5 h-5 rotate-[-90deg] text-primary 
            group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </footer>

      {/* Floating Elements */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </motion.div>

    </div>
  );
} 