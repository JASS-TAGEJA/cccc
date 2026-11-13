export interface CarouselItem {
  tag?: string;
  titleLine1: string;
  titleLine2?: string;
  desc?: string;
  img: string;
  ctaText?: string;
  ctaUrl?: string;
}

export interface MenuItem {
  name: string;
  description?: string;
  price: number | string;
  tag?: string;
  isSignature?: boolean;
  dietary?: string;
}

export interface MenuCategory {
  categoryName: string;
  subtitle?: string;
  items: MenuItem[];
}

export const cafeInfo = {
  name: "Chandni Chowk Cheese Café",
  hindiName: "चाँदनी चौक चीज़ कैफ़े",
  slogan: "Company believes edibles are for Health & Taste. Don't Compromise.",
  vibes: "Good Vibes, Great Food, Great Times",
  location: "Chandni Chowk, Bhatia Building, Near ICICI Bank, Yamunanagar",
  instagram: "@chandni.chowk.cheese.cafe",
  contacts: ["9350-990071", "8901-484042"],
};

// Curated signature dishes specifically formatted for the 3D Coverflow Carousel
export const chandniChowkCarouselDishes: CarouselItem[] = [
  {
    tag: "#ChefSpecial",
    titleLine1: "TIKKA PANEER",
    titleLine2: "– CLAY GRILLED",
    desc: "Marinated in besan & curd with freshly ground spices, grilled with onion, capsicum & tomato (No Mayo)",
    img: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80",
    ctaText: "Full ₹230 / Half ₹130",
    ctaUrl: "#",
  },
  {
    tag: "#SignaturePizza",
    titleLine1: "THE CAFE CLASSIC",
    titleLine2: "– SIGNATURE PIZZA",
    desc: "Crispy crust piled high with fresh garden veggies, sweet golden corn & soft marinated paneer cubes",
    img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    ctaText: "Order ₹180",
    ctaUrl: "#",
  },
  {
    tag: "#TheBurningDrinks",
    titleLine1: "BLUE IGNITE",
    titleLine2: "– SMOKY MOCKTAIL",
    desc: "Citrusy blue curaçao fizz served with handcrafted aromatic wood smoke (Cherry, Oak, Apple or Peach)",
    img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
    ctaText: "Order ₹149",
    ctaUrl: "#",
  },
  {
    tag: "#CheesyBites",
    titleLine1: "CHEESE BURGER",
    titleLine2: "– EXTRA SOFT BUNS",
    desc: "Crispy spiced aloo tikki, crunchy onions, ripe tomatoes, fresh paneer & melted cheese with secret sauces",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    ctaText: "Order ₹79",
    ctaUrl: "#",
  },
  {
    tag: "#HealthyRolls",
    titleLine1: "TIKKA PANEER ROLL",
    titleLine2: "– NO MAYO SPECIAL",
    desc: "Roasted paneer tikka & marinated veggies wrapped in soft chapati with special dip & grated paneer",
    img: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
    ctaText: "Order ₹120",
    ctaUrl: "#",
  },
  {
    tag: "#StreetSpecial",
    titleLine1: "TANDOORI MOMOS",
    titleLine2: "– CHARRED & SPICED",
    desc: "Steamed dumplings charred to perfection in tandoori spices, served with tangy spicy house chutneys",
    img: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?auto=format&fit=crop&w=800&q=80",
    ctaText: "Order ₹99",
    ctaUrl: "#",
  },
  {
    tag: "#TownFavorite",
    titleLine1: "FRUIT BEER",
    titleLine2: "– FROTHY & CHILLED",
    desc: "The most tempting drink of the town! A fresh, chilled, non-alcoholic glass of class with thick rich froth",
    img: "https://images.unsplash.com/photo-1538488881523-29471131c9ec?auto=format&fit=crop&w=800&q=80",
    ctaText: "Only ₹60",
    ctaUrl: "#",
  },
];

