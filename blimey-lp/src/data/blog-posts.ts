export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  content: string;
  author: {
    name: string;
    role: string;
    image?: string;
  };
  date: string;
  coverImage: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "menu-planning",
    title: "The Art of Menu Planning",
    excerpt: "How to create a balanced menu that delights all your guests",
    category: "Planning Tips",
    readTime: "5 min read",
    author: {
      name: "Chef Ahmed Hassan",
      role: "Executive Chef",
    },
    date: "March 15, 2024",
    content: `Creating the perfect menu is a delicate balance of flavors, textures, and dietary considerations. Here's our comprehensive guide to menu planning for your next event.

## Understanding Your Guests

The first step in menu planning is understanding your audience. Consider:
- Dietary restrictions and preferences
- Cultural considerations
- Age groups
- Time of day

## Balancing Flavors

A well-planned menu should include:
- A variety of tastes (sweet, salty, sour, umami)
- Different textures (crispy, smooth, crunchy)
- Complementary colors
- Seasonal ingredients

## Tips for Success

1. Start with a strong appetizer
2. Include vegetarian options
3. Consider portion sizes
4. Plan for dietary restrictions
5. Include local specialties

Remember, the key to successful menu planning is variety while maintaining cohesion throughout the meal.`,
    coverImage: "https://placehold.co/1920x1080/1a1a1a/666666?text=Menu+Planning"
  },
  {
    id: "egyptian-flavors",
    title: "Egyptian Flavors Reimagined",
    excerpt: "Modern interpretations of classic Egyptian dishes",
    category: "Culinary Trends",
    readTime: "4 min read",
    author: {
      name: "Sarah El-Sayed",
      role: "Pastry Chef",
    },
    date: "March 10, 2024",
    content: `Egyptian cuisine is rich with history and tradition, but that doesn't mean it can't be reimagined for modern palates. Let's explore how traditional dishes can be elevated while respecting their heritage.

## Classic Dishes, Modern Twists

### Koshari Revolution
Our signature deconstructed koshari features:
- Crispy rice noodles
- Slow-roasted tomato sauce
- Caramelized onions
- Lentil foam

### Molokhia Nouveau
A fresh take on this beloved dish:
- Molokhia gel
- Duck confit
- Coriander oil
- Garlic chips

## Fusion Techniques

We combine traditional Egyptian flavors with:
- French cooking techniques
- Modern plating styles
- Molecular gastronomy
- Contemporary ingredients

The goal is to honor tradition while creating something new and exciting.`,
    coverImage: "https://placehold.co/1920x1080/1a1a1a/666666?text=Egyptian+Flavors"
  },
  {
    id: "sustainable-catering",
    title: "Sustainable Catering",
    excerpt: "Our commitment to eco-friendly practices",
    category: "Sustainability",
    readTime: "3 min read",
    author: {
      name: "Omar Farid",
      role: "Events Director",
    },
    date: "March 5, 2024",
    content: `Sustainability isn't just a buzzword—it's a commitment to our future. Learn about our eco-friendly catering practices and how we're making a difference.

## Our Green Initiatives

### Local Sourcing
- Partnership with local farmers
- Seasonal menu planning
- Reduced transportation emissions

### Waste Reduction
- Composting program
- Recyclable packaging
- Portion control
- Food donation programs

### Energy Efficiency
- Energy-efficient equipment
- LED lighting
- Water conservation

## Making a Difference

Every small step counts. Our sustainable practices have resulted in:
- 40% reduction in food waste
- 30% lower carbon footprint
- Support for local communities

Join us in making events more sustainable!`,
    coverImage: "https://placehold.co/1920x1080/1a1a1a/666666?text=Sustainable+Catering"
  }
]; 