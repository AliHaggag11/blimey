import { motion, useTransform, useScroll } from "framer-motion";
import { Button } from "./ui/button";
import { ChefHat, Calendar, Phone, ArrowRight, Star, Users, Instagram, Facebook, Twitter, MapPin, Mail, PhoneCall, Clock } from "lucide-react";
import { PlaceholderImage } from "./ui/placeholder-image";
import { SectionHeading } from "./ui/section-heading";
import "./gradient-pattern.css";
import { CustomCursor } from './ui/cursor';
import { SmoothScroll } from './ui/smooth-scroll';
import { CountUp } from "./ui/count-up";
import { RevealText } from "./ui/reveal-text";
import { ImageGallery } from "./ui/image-gallery";
import { Reveal } from "./ui/reveal";
import { MenuModal } from "./ui/menu-modal";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blog-posts';

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
          <RevealText
            text="Welcome to"
            delay={0.2}
            className="text-lg md:text-xl mb-4 font-medium tracking-[0.2em] uppercase text-white/90"
          />
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-7xl md:text-9xl font-serif mb-6 tracking-tight font-semibold text-white [text-shadow:_0_1px_30px_rgb(0_0_0_/_40%)]"
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
            className="flex flex-col sm:flex-row gap-4 justify-center items-center relative px-4 sm:px-0"
          >
            <Button 
              size="lg" 
              className="bg-white text-black hover:bg-white hover:scale-105 transition-all duration-300 
                shadow-xl w-full sm:w-fit min-w-[200px]"
              onClick={() => {
                const contactForm = document.getElementById('contact-form');
                if (contactForm) {
                  contactForm.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Book a Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-white/5 border-white/20 text-white hover:bg-white/95 hover:text-black 
                hover:scale-105 transition-all duration-300 shadow-xl backdrop-blur-sm 
                hover:border-transparent hover:shadow-white/20 hover:shadow-2xl
                w-full sm:w-fit min-w-[200px]"
              onClick={() => setIsMenuOpen(true)}
            >
              View Our Menus
            </Button>
          </motion.div>
        </div>
      </motion.header>

      {/* About Us Section */}
      <section className="py-24 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal duration={1}>
            <SectionHeading
              title="Our Story"
              subtitle="A legacy of culinary excellence in Egypt"
            />
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal delay={0.2} duration={1}>
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Founded in 2015, Blimey has redefined luxury catering in Egypt by blending traditional flavors with contemporary techniques. Our journey began with a simple vision: to create extraordinary culinary experiences that celebrate Egypt's rich gastronomic heritage.
                </p>
                <div className="grid grid-cols-2 gap-8 py-8">
                  {[
                    { label: "Events Catered", value: "500+" },
                    { label: "Years Experience", value: "8+" },
                    { label: "Expert Chefs", value: "15+" },
                    { label: "Client Satisfaction", value: "100%" }
                  ].map((stat) => (
                    <div key={stat.label} className="text-center p-4 bg-secondary/50 rounded-lg">
                      <p className="text-2xl font-serif mb-2">{stat.value}</p>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            
            <Reveal delay={0.4} duration={1}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent z-10" />
                <PlaceholderImage 
                  category="Chef"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 md:px-8 bg-background relative overflow-hidden">
        <div className="absolute inset-0 pattern-bg opacity-5" />
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
        {/* Enhanced background effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.08),transparent)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_100%]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100%_80px]" />
        </div>

        <Reveal duration={1} blur={false}>
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Star className="w-8 h-8" />,
                title: "Events Catered",
                count: 500,
                duration: 6,
                suffix: "+"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Happy Guests",
                count: 50000,
                duration: 7,
                suffix: "+"
              },
              {
                icon: <ChefHat className="w-8 h-8" />,
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
                <motion.div className="text-center relative group">
                  {/* Decorative circle */}
                  <div className="absolute -inset-4 bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 
                    transition-all duration-700 -z-10" />
                  
                  {/* Icon with enhanced styling */}
                  <div className="relative">
                    <div className="absolute -inset-2 bg-white/10 rounded-full blur-xl opacity-0 
                      group-hover:opacity-100 transition-all duration-700" />
                    <div className="relative">
                      <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-white/10 flex items-center 
                        justify-center transform group-hover:scale-110 group-hover:bg-white/20
                        text-white/90 group-hover:text-white
                        transition-all duration-700">
                        {stat.icon}
                      </div>
                    </div>
                  </div>

                  {/* Count with enhanced styling */}
                  <div className="mb-2 relative">
                    <CountUp end={stat.count} duration={stat.duration} suffix={stat.suffix} />
                    <div className="h-px w-12 bg-gradient-to-r from-transparent via-white/30 to-transparent 
                      mx-auto mt-4 opacity-0 group-hover:opacity-100 transition-all duration-700" />
                  </div>

                  <p className="text-primary-foreground/70 font-light tracking-wide uppercase text-sm">
                    {stat.title}
                  </p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 bg-background relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,0,0,0.02),transparent)]" />
          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <Reveal duration={1}>
          <motion.div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif mb-6 relative inline-block font-medium">
                What Our Clients Say
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Trusted by Egypt's most discerning hosts
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Decorative elements */}
              <div className="absolute -top-12 -left-12 w-24 h-24 bg-primary/5 rounded-full blur-3xl" />
              <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />

              {[
                {
                  name: "Rana & Ahmed",
                  event: "Wedding at Four Seasons Nile Plaza",
                  quote: "Blimey created an unforgettable fusion of traditional and modern cuisine for our special day.",
                  rating: 5
                },
                {
                  name: "Cairo International Corp",
                  event: "Annual Gala",
                  quote: "The perfect blend of professionalism and local flavors. Our international guests were impressed.",
                  rating: 5
                },
                {
                  name: "The Hassan Family",
                  event: "Ramadan Gathering",
                  quote: "Their attention to detail and respect for tradition made our iftar truly special.",
                  rating: 5
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
                    className="bg-secondary/50 backdrop-blur-sm p-8 rounded-xl relative group
                      border border-primary/5 hover:border-primary/10 transition-all duration-500
                      hover:shadow-xl hover:-translate-y-1"
                  >
                    {/* Quote mark */}
                    <div className="absolute -top-4 left-8 text-6xl text-primary opacity-20 
                      group-hover:scale-110 group-hover:opacity-30 transition-all duration-500">"</div>
                    
                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-primary/70 fill-primary/70" />
                      ))}
                    </div>

                    <p className="text-lg mb-6 relative z-10">{testimonial.quote}</p>
                    
                    {/* Divider */}
                    <div className="h-px w-12 bg-gradient-to-r from-primary/10 via-primary/20 to-primary/10 mb-4" />
                    
                    <div className="group-hover:translate-x-1 transition-transform duration-500">
                      <p className="font-serif text-lg">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground/80">{testimonial.event}</p>
                    </div>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </motion.div>
        </Reveal>
      </section>

      {/* Blog Section */}
      <section className="py-24 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal duration={1}>
            <SectionHeading
              title="Culinary Insights"
              subtitle="Expert tips and trends from our kitchen to yours"
            />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Reveal key={post.id} delay={index * 0.2} duration={1}>
                <Link to={`/blog/${post.id}`} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <img 
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full
                      text-sm backdrop-blur-sm">{post.category}</div>
                  </div>
                  <h3 className="text-xl font-serif mb-2 group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-primary/80">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{post.readTime}</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        
        <Reveal duration={1}>
          <motion.div 
            className="relative max-w-4xl mx-auto text-center px-4"
          >
            <h2 className="text-4xl md:text-6xl font-serif mb-8 relative inline-block font-medium">
              Ready to Create Something Special?
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-px 
                bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Let us help you plan your next extraordinary event. Our team is ready to create a unique experience tailored just for you.
            </p>
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 
                shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-500
                group relative overflow-hidden"
              onClick={() => {
                const contactForm = document.getElementById('contact-form');
                if (contactForm) {
                  contactForm.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <span className="relative z-10 flex items-center">
                Start Planning Your Event
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 
                  transition-transform duration-300" />
              </span>
              {/* Button hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 
                via-white/20 to-primary/0 opacity-0 group-hover:opacity-100 
                blur-lg transition-opacity duration-500" />
            </Button>
          </motion.div>
        </Reveal>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_-20%,rgba(255,255,255,0.1),transparent)]" />
          <div className="absolute inset-0 bg-[linear-gradient(60deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_120%,rgba(255,255,255,0.08),transparent)]" />
        </div>

        {/* Main footer content */}
        <div className="relative max-w-7xl mx-auto py-16 px-6 lg:px-8">
          {/* Top Section with Logo */}
          <Reveal duration={1}>
            <div className="flex flex-col items-center mb-16">
              <img 
                src="/imgs/logo.png" 
                alt="Blimey Logo" 
                className="h-16 mb-6 hover:opacity-90 transition-all duration-300 hover:scale-105 
                  filter brightness-0 invert"
              />
              <p className="text-lg text-white/80 max-w-md text-center">
                Crafting extraordinary culinary experiences for Egypt's most memorable moments
              </p>
              <div className="mt-8 relative">
                <div className="h-px w-40 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 border border-white/30" />
              </div>
            </div>
          </Reveal>

          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 py-12 border-y border-white/10 
            [background:linear-gradient(to_right,transparent,rgba(255,255,255,0.05)_50%,transparent)]
            lg:gap-x-16">
            {/* Company Info */}
            <div className="md:col-span-5 space-y-6">
              <Reveal duration={1} delay={0.2}>
                <h4 className="font-serif text-2xl font-medium">About Blimey</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Egypt's premier luxury catering service, bringing sophistication and culinary excellence to your special occasions.
                </p>
                <div className="flex items-center space-x-4 mt-12 mb-12">
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center 
                      hover:bg-white/10 hover:scale-110 hover:rotate-6 transition-all duration-300 group 
                      border border-white/10 hover:border-white/30"
                  >
                    <Instagram className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center 
                      hover:bg-white/10 hover:scale-110 hover:rotate-6 transition-all duration-300 group 
                      border border-white/10 hover:border-white/30"
                  >
                    <Facebook className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center 
                      hover:bg-white/10 hover:scale-110 hover:rotate-6 transition-all duration-300 group 
                      border border-white/10 hover:border-white/30"
                  >
                    <Twitter className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                  </a>
                </div>
                 
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full bg-white/5 border-white/20 text-white hover:bg-white/95 
                    hover:text-primary hover:scale-105 transition-all duration-300 shadow-xl 
                    backdrop-blur-sm hover:border-transparent hover:shadow-white/20 
                    hover:shadow-2xl group mt-8"
                >
                  <span className="flex items-center justify-center">
                    Download Menu
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 
                      transition-transform duration-300" />
                  </span>
                </Button>
              </Reveal>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-3">
              <Reveal duration={1} delay={0.4}>
                <h4 className="font-serif text-xl mb-6 relative inline-block after:content-[''] 
                  after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-px after:bg-primary/30">
                  Quick Links
                </h4>
                <div className="grid grid-cols-1 gap-6">
                  {[
                    {
                      title: 'Services',
                      links: ['Luxury Weddings', 'Corporate Events', 'Private Parties', 'Ramadan Gatherings']
                    },
                    {
                      title: 'Menus',
                      links: ['Traditional Egyptian', 'International Cuisine', 'Fusion Selection', 'Desserts']
                    }
                  ].map((category) => (
                    <div key={category.title} className="space-y-3">
                      <h5 className="text-white/90 font-medium">{category.title}</h5>
                      <ul className="space-y-2">
                        {category.links.map((link) => (
                          <li key={link}>
                            <a 
                              href="#" 
                              className="text-white/70 hover:text-white transition-all duration-300 
                                flex items-center group relative"
                            >
                              <span className="absolute -left-4 opacity-0 group-hover:opacity-100 
                                group-hover:left-0 transition-all duration-300">
                                <ArrowRight className="w-3 h-3" />
                              </span>
                              <span className="group-hover:translate-x-2 transition-transform duration-300">
                                {link}
                              </span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-4 lg:col-span-4">
              <Reveal duration={1} delay={0.6}>
                {/* Contact Details */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-white">Location</p>
                      <p className="text-white/70">New Cairo, Egypt</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <PhoneCall className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-white/70">+20 (0) 100 123 4567</p>
                  </div>
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-white/70">hello@blimey.eg</p>
                  </div>
                </div>
                
                {/* Business Hours Card */}
                <div className="mt-8 p-4 bg-white/5 rounded-lg border border-white/10 
                  backdrop-blur-sm hover:border-white/30 transition-all duration-500
                  hover:bg-white/10 group relative">
                  {/* Background glow effect */}
                  <div className="absolute inset-0 bg-white/5 rounded-lg blur-xl opacity-0 
                    group-hover:opacity-100 transition-all duration-700" />
                  
                  {/* Icon and content */}
                  <div className="relative flex items-start space-x-4">
                    <div className="p-3 bg-white/10 rounded-lg group-hover:scale-110 
                      group-hover:bg-white/20 transition-all duration-500 relative">
                      <div className="absolute inset-0 blur-xl bg-white/20 opacity-0 
                        group-hover:opacity-100 transition-all duration-500" />
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium mb-3 text-white">Business Hours</p>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center group/item">
                          <span className="text-sm text-white/70 group-hover/item:text-white/90 
                            transition-colors duration-300">Sunday - Thursday</span>
                          <span className="text-sm text-white/90 font-medium">9:00 AM - 8:00 PM</span>
                        </div>
                        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                        <div className="flex justify-between items-center group/item">
                          <span className="text-sm text-white/70 group-hover/item:text-white/90 
                            transition-colors duration-300">Friday - Saturday</span>
                          <span className="text-sm text-white/90 font-medium">10:00 AM - 6:00 PM</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Bottom Section with Copyright */}
        <div className="relative border-t border-white/10 will-change-transform">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70 
              transform translate3d(0,0,0)">
              <p className="font-light select-none">
                &copy; {new Date().getFullYear()} Blimey Catering. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                {['Terms', 'Privacy', 'Cookies'].map((item) => (
                  <a 
                    key={item}
                    href="#" 
                    className="hover:text-white transition-colors duration-200 relative group select-none"
                  >
                    {item}
                    <span className="absolute -bottom-px left-0 w-0 h-px bg-white 
                      group-hover:w-full transition-all duration-200 will-change-[width]" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to top button */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-10 h-10 rounded-full bg-white/10 
            flex items-center justify-center transition-all duration-300 
            hover:scale-110 border border-white/20 hover:border-white/40 
            hover:bg-white/20 group backdrop-blur-sm"
        >
          <ArrowRight className="w-5 h-5 rotate-[-90deg] text-white 
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

      <MenuModal isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
        <div className="p-4 sm:p-6 md:p-8">
          <h2 className="text-3xl md:text-4xl font-serif mb-6 md:mb-8">Our Menus</h2>
          <div className="aspect-[1/1.4] bg-muted rounded-lg flex items-center justify-center
            border border-border/50">
            <p className="text-muted-foreground text-center px-4">
              <span className="block text-lg mb-2">Menu PDF Coming Soon</span>
              <span className="text-sm">We're preparing something special for you</span>
            </p>
          </div>
        </div>
      </MenuModal>

    </div>
  );
} 