// Complete structured menu imported from Chandni Chowk Cheese Café menu PDF
export const chandniChowkFullMenu: MenuCategory[] = [
  {
    categoryName: "Tikka Paneer Specials",
    subtitle: "Healthy & Cheesy even if you bite me! (No Mayo)",
    items: [
      {
        name: "Tikka Paneer (Full)",
        description: "Paneer marinated in besan & curd with freshly ground spices & grilled with onion, capsicum & tomato",
        price: 230,
        tag: "Bestseller",
        isSignature: true,
        dietary: "Vegetarian",
      },
      {
        name: "Tikka Paneer (Half)",
        description: "Paneer marinated in besan & curd with freshly ground spices & grilled with onion, capsicum & tomato",
        price: 130,
        tag: "Bestseller",
        dietary: "Vegetarian",
      },
    ],
  },
  {
    categoryName: "Kathi Rolls",
    subtitle: "Wrapped in fresh Chapati with special dip & masala onion (No Mayo)",
    items: [
      {
        name: "Veg Roll",
        description: "Vegetables like Onion, Capsicum, Tomato, Cabbage sauté & wrapped with special sauce & dip",
        price: 60,
        dietary: "Vegetarian",
      },
      {
        name: "Paneer Roll",
        description: "Sauté vegetables and paneer pieces wrapped with special delicious dip & grated paneer",
        price: 80,
        dietary: "Vegetarian",
      },
      {
        name: "Tikka Paneer Roll",
        description: "Roasted Paneer Tikka & marinated veg wrapped with special dip, masala onion & grated paneer",
        price: 120,
        tag: "Chef Special",
        dietary: "Vegetarian",
      },
    ],
  },
  {
    categoryName: "Burgers",
    subtitle: "Extra soft buns with spiced aloo tikki & in-house sauces",
    items: [
      {
        name: "Veg. Burger",
        description: "Aloo tikki, onion, tomato, vegetables & signature sauces",
        price: 50,
      },
      {
        name: "Paneer Burger",
        description: "Aloo tikki, onion, tomato, paneer & signature sauces",
        price: 60,
      },
      {
        name: "Cheese Burger",
        description: "Aloo tikki, onion, tomato, fresh paneer, melted cheese slice & sauces",
        price: 79,
        tag: "Favorite",
      },
    ],
  },
  {
    categoryName: "Pizzas",
    subtitle: "Stone-baked crispy crust with rich toppings",
    items: [
      {
        name: "Pyaz Capci Crunch",
        description: "Crispy onion and fresh green capsicum",
        price: 120,
      },
      {
        name: "Desi Veggie Twist",
        description: "Crunchy onion, diced capsicum & juicy tomatoes",
        price: 130,
      },
      {
        name: "Garden Harvest",
        description: "Onion, capsicum, tomato & golden sweet corn",
        price: 140,
      },
      {
        name: "The Cafe Classic",
        description: "Signature pizza piled high with fresh garden veg, golden corn & soft marinated paneer",
        price: 180,
        isSignature: true,
        tag: "Signature",
      },
    ],
  },
  {
    categoryName: "The Burning Drinks",
    subtitle: "Handcrafted Smoky Mocktails with customizable wood smoke profile (Cherry, Oak, Apple, Peach)",
    items: [
      {
        name: "Blue Ignite",
        description: "Non-Alcoholic | Blue Curaçao flavor, citrusy sparkling soda with a crisp blue twist",
        price: 149,
        isSignature: true,
        tag: "Smoky Showstopper",
      },
      {
        name: "Red Flame",
        description: "Non-Alcoholic | Fiery crimson grenadine sparkling soda, bold and fruity blend",
        price: 149,
        tag: "Smoky Showstopper",
      },
      {
        name: "Golden Ashes",
        description: "Non-Alcoholic | Smooth golden glow peach mocktail, delicately sweet & refreshing",
        price: 149,
        tag: "Smoky Showstopper",
      },
    ],
  },
  {
    categoryName: "Momos",
    subtitle: "All served with spicy chutney & dip",
    items: [
      {
        name: "Steamed Momos",
        description: "Classic tender steamed vegetable momos",
        price: 60,
      },
      {
        name: "Kurkure Momos",
        description: "Ultra-crispy fried crunchy momos with house spices",
        price: 80,
      },
      {
        name: "Tandoori Momos",
        description: "Char-grilled smoky momos tossed in tandoori masala",
        price: 99,
        tag: "Popular",
      },
    ],
  },
  {
    categoryName: "Fries & Sides",
    subtitle: "Crispy fried golden delights",
    items: [
      {
        name: "Japanese Long Fries",
        description: "Extra long golden fries seasoned to perfection",
        price: 90,
      },
      {
        name: "French Fries",
        description: "Classic salted crispy potato fries",
        price: 90,
      },
      {
        name: "Peri Peri French Fries",
        description: "Crispy fries tossed in hot & spicy peri peri seasoning",
        price: 99,
      },
    ],
  },
  {
    categoryName: "Beverages & Drinks",
    subtitle: "Chilled coolers, coffees & warm sips",
    items: [
      {
        name: "Fruit Beer",
        description: "Glass of class! Fresh, chilled, most tempting non-alcoholic drink in town",
        price: 60,
        tag: "House Special",
      },
      {
        name: "Red Velvet Mojito",
        description: "Refreshing mint, lime, and red velvet fizz",
        price: 80,
      },
      {
        name: "Blue Curacao Mojito",
        description: "Cool blue citrus mint mocktail",
        price: 80,
      },
      {
        name: "Virgin Mojito",
        description: "Classic mint, lime, sugar & sparkling soda",
        price: 80,
      },
      {
        name: "Cold Coffee",
        description: "Rich blended chilled coffee",
        price: 90,
      },
      {
        name: "Coffee Frappe (with Ice Cream)",
        description: "Thick creamy frappe topped with a scoop of vanilla ice cream",
        price: 110,
      },
      {
        name: "Hot Coffee",
        description: "Freshly brewed frothy hot coffee",
        price: 40,
      },
      {
        name: "Tea",
        description: "Fresh spiced milk tea",
        price: 20,
      },
      {
        name: "Cold Drink (Coke, Sprite, Maaza)",
        description: "Chilled bottle / can",
        price: 25,
      },
    ],
  },
  {
    categoryName: "Sandwiches & Spring Rolls",
    subtitle: "Grilled sandwiches & crunchy rolls",
    items: [
      {
        name: "Veg. Sandwich",
        description: "Fresh veggies & sauce grilled between golden bread",
        price: 60,
      },
      {
        name: "Paneer Sandwich",
        description: "Spiced paneer filling grilled to crisp perfection",
        price: 80,
      },
      {
        name: "Veg. Spring Roll (Full / Half)",
        description: "Crispy rolls filled with shredded sautéed vegetables",
        price: "90 / 60",
      },
      {
        name: "Veg. Spring Roll with Chopsy (Full / Half)",
        description: "Crispy spring rolls paired with crunchy chopsy noodles",
        price: "110 / 70",
      },
    ],
  },
  {
    categoryName: "Pahado Wali Maggi & Munchies",
    subtitle: "Comfort snacks & quick bites",
    items: [
      {
        name: "Plain Maggi",
        description: "Classic comfort noodles",
        price: 50,
      },
      {
        name: "Masala Maggi",
        description: "Spiced up Maggi with extra herbs & spices",
        price: 60,
      },
      {
        name: "Vegetable Maggi",
        description: "Loaded with peas, carrots, onions & capsicum",
        price: 70,
      },
      {
        name: "Chip Dip!",
        description: "Crunchy nachos topped with veggies & special dip (No Mayo)",
        price: 50,
      },
      {
        name: "Masala Papad!",
        description: "Baked papad with onion, capsicum, tomato & grated cheese served with sauce",
        price: 50,
      },
    ],
  },
  {
    categoryName: "Combos & Add-ons",
    subtitle: "Value meal combos & extra dips",
    items: [
      {
        name: "Super Meal Combo (with Fruit Beer)",
        description: "Burger + Long Fries + Fruit Beer",
        price: 180,
        tag: "Best Value",
      },
      {
        name: "Super Meal Combo (with Cold Drink)",
        description: "Burger + Long Fries + Cold Drink",
        price: 160,
        tag: "Value Combo",
      },
      {
        name: "Special Dip",
        description: "In-house special secret dip",
        price: 10,
      },
      {
        name: "Sweet Chilli Dip",
        description: "Sweet and spicy dip",
        price: 10,
      },
    ],
  },
];
