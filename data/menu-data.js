/**
 * THE BAKERS FARM (TBF) - Centralized Menu & Business Data
 * 
 * Source of truth for all restaurant, café, and bakery items.
 * Easily update prices, items, and business details without altering markup.
 */

const TBF_CONFIG = {
  brandName: "The Bakers Farm",
  shortName: "TBF",
  tagline: "Freshly Baked. Deliciously Crafted.",
  subTagline: "Artisan Bakery · Café · Casual Dining",
  address: "Aliganj, Lucknow, Uttar Pradesh",
  addressNotice: "Full street address & postal code to be confirmed by client",
  phonePlaceholder: "+91 9XXXXXXXXX",
  phoneNotice: "Official phone number to be confirmed",
  whatsappPlaceholder: "919000000000",
  whatsappDisplay: "+91 90000 00000",
  whatsappNotice: "Official WhatsApp ordering number to be confirmed",
  emailPlaceholder: "hello@thebakersfarm.com",
  emailNotice: "Official email to be confirmed",
  instagramUrl: "https://www.instagram.com/thebakersfarm/",
  instagramHandle: "@thebakersfarm",
  openingHours: "Mon – Sun: 10:00 AM – 11:00 PM",
  openingHoursNotice: "Opening hours to be confirmed",
  fondantAddons: {
    semi: 400,
    full: 600
  }
};

const FEATURED_CATEGORIES = [
  { id: "cakes", name: "Cakes", icon: "🍰", description: "Handcrafted celebration & artisan cakes" },
  { id: "pastries", name: "Pastries & Desserts", icon: "🧁", description: "Gourmet pastries, brownies & puddings" },
  { id: "chinese", name: "Chinese & Noodles", icon: "🍜", description: "Wok-tossed noodles & fried rice specials" },
  { id: "pasta", name: "Pasta", icon: "🍝", description: "Rich, creamy Italian pasta bowls" },
  { id: "momos", name: "Momos", icon: "🥟", description: "Steamed & crunchy kurkure momos" },
  { id: "burgers", name: "Burgers & Snacks", icon: "🍔", description: "Juicy burgers, sandwiches & rolls" },
  { id: "beverages", name: "Mocktails & Shakes", icon: "🥤", description: "Chilled coolers, thick shakes & coffees" },
  { id: "chaat", name: "Chaat", icon: "🌶️", description: "Authentic Lucknowi street savouries" }
];

const BEST_SELLERS = [
  {
    id: "bs-1",
    name: "TBF Special Creamy Pasta",
    category: "pasta",
    price: 350,
    unit: "Plate",
    diet: "veg",
    tag: "Chef Signature",
    description: "Signature penne in our house-crafted velvety cheese sauce with sautéed herbs and garlic crunch.",
    image: "https://images.unsplash.com/photo-1621996346565-e3d5d628169e?w=700&auto=format&fit=crop&q=80"
  },
  {
    id: "bs-2",
    name: "TBF Special Cheese Momos",
    category: "momos",
    price: 250,
    unit: "Plate",
    diet: "veg",
    tag: "Bestseller",
    description: "Melt-in-mouth dumplings loaded with premium molten mozzarella and savoury spices, served with red chilli dip.",
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=700&auto=format&fit=crop&q=80"
  },
  {
    id: "bs-3",
    name: "Chicken Kurkure Momos",
    category: "momos",
    price: 250,
    unit: "8 pcs",
    diet: "non-veg",
    tag: "Crowd Favourite",
    description: "Ultra-crispy golden crumb coated dumplings stuffed with seasoned minced chicken and served piping hot.",
    image: "https://images.unsplash.com/photo-1625398407796-82650a8c135f?w=700&auto=format&fit=crop&q=80"
  },
  {
    id: "bs-4",
    name: "TBF Special Almond Cake",
    category: "cakes",
    price: 2000,
    unit: "1 kg",
    diet: "veg",
    tag: "Artisan Signature",
    description: "Luxurious multi-layered sponge infused with roasted Californian almonds, vanilla cream, and almond flakes.",
    image: "https://images.unsplash.com/photo-1535141192574-5d4897c13136?w=700&auto=format&fit=crop&q=80"
  },
  {
    id: "bs-5",
    name: "Red Velvet Cake",
    category: "cakes",
    price: 1600,
    unit: "1 kg",
    diet: "veg",
    tag: "Celebration Favourite",
    description: "Classic velvety crimson cocoa sponge layered with silky smooth Philadelphia-style cream cheese frosting.",
    image: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?w=700&auto=format&fit=crop&q=80"
  },
  {
    id: "bs-6",
    name: "Biscoff Pastry",
    category: "pastries",
    price: 150,
    unit: "Paper Plate",
    diet: "veg",
    tag: "Trending Treat",
    description: "Indulgent pastry infused with Belgian speculoos Lotus Biscoff spread, biscuit crumbles, and caramel mousse.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=700&auto=format&fit=crop&q=80"
  },
  {
    id: "bs-7",
    name: "Chicken Cheese Burger",
    category: "burgers",
    price: 260,
    unit: "Paper Plate",
    diet: "non-veg",
    tag: "Café Classic",
    description: "Crispy herb-crusted chicken patty crowned with molten cheddar, crisp iceberg lettuce, and smoked secret relish.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=700&auto=format&fit=crop&q=80"
  },
  {
    id: "bs-8",
    name: "Blue Lagoon Mojito",
    category: "mocktails",
    price: 100,
    unit: "Glass",
    diet: "veg",
    tag: "Refreshing Cooler",
    description: "Vibrant tropical blue curacao with fresh muddled garden mint, sparkling fizz, and a burst of zesty lemon.",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=700&auto=format&fit=crop&q=80"
  }
];

const MENU_CATEGORIES = [
  { id: "all", name: "All Items", icon: "✨" },
  { id: "fried-rice", name: "Fried Rice", icon: "🍚" },
  { id: "noodles", name: "Noodles", icon: "🍜" },
  { id: "veg-starter", name: "Veg Starters", icon: "🥗" },
  { id: "non-veg-starter", name: "Non-Veg Starters", icon: "🍗" },
  { id: "non-veg-noodles", name: "Non-Veg Noodles", icon: "🥢" },
  { id: "combo", name: "Combo Towers", icon: "🍱" },
  { id: "pasta", name: "Pasta", icon: "🍝" },
  { id: "momos", name: "Momos", icon: "🥟" },
  { id: "mocktails", name: "Mocktails", icon: "🍹" },
  { id: "shakes", name: "Shakes & Coffee", icon: "🥤" },
  { id: "maggie", name: "Maggie", icon: "🍲" },
  { id: "burger", name: "Burgers", icon: "🍔" },
  { id: "cakes", name: "Cakes", icon: "🎂" },
  { id: "pastries", name: "Pastries & Desserts", icon: "🧁" },
  { id: "snacks", name: "Snacks & Pizzas", icon: "🍕" },
  { id: "chaat", name: "Chaat", icon: "🌶️" },
  { id: "cookies", name: "Cookies & Bakery", icon: "🍪" },
  { id: "ice-cream", name: "Ice Cream Cones", icon: "🍦" }
];

const FULL_MENU_ITEMS = [
  // --- 1. FRIED RICE ---
  { id: "fr-1", name: "Veg Fried Rice", category: "fried-rice", unit: "Plate", price: 150, diet: "veg", description: "Wok-tossed fragrant basmati with garden fresh vegetables and mild Asian herbs.", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&auto=format&fit=crop&q=80" },
  { id: "fr-2", name: "Paneer Fried Rice", category: "fried-rice", unit: "Plate", price: 180, diet: "veg", description: "Fluffy rice tossed with golden malai paneer cubes, capsicum, and spring onions.", image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&auto=format&fit=crop&q=80" },
  { id: "fr-3", name: "Egg Fried Rice", category: "fried-rice", unit: "Plate", price: 200, diet: "egg", description: "Fragrant rice scrambled with farm-fresh eggs, toasted pepper, and scallions.", image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600&auto=format&fit=crop&q=80" },
  { id: "fr-4", name: "Chicken Fried Rice", category: "fried-rice", unit: "Plate", price: 250, diet: "non-veg", description: "Tender chicken morsels, egg shreds, and wok-seared grains in aromatic soy seasoning.", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&auto=format&fit=crop&q=80" },

  // --- 2. NOODLES ---
  { id: "nd-1", name: "Crispy Noodles", category: "noodles", unit: "Plate", price: 300, diet: "veg", description: "Golden fried crunchy noodles crowned with savory sweet-and-sour vegetable glaze.", image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&auto=format&fit=crop&q=80" },
  { id: "nd-2", name: "Hakka Noodles", category: "noodles", unit: "Plate", price: 300, diet: "veg", description: "Street-style Indo-Chinese noodles tossed with crunchy shredded cabbage, bell peppers and carrots.", image: "https://images.unsplash.com/photo-1612927601601-6638404737ce?w=600&auto=format&fit=crop&q=80" },
  { id: "nd-3", name: "Chilly Garlic Noodles", category: "noodles", unit: "Plate", price: 300, diet: "veg", description: "Spicy wok-tossed noodles infused with roasted garlic flakes and fiery red chili paste.", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&auto=format&fit=crop&q=80" },
  { id: "nd-4", name: "Singapore Noodles", category: "noodles", unit: "Plate", price: 350, diet: "veg", description: "Aromatic thin vermicelli noodles infused with mild curry spice blend, vibrant greens, and sesame oil.", image: "https://images.unsplash.com/photo-1552611052-33e04de081de?w=600&auto=format&fit=crop&q=80" },

  // --- 3. VEG STARTER ---
  { id: "vs-1", name: "Finger", category: "veg-starter", unit: "Plate", price: 120, diet: "veg", notice: "POS Conflict: Also listed as ₹100 elsewhere in POS. Subject to client confirmation.", description: "Crispy fried golden potato fingers sprinkled with mild chatpata seasoning.", image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&auto=format&fit=crop&q=80" },
  { id: "vs-2", name: "Perry Perry Finger", category: "veg-starter", unit: "Plate", price: 150, diet: "veg", notice: "POS Conflict: Also listed as ₹120 elsewhere in POS. Subject to client confirmation.", description: "Crunchy potato fingers generously tossed in zesty, fiery peri peri spice mix.", image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=600&auto=format&fit=crop&q=80" },
  { id: "vs-3", name: "Veg Manchurian Dry", category: "veg-starter", unit: "10 pcs", price: 220, diet: "veg", description: "Fried minced vegetable dumplings tossed in garlic, ginger, and dark soy reduction.", image: "https://images.unsplash.com/photo-1567337710282-00832b415979?w=600&auto=format&fit=crop&q=80" },
  { id: "vs-4", name: "Veg Manchurian Gravy", category: "veg-starter", unit: "10 pcs", price: 250, diet: "veg", description: "Crisp vegetable balls simmered in a luscious, savory Chinese brown gravy.", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=80" },
  { id: "vs-5", name: "Paneer Manchurian Dry", category: "veg-starter", unit: "10 pcs", price: 280, diet: "veg", description: "Soft paneer cubes crisped and tossed with green chilies, scallions, and soy sauce.", image: "https://images.unsplash.com/photo-1567337710282-00832b415979?w=600&auto=format&fit=crop&q=80" },
  { id: "vs-6", name: "Paneer Manchurian Gravy", category: "veg-starter", unit: "10 pcs", price: 300, diet: "veg", description: "Fresh cottage cheese cubes in rich garlic-infused Indo-Chinese gravy.", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=80" },
  { id: "vs-7", name: "Chilli Paneer Dry", category: "veg-starter", unit: "10 pcs", price: 350, diet: "veg", description: "Diced paneer stir-fried with diced bell peppers, red onions, and hot chili glaze.", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&auto=format&fit=crop&q=80" },
  { id: "vs-8", name: "Chilli Paneer Gravy", category: "veg-starter", unit: "10 pcs", price: 350, diet: "veg", description: "Succulent paneer batons in a fiery, tangy sauce with diced capsicum.", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=80" },
  { id: "vs-9", name: "Veg Spring Roll", category: "veg-starter", unit: "9 pcs", price: 160, diet: "veg", description: "Crisp, crackling filo rolls filled with julienned seasonal vegetables and glass noodles.", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=80" },
  { id: "vs-10", name: "Cheese Cigar Roll", category: "veg-starter", unit: "9 pcs", price: 220, diet: "veg", description: "Golden crunchy rolls stuffed with molten creamy cheese and herbs.", image: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=600&auto=format&fit=crop&q=80" },
  { id: "vs-11", name: "Honey Chilli Potato", category: "veg-starter", unit: "Plate", price: 250, diet: "veg", description: "Crispy fried potato fingers coated in a luscious sweet honey and fiery chili reduction with toasted sesame.", image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&auto=format&fit=crop&q=80" },

  // --- 4. NON-VEG STARTER ---
  { id: "nvs-1", name: "Honey Chilly Chicken", category: "non-veg-starter", unit: "10 pcs", price: 400, diet: "non-veg", description: "Crisp battered chicken chunks glazed in sweet honey, roasted chili flakes, and toasted sesame.", image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=600&auto=format&fit=crop&q=80" },
  { id: "nvs-2", name: "Chicken Manchurian", category: "non-veg-starter", unit: "10 pcs", price: 350, diet: "non-veg", description: "Juicy chicken meatballs tossed in a fragrant ginger-coriander dark soya sauce.", image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=600&auto=format&fit=crop&q=80" },
  { id: "nvs-3", name: "Chicken Pop Corn", category: "non-veg-starter", unit: "16 pcs", price: 280, diet: "non-veg", description: "Bite-sized tender chicken breast pieces coated in seasoned crunchy batter, fried golden.", image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=600&auto=format&fit=crop&q=80" },
  { id: "nvs-4", name: "Chicken Grilled Sandwich", category: "non-veg-starter", unit: "Plate", price: 120, diet: "non-veg", description: "Triple-layered butter-toasted sandwich stuffed with shredded herb chicken and cheese.", image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&auto=format&fit=crop&q=80" },

  // --- 5. NON-VEG NOODLES ---
  { id: "nvn-1", name: "Egg Noodles", category: "non-veg-noodles", unit: "Plate", price: 280, diet: "egg", description: "Wok-seared noodles with scrambled egg ribbons, crunchy julienned veggies, and soy.", image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&auto=format&fit=crop&q=80" },
  { id: "nvn-2", name: "Chicken Noodles", category: "non-veg-noodles", unit: "Plate", price: 350, diet: "non-veg", description: "Classic Chinese wok noodles tossed with spiced chicken strips and crunchy vegetables.", image: "https://images.unsplash.com/photo-1612927601601-6638404737ce?w=600&auto=format&fit=crop&q=80" },
  { id: "nvn-3", name: "Chicken Hakka Noodles", category: "non-veg-noodles", unit: "Plate", price: 350, diet: "non-veg", description: "Flavourful Indo-Chinese hakka noodles with sliced tender chicken, scallions, and light seasoning.", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&auto=format&fit=crop&q=80" },
  { id: "nvn-4", name: "Singapore Chicken Noodles", category: "non-veg-noodles", unit: "Plate", price: 380, diet: "non-veg", description: "Curry-flavoured thin noodles wok-tossed with marinated chicken strips, eggs, and bell peppers.", image: "https://images.unsplash.com/photo-1552611052-33e04de081de?w=600&auto=format&fit=crop&q=80" },

  // --- 6. COMBO TOWERS ---
  { id: "cb-1", name: "Veg Manchurian + Veg Fried Rice", category: "combo", unit: "Combo Tower", price: 250, diet: "veg", description: "Saucy veg manchurian balls paired with wok-tossed vegetable fried rice.", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=80" },
  { id: "cb-2", name: "Chilli Chicken + Chicken Noodles", category: "combo", unit: "Combo Tower", price: 380, diet: "non-veg", description: "Spicy chilli chicken gravy served alongside classic wok-tossed chicken noodles.", image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=600&auto=format&fit=crop&q=80" },
  { id: "cb-3", name: "Chicken Manchurian + Chicken Fried Rice", category: "combo", unit: "Combo Tower", price: 300, diet: "non-veg", description: "Juicy chicken manchurian served hot with aromatic chicken fried rice.", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&auto=format&fit=crop&q=80" },
  { id: "cb-4", name: "Chilli Chicken + Egg Noodles", category: "combo", unit: "Combo Tower", price: 300, diet: "non-veg", description: "Fiery wok-tossed chilli chicken served with savory scrambled egg noodles.", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&auto=format&fit=crop&q=80" },
  { id: "cb-5", name: "Chilli Paneer + Veg Fried Rice", category: "combo", unit: "Combo Tower", price: 250, diet: "veg", description: "Cottage cheese cubes in spicy soy-garlic gravy alongside wok vegetable fried rice.", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&auto=format&fit=crop&q=80" },
  { id: "cb-6", name: "Paneer Manchurian + Veg Noodles", category: "combo", unit: "Combo Tower", price: 250, diet: "veg", description: "Paneer manchurian balls paired with delicious street-style veg noodles.", image: "https://images.unsplash.com/photo-1612927601601-6638404737ce?w=600&auto=format&fit=crop&q=80" },
  { id: "cb-7", name: "Honey Chilli Potato + Virgin Mojito / Blue Lagoon", category: "combo", unit: "Combo Tower", price: 250, diet: "veg", description: "Crispy sweet-spicy honey chilli potato accompanied by your choice of refreshing cooler.", image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&auto=format&fit=crop&q=80" },
  { id: "cb-8", name: "Veg Noodles + Virgin Mojito / Blue Lagoon", category: "combo", unit: "Combo Tower", price: 200, diet: "veg", description: "Steaming hot veg noodles with a chilled glass of refreshing mint or blue lagoon mojito.", image: "https://images.unsplash.com/photo-1612927601601-6638404737ce?w=600&auto=format&fit=crop&q=80" },
  { id: "cb-9", name: "Chicken Kurkure Momos (6 pcs) + Mojito", category: "combo", unit: "Combo Tower", price: 300, diet: "non-veg", description: "Crunchy kurkure chicken dumplings paired with a cool Virgin or Blue Lagoon Mojito.", image: "https://images.unsplash.com/photo-1625398407796-82650a8c135f?w=600&auto=format&fit=crop&q=80" },
  { id: "cb-10", name: "Paneer Kurkure Momos (6 pcs) + Mojito", category: "combo", unit: "Combo Tower", price: 250, diet: "veg", description: "Crispy paneer kurkure dumplings paired with a chilled glass of sparkling mojito.", image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=600&auto=format&fit=crop&q=80" },
  { id: "cb-11", name: "Veg Steam Momos (8 pcs) + Mojito", category: "combo", unit: "Combo Tower", price: 180, diet: "veg", description: "Soft steamed vegetable momos with fiery red chutney and a refreshing mocktail.", image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=600&auto=format&fit=crop&q=80" },
  { id: "cb-12", name: "Chicken Steam Momos (8 pcs) + Mojito", category: "combo", unit: "Combo Tower", price: 220, diet: "non-veg", description: "Steamed chicken momos served with signature sauce and a glass of sparkling cooler.", image: "https://images.unsplash.com/photo-1625398407796-82650a8c135f?w=600&auto=format&fit=crop&q=80" },

  // --- 7. PASTA ---
  { id: "ps-1", name: "Creamy White Sauce Pasta", category: "pasta", unit: "Plate", price: 250, diet: "veg", description: "Classic Alfredo penne cooked in garlic butter, fresh cream, grated parmesan, and herbs.", image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=600&auto=format&fit=crop&q=80" },
  { id: "ps-2", name: "Creamy Red Sauce Pasta", category: "pasta", unit: "Plate", price: 300, diet: "veg", description: "Tangy slow-cooked Italian plum tomato sauce balanced with fresh cream and basil.", image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=600&auto=format&fit=crop&q=80" },
  { id: "ps-3", name: "TBF Special Creamy Pasta", category: "pasta", unit: "Plate", price: 350, diet: "veg", isSignature: true, description: "Our house secret pink sauce pasta simmered with cheese, sweet corn, broccoli, and roasted garlic.", image: "https://images.unsplash.com/photo-1621996346565-e3d5d628169e?w=600&auto=format&fit=crop&q=80" },

  // --- 8. MOMOS ---
  { id: "mm-1", name: "Veg Steam Momos", category: "momos", unit: "10 pcs", price: 120, diet: "veg", description: "Delicate steamed dumplings stuffed with finely minced garden vegetables and herbs.", image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=600&auto=format&fit=crop&q=80" },
  { id: "mm-2", name: "Chicken Steam Momos", category: "momos", unit: "10 pcs", price: 200, diet: "non-veg", description: "Juicy, steamed Himalayan-style chicken dumplings served with spicy garlic dip.", image: "https://images.unsplash.com/photo-1625398407796-82650a8c135f?w=600&auto=format&fit=crop&q=80" },
  { id: "mm-3", name: "Chicken Kurkure Momos", category: "momos", unit: "8 pcs", price: 250, diet: "non-veg", description: "Crunchy cornflake-crusted chicken momos fried to golden perfection.", image: "https://images.unsplash.com/photo-1625398407796-82650a8c135f?w=600&auto=format&fit=crop&q=80" },
  { id: "mm-4", name: "Paneer Kurkure Momos", category: "momos", unit: "8 pcs", price: 200, diet: "veg", description: "Crispy coated dumplings stuffed with grated spiced paneer and creamy mayo.", image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=600&auto=format&fit=crop&q=80" },
  { id: "mm-5", name: "TBF Special Cheese Momos", category: "momos", unit: "Plate", price: 250, diet: "veg", isSignature: true, description: "Dumplings stuffed with molten mozzarella, sweet corn, and herbs.", image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=600&auto=format&fit=crop&q=80" },

  // --- 9. MOCKTAILS ---
  { id: "mc-1", name: "Virgin Mojito", category: "mocktails", unit: "Glass", price: 100, diet: "veg", description: "Refreshing blend of muddled mint sprigs, lime wedges, simple syrup, and sparkling soda.", image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&auto=format&fit=crop&q=80" },
  { id: "mc-2", name: "Watermelon Mojito", category: "mocktails", unit: "Glass", price: 100, diet: "veg", description: "Sweet fresh watermelon pulp crushed with lime, garden mint, and chilled fizz.", image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=600&auto=format&fit=crop&q=80" },
  { id: "mc-3", name: "Green Apple Mojito", category: "mocktails", unit: "Glass", price: 100, diet: "veg", description: "Crisp green apple syrup, freshly squeezed lemon juice, mint, and crushed ice.", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&auto=format&fit=crop&q=80" },
  { id: "mc-4", name: "Blue Lagoon Mojito", category: "mocktails", unit: "Glass", price: 100, diet: "veg", description: "Chilled tropical blue curacao with lime, mint leaves, and refreshing lemon fizz.", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&auto=format&fit=crop&q=80" },
  { id: "mc-5", name: "Fruit Beer Mocktail", category: "mocktails", unit: "Glass", price: 150, diet: "veg", description: "Non-alcoholic malt cooler loaded with fruity undertones and creamy head.", image: "https://images.unsplash.com/photo-1608270114031-15c0a3e8e2aa?w=600&auto=format&fit=crop&q=80" },

  // --- 10. SHAKES & COFFEE ---
  { id: "sh-1", name: "Vanilla Shake", category: "shakes", unit: "Glass", price: 120, diet: "veg", description: "Velvety whole milk blended with pure Madagascar vanilla bean cream.", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&auto=format&fit=crop&q=80" },
  { id: "sh-2", name: "Pineapple Shake", category: "shakes", unit: "Glass", price: 180, diet: "veg", description: "Tropical pineapple pulp blended thick with fresh dairy milk.", image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=600&auto=format&fit=crop&q=80" },
  { id: "sh-3", name: "Mango Shake", category: "shakes", unit: "Glass", price: 180, diet: "veg", description: "Luscious Alphonso mango puree whipped with rich milk and cream.", image: "https://images.unsplash.com/photo-1546173159-315724a31696?w=600&auto=format&fit=crop&q=80" },
  { id: "sh-4", name: "Strawberry Shake", category: "shakes", unit: "Glass", price: 180, diet: "veg", description: "Sweet strawberry crush blended into a pretty pink frosty treat.", image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=600&auto=format&fit=crop&q=80" },
  { id: "sh-5", name: "Black Current Shake", category: "shakes", unit: "Glass", price: 200, diet: "veg", description: "Tangy blackcurrant puree swirled with vanilla ice cream and chilled milk.", image: "https://images.unsplash.com/photo-1553787499-6f9133860278?w=600&auto=format&fit=crop&q=80" },
  { id: "sh-6", name: "Chocolate Shake", category: "shakes", unit: "Glass", price: 200, diet: "veg", description: "Decadent Dutch cocoa syrup whipped with chocolate chips and chilled milk.", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&auto=format&fit=crop&q=80" },
  { id: "sh-7", name: "Chocolate Oreo Shake", category: "shakes", unit: "Glass", price: 250, diet: "veg", description: "Crushed Oreo biscuits blended thick with chocolate fudge and whipped topping.", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&auto=format&fit=crop&q=80" },
  { id: "sh-8", name: "Kit Kat Shake", category: "shakes", unit: "Glass", price: 220, diet: "veg", description: "Crunchy wafer Kit Kat fingers crushed into a creamy chocolate shake.", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&auto=format&fit=crop&q=80" },
  { id: "sh-9", name: "Cold Coffee", category: "shakes", unit: "Glass", price: 150, diet: "veg", description: "Smooth espresso brew shaken with chilled full-cream milk and vanilla froth.", image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=600&auto=format&fit=crop&q=80" },

  // --- 11. MAGGIE ---
  { id: "mg-1", name: "Butter Veg Corn Maggie", category: "maggie", unit: "Plate", price: 150, diet: "veg", description: "Noodles prepared with sweet corn, garden veggies, and generous melted butter.", image: "https://images.unsplash.com/photo-1612927601601-6638404737ce?w=600&auto=format&fit=crop&q=80" },
  { id: "mg-2", name: "Butter Maggie", category: "maggie", unit: "Plate", price: 120, diet: "veg", description: "Comforting classic Maggie cooked to perfection with rich golden butter.", image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&auto=format&fit=crop&q=80" },
  { id: "mg-3", name: "Butter Perry Perry Maggie", category: "maggie", unit: "Plate", price: 130, diet: "veg", description: "Spicy twist on butter Maggie loaded with tangy peri-peri seasoning.", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&auto=format&fit=crop&q=80" },

  // --- 12. BURGERS ---
  { id: "bg-1", name: "Veg Burger", category: "burger", unit: "Paper Plate", price: 120, diet: "veg", description: "Crisp vegetable patty with tomato slices, lettuce, and creamy burger mayo.", image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&auto=format&fit=crop&q=80" },
  { id: "bg-2", name: "Paneer Cheese Burger", category: "burger", unit: "Paper Plate", price: 180, diet: "veg", description: "Thick spiced paneer steak with melted cheese slice and house sauce in a toasted bun.", image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=600&auto=format&fit=crop&q=80" },
  { id: "bg-3", name: "Chicken Cheese Burger", category: "burger", unit: "Paper Plate", price: 260, diet: "non-veg", description: "Crispy chicken patty crowned with cheddar cheese slice, fresh lettuce, and gherkins.", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=80" },

  // --- 13. CAKES (Dual Pricing) ---
  {
    id: "ck-1",
    name: "Pineapple Cake",
    category: "cakes",
    cakeTag: "Fruit",
    diet: "veg",
    unit: "Cake Box",
    price1kg: 1000,
    priceHalfKg: 550,
    description: "Classic light vanilla sponge layered with juicy pineapple chunks and whipped cream.",
    image: "https://images.unsplash.com/photo-1535141192574-5d4897c13136?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "ck-2",
    name: "Black Forest Cake",
    category: "cakes",
    cakeTag: "Classic",
    diet: "veg",
    unit: "Cake Box",
    price1kg: 1000,
    priceHalfKg: 550,
    description: "Chocolate sponge layered with whipped cream, Maraschino cherries, and dark chocolate shavings.",
    image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "ck-3",
    name: "Butterscotch Cake",
    category: "cakes",
    cakeTag: "Classic",
    diet: "veg",
    unit: "Cake Box",
    price1kg: 1000,
    priceHalfKg: 550,
    description: "Caramelized butterscotch praline crumbles layered with rich golden vanilla mousse.",
    image: "https://images.unsplash.com/photo-1542826438-bd32f43d626f?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "ck-4",
    name: "Strawberry Cake",
    category: "cakes",
    cakeTag: "Fruit",
    diet: "veg",
    unit: "Cake Box",
    price1kg: 1500,
    priceHalfKg: 800,
    description: "Delicate pink strawberry cream layered with berry compote and white chocolate pearls.",
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "ck-5",
    name: "Chocolate Cake",
    category: "cakes",
    cakeTag: "Chocolate",
    diet: "veg",
    unit: "Cake Box",
    price1kg: 1200,
    priceHalfKg: 650,
    description: "Silky dark chocolate ganache draped over moist chocolate mud cake.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "ck-6",
    name: "Candyless Cake",
    category: "cakes",
    cakeTag: "Special",
    diet: "veg",
    unit: "Cake Box",
    price1kg: 1800,
    priceHalfKg: 950,
    description: "Sophisticated sugar-balanced premium artisan cake crafted with fine cream.",
    image: "https://images.unsplash.com/photo-1535141192574-5d4897c13136?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "ck-7",
    name: "Fresh Fruit Cake",
    category: "cakes",
    cakeTag: "Fruit",
    diet: "veg",
    unit: "Cake Box",
    price1kg: 1500,
    priceHalfKg: 800,
    description: "Loaded with fresh seasonal kiwis, strawberries, grapes, and glazed peaches.",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "ck-8",
    name: "Choco Chips Cake",
    category: "cakes",
    cakeTag: "Chocolate",
    diet: "veg",
    unit: "Cake Box",
    price1kg: 1400,
    priceHalfKg: 750,
    description: "Decadent chocolate sponge studded with crunchy dark chocolate chips.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "ck-9",
    name: "Extra Chocolate Cake",
    category: "cakes",
    cakeTag: "Chocolate",
    diet: "veg",
    unit: "Cake Box",
    price1kg: 1600,
    priceHalfKg: 850,
    description: "Triple chocolate indulgence with dark truffle ganache, mousse, and chocolate glaze.",
    image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "ck-10",
    name: "Blueberry Cake",
    category: "cakes",
    cakeTag: "Fruit",
    diet: "veg",
    unit: "Cake Box",
    price1kg: 1600,
    priceHalfKg: 850,
    description: "Plump wild blueberry coulis layered between light vanilla sponge and berry frosting.",
    image: "https://images.unsplash.com/photo-1535141192574-5d4897c13136?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "ck-11",
    name: "Milky Vanilla Cake",
    category: "cakes",
    cakeTag: "Classic",
    diet: "veg",
    unit: "Cake Box",
    price1kg: 800,
    priceHalfKg: 450,
    description: "Gentle milk cream sponge layered with sweetened condensed milk and vanilla.",
    image: "https://images.unsplash.com/photo-1542826438-bd32f43d626f?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "ck-12",
    name: "Casata Cake",
    category: "cakes",
    cakeTag: "Special",
    diet: "veg",
    unit: "Cake Box",
    price1kg: 1200,
    priceHalfKg: 650,
    description: "Traditional multi-colored sponge layered with candied fruit peel and nuts.",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "ck-13",
    name: "White Forest Cake",
    category: "cakes",
    cakeTag: "Classic",
    diet: "veg",
    unit: "Cake Box",
    price1kg: 1200,
    priceHalfKg: 650,
    description: "Vanilla sponge with luscious cherries, whipped cream, and shaved Belgian white chocolate.",
    image: "https://images.unsplash.com/photo-1542826438-bd32f43d626f?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "ck-14",
    name: "Cheesecake",
    category: "cakes",
    cakeTag: "Premium",
    diet: "veg",
    unit: "Cake Box",
    price1kg: 1600,
    priceHalfKg: 850,
    description: "New York-style baked cheesecake on a buttery graham cracker crust with berry glaze.",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "ck-15",
    name: "Lotus Biscoff Cake",
    category: "cakes",
    cakeTag: "Premium",
    diet: "veg",
    unit: "Cake Box",
    isTBD: true,
    priceNotice: "Price TBD (Confirm with Bakery)",
    description: "Speculoos Biscoff cookie spread layered with caramelized sponge and crumble.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "ck-16",
    name: "Caramel Cake",
    category: "cakes",
    cakeTag: "Special",
    diet: "veg",
    unit: "Cake Box",
    price1kg: 1400,
    priceHalfKg: 800,
    description: "Melt-in-mouth sponge drenched in slow-simmered dulce de leche salted caramel.",
    image: "https://images.unsplash.com/photo-1542826438-bd32f43d626f?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "ck-17",
    name: "Coffee Caramel Cake",
    category: "cakes",
    cakeTag: "Special",
    diet: "veg",
    unit: "Cake Box",
    price1kg: 1600,
    priceHalfKg: 850,
    description: "Rich arabica espresso cream swirled with golden butterscotch caramel.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "ck-18",
    name: "Red Velvet Cake",
    category: "cakes",
    cakeTag: "Premium",
    diet: "veg",
    unit: "Cake Box",
    price1kg: 1600,
    priceHalfKg: 850,
    description: "Iconic red cocoa velvet sponge with luscious cream cheese frosting.",
    image: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "ck-19",
    name: "TBF Special Almond Cake",
    category: "cakes",
    cakeTag: "Special",
    isSignature: true,
    diet: "veg",
    unit: "Cake Box",
    price1kg: 2000,
    priceHalfKg: 1100,
    description: "Our crowning masterpiece sponge loaded with toasted Californian almonds and rich cream.",
    image: "https://images.unsplash.com/photo-1535141192574-5d4897c13136?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "ck-20",
    name: "Rasmalai Cake",
    category: "cakes",
    cakeTag: "Special",
    diet: "veg",
    unit: "Cake Box",
    price1kg: 1800,
    priceHalfKg: 950,
    description: "Cardamom & saffron infused milk sponge layered with actual cottage cheese rasmalai pearls.",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "ck-21",
    name: "Oreo Cake",
    category: "cakes",
    cakeTag: "Chocolate",
    diet: "veg",
    unit: "Cake Box",
    price1kg: 1600,
    priceHalfKg: 850,
    description: "Cookies and cream goodness with whole crushed Oreo biscuits and smooth chocolate cream.",
    image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=600&auto=format&fit=crop&q=80"
  },

  // --- 14. PASTRIES & DESSERTS ---
  { id: "pst-1", name: "Pineapple Pastry", category: "pastries", unit: "Paper Plate", price: 80, diet: "veg", description: "Fresh pineapple fruit bits with fluffy vanilla cream.", image: "https://images.unsplash.com/photo-1535141192574-5d4897c13136?w=600&auto=format&fit=crop&q=80" },
  { id: "pst-2", name: "Black Forest Pastry", category: "pastries", unit: "Paper Plate", price: 100, diet: "veg", description: "Layers of chocolate sponge, red cherries, and chocolate flakes.", image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=600&auto=format&fit=crop&q=80" },
  { id: "pst-3", name: "Devel Pastry", category: "pastries", unit: "Paper Plate", price: 120, diet: "veg", description: "Intense devil's food chocolate sponge with bittersweet fudge ganache.", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&auto=format&fit=crop&q=80" },
  { id: "pst-4", name: "Candyless Pastry", category: "pastries", unit: "Paper Plate", price: 150, diet: "veg", description: "Signature refined sweetness pastry with smooth cream filling.", image: "https://images.unsplash.com/photo-1542826438-bd32f43d626f?w=600&auto=format&fit=crop&q=80" },
  { id: "pst-5", name: "Choco Chip Pastry", category: "pastries", unit: "Paper Plate", price: 140, diet: "veg", description: "Rich cocoa pastry loaded with crunchy dark chocolate chips.", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&auto=format&fit=crop&q=80" },
  { id: "pst-6", name: "White Forest Pastry", category: "pastries", unit: "Paper Plate", price: 120, diet: "veg", description: "Creamy white chocolate pastry with juicy cherries.", image: "https://images.unsplash.com/photo-1542826438-bd32f43d626f?w=600&auto=format&fit=crop&q=80" },
  { id: "pst-7", name: "Butterscotch Pastry", category: "pastries", unit: "Paper Plate", price: 90, diet: "veg", description: "Crunchy butterscotch praline with velvety caramel cream.", image: "https://images.unsplash.com/photo-1542826438-bd32f43d626f?w=600&auto=format&fit=crop&q=80" },
  { id: "pst-8", name: "Fresh Fruit Pastry", category: "pastries", unit: "Paper Plate", price: 150, diet: "veg", description: "Loaded with fresh seasonal sliced kiwi, grapes, and berries.", image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&auto=format&fit=crop&q=80" },
  { id: "pst-9", name: "TBF Special Pastry", category: "pastries", unit: "Paper Plate", price: 200, diet: "veg", isSignature: true, description: "Our chef's exclusive creation with roasted nuts, dual cream, and gold dust.", image: "https://images.unsplash.com/photo-1535141192574-5d4897c13136?w=600&auto=format&fit=crop&q=80" },
  { id: "pst-10", name: "Biscoff Pastry", category: "pastries", unit: "Paper Plate", price: 150, diet: "veg", description: "Layered with genuine Belgian Lotus Biscoff spread and biscuit crumb.", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&auto=format&fit=crop&q=80" },
  { id: "pst-11", name: "Cheese Mango Pastry", category: "pastries", unit: "Paper Plate", price: 140, diet: "veg", description: "Tropical mango curd paired with smooth cream cheese layer.", image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600&auto=format&fit=crop&q=80" },
  { id: "pst-12", name: "Belgium Pastry", category: "pastries", unit: "Paper Plate", price: 160, diet: "veg", description: "Authentic Belgian dark chocolate truffle layered on moist sponge.", image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=600&auto=format&fit=crop&q=80" },
  { id: "pst-13", name: "Oreo Cheese Pastry", category: "pastries", unit: "Paper Plate", price: 160, diet: "veg", description: "Crushed Oreo cookie crust topped with cheesecake cream.", image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600&auto=format&fit=crop&q=80" },
  { id: "pst-14", name: "Coffee Caramel Pastry", category: "pastries", unit: "Paper Plate", price: 150, diet: "veg", description: "Espresso cream swirled with golden caramel sauce.", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&auto=format&fit=crop&q=80" },
  { id: "pst-15", name: "Donut", category: "pastries", unit: "Paper Plate", price: 100, diet: "veg", description: "Fluffy yeast donut glazed with smooth chocolate glaze.", image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&auto=format&fit=crop&q=80" },
  { id: "pst-16", name: "Dry Fruit Donut", category: "pastries", unit: "Paper Plate", price: 180, diet: "veg", description: "Chocolate glazed donut studded with toasted almonds and pistachios.", image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=600&auto=format&fit=crop&q=80" },
  { id: "pst-17", name: "Browny", category: "pastries", unit: "Paper Plate", price: 100, diet: "veg", description: "Classic dense, fudgy chocolate brownie with a crinkly top.", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&auto=format&fit=crop&q=80" },
  { id: "pst-18", name: "Dry Fruit Browny", category: "pastries", unit: "Paper Plate", price: 180, diet: "veg", description: "Rich chocolate brownie loaded with toasted walnuts and cashews.", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&auto=format&fit=crop&q=80" },
  { id: "pst-19", name: "Caramel Browny", category: "pastries", unit: "Paper Plate", price: 140, diet: "veg", description: "Fudgy brownie drizzled with slow-cooked salted caramel.", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&auto=format&fit=crop&q=80" },
  { id: "pst-20", name: "Chocolate Ball", category: "pastries", unit: "Piece", price: 80, diet: "veg", description: "Truffle cake ball coated in dark chocolate and sprinkles.", image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=600&auto=format&fit=crop&q=80" },
  { id: "pst-21", name: "Cake Sicles", category: "pastries", unit: "Piece", price: 90, diet: "veg", description: "Cake pop popsicle coated in decorated Belgian chocolate shell.", image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=600&auto=format&fit=crop&q=80" },
  { id: "pst-22", name: "Pineapple Pudding", category: "pastries", unit: "Cup", price: 100, diet: "veg", description: "Creamy layered custard pudding with tropical pineapple jelly.", image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&auto=format&fit=crop&q=80" },
  { id: "pst-23", name: "Black Forest Pudding", category: "pastries", unit: "Cup", price: 120, diet: "veg", description: "Layered chocolate pudding cup with cherries and chocolate cream.", image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=600&auto=format&fit=crop&q=80" },
  { id: "pst-24", name: "Chocolate Pudding", category: "pastries", unit: "Cup", price: 150, diet: "veg", description: "Silky, melt-in-mouth dark chocolate custard pudding.", image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=600&auto=format&fit=crop&q=80" },

  // --- 15. SNACKS & PIZZAS (Price TBD) ---
  { id: "sn-1", name: "Paneer Cutlet", category: "snacks", unit: "Plate", isTBD: true, priceNotice: "Coming Soon / Price TBD", diet: "veg", description: "Golden fried minced paneer and vegetable cutlets with mint chutney.", image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&auto=format&fit=crop&q=80" },
  { id: "sn-2", name: "Veg Hot Dog", category: "snacks", unit: "Piece", isTBD: true, priceNotice: "Coming Soon / Price TBD", diet: "veg", description: "Herb spiced vegetable sausage tucked in a warm sesame bun with sauces.", image: "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?w=600&auto=format&fit=crop&q=80" },
  { id: "sn-3", name: "Paneer Sandwich", category: "snacks", unit: "Plate", isTBD: true, priceNotice: "Coming Soon / Price TBD", diet: "veg", description: "Toasted bread stuffed with spiced cottage cheese and peppers.", image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&auto=format&fit=crop&q=80" },
  { id: "sn-4", name: "Veg Sandwich", category: "snacks", unit: "Plate", isTBD: true, priceNotice: "Coming Soon / Price TBD", diet: "veg", description: "Classic cold or grilled vegetable sandwich with cucumber, tomato, and cheese.", image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&auto=format&fit=crop&q=80" },
  { id: "sn-5", name: "Italian Roll", category: "snacks", unit: "Piece", isTBD: true, priceNotice: "Coming Soon / Price TBD", diet: "veg", description: "Crisp baked bread roll filled with Italian herbs, vegetables, and mozzarella.", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=80" },
  { id: "sn-6", name: "Paneer Tikka Roll", category: "snacks", unit: "Piece", isTBD: true, priceNotice: "Coming Soon / Price TBD", diet: "veg", description: "Char-grilled tandoori spiced paneer rolled in a soft paratha with mint spread.", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&auto=format&fit=crop&q=80" },
  { id: "sn-7", name: "Paneer Cheese Slice", category: "snacks", unit: "Piece", isTBD: true, priceNotice: "Coming Soon / Price TBD", diet: "veg", description: "Baked savoury snack topped with paneer chunks and molten cheese.", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop&q=80" },
  { id: "sn-8", name: "Grilled Chicken Sandwich", category: "snacks", unit: "Plate", isTBD: true, priceNotice: "Coming Soon / Price TBD", diet: "non-veg", description: "Juicy grilled chicken breast slices layered with crisp greens and cheese.", image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&auto=format&fit=crop&q=80" },
  { id: "sn-9", name: "Grilled Paneer Sandwich", category: "snacks", unit: "Plate", isTBD: true, priceNotice: "Coming Soon / Price TBD", diet: "veg", description: "Butter-grilled golden sandwich with seasoned paneer filling.", image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&auto=format&fit=crop&q=80" },
  { id: "sn-10", name: "Chicken Hot Dog", category: "snacks", unit: "Piece", isTBD: true, priceNotice: "Coming Soon / Price TBD", diet: "non-veg", description: "Smoked chicken frankfurter in a soft bun drizzled with mustard and ketchup.", image: "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?w=600&auto=format&fit=crop&q=80" },
  { id: "sn-11", name: "Paneer Pizza", category: "snacks", unit: "Personal", isTBD: true, priceNotice: "Coming Soon / Price TBD", diet: "veg", description: "Crisp hand-stretched crust topped with marinated paneer, onions, and cheese.", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop&q=80" },
  { id: "sn-12", name: "Corn Pizza", category: "snacks", unit: "Personal", isTBD: true, priceNotice: "Coming Soon / Price TBD", diet: "veg", description: "Golden sweet corn kernels, Italian herbs, and generous mozzarella cheese.", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop&q=80" },
  { id: "sn-13", name: "Chicken Cheese Pizza", category: "snacks", unit: "Personal", isTBD: true, priceNotice: "Coming Soon / Price TBD", diet: "non-veg", description: "Loaded with spiced chicken chunks, mozzarella, and house tomato basil sauce.", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop&q=80" },
  { id: "sn-14", name: "Veg Cheese Pizza", category: "snacks", unit: "Personal", isTBD: true, priceNotice: "Coming Soon / Price TBD", diet: "veg", description: "Bell peppers, onions, tomatoes, and mushrooms over bubbly melted cheese.", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop&q=80" },
  { id: "sn-15", name: "Chicken Popcorn", category: "snacks", unit: "Box", isTBD: true, priceNotice: "Coming Soon / Price TBD", diet: "non-veg", description: "Bite-sized crispy fried chicken nuggets seasoned with peri-peri rub.", image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=600&auto=format&fit=crop&q=80" },

  // --- 16. CHAAT ---
  { id: "ct-1", name: "Single Tikki Chaat", category: "chaat", unit: "Plate", price: 40, diet: "veg", description: "Crisp pan-fried spiced potato patty served with tangy tamarind and cooling curd.", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&auto=format&fit=crop&q=80" },
  { id: "ct-2", name: "Double Tikki Chaat", category: "chaat", unit: "Plate", price: 70, diet: "veg", description: "Two crispy potato tikkis crowned with ragda peas, chutneys, and fresh coriander.", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&auto=format&fit=crop&q=80" },
  { id: "ct-3", name: "Pani Batasha", category: "chaat", unit: "5 pcs", price: 20, diet: "veg", description: "Crisp semolina spheres filled with spicy mint water, mashed potatoes, and chickpeas.", image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=600&auto=format&fit=crop&q=80" },
  { id: "ct-4", name: "Dahi Batasha", category: "chaat", unit: "Plate", price: 50, diet: "veg", description: "Batashas filled with sweetened whipped yogurt, sev, and sweet tamarind drizzle.", image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=600&auto=format&fit=crop&q=80" },
  { id: "ct-5", name: "Matar Chaat", category: "chaat", unit: "Plate", price: 45, diet: "veg", description: "Slow-simmered spiced white peas garnished with ginger juliennes, green chillies, and lemon.", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&auto=format&fit=crop&q=80" },
  { id: "ct-6", name: "Dahi Bada", category: "chaat", unit: "per pc", price: 60, diet: "veg", description: "Melt-in-mouth lentil dumpling soaked in sweet spiced curd and roasted cumin.", image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=600&auto=format&fit=crop&q=80" },
  { id: "ct-7", name: "Basket Chaat", category: "chaat", unit: "Plate", price: 150, diet: "veg", isSignature: true, description: "Signature Lucknowi edible fried potato basket loaded with sprouted lentils, curd, chutneys, and pomegranate.", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&auto=format&fit=crop&q=80" },

  // --- 17. COOKIES & BAKERY ---
  { id: "ck-b1", name: "Italian Kaju (Chanda Mama)", category: "cookies", unit: "Box", price250g: 400, price1kg: 1600, diet: "veg", description: "Crescent-shaped melt-in-mouth cashew butter cookies.", image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&auto=format&fit=crop&q=80" },
  { id: "ck-b2", name: "Butter Pista Stick", category: "cookies", unit: "Box", price250g: 400, price1kg: 1600, diet: "veg", description: "Crisp artisan butter baton cookies encrusted with crushed Iranian pistachios.", image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&auto=format&fit=crop&q=80" },
  { id: "ck-b3", name: "Butter Almond", category: "cookies", unit: "Box", price250g: 350, price1kg: 1400, diet: "veg", description: "Rich butter shortbread baked with roasted almond flakes.", image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&auto=format&fit=crop&q=80" },
  { id: "ck-b4", name: "Butter Overloaded Dry Fruit Cookies", category: "cookies", unit: "Box", price250g: 300, price1kg: 1200, diet: "veg", description: "Packed with premium cashews, almonds, and golden raisins.", image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&auto=format&fit=crop&q=80" },
  { id: "ck-b5", name: "Choco Chips Cookies", category: "cookies", unit: "Box", price250g: 220, price1kg: 880, diet: "veg", description: "Golden baked crunchy cookies loaded with semi-sweet chocolate morsels.", image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600&auto=format&fit=crop&q=80" },
  { id: "ck-b6", name: "Butter Zeera Cookies", category: "cookies", unit: "Box", price250g: 250, price1kg: 1000, diet: "veg", description: "Savoury and sweet butter cookies flavored with roasted cumin seeds.", image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&auto=format&fit=crop&q=80" },
  { id: "ck-b7", name: "Butter Kaju Salted", category: "cookies", unit: "Box", price250g: 300, price1kg: 1200, diet: "veg", description: "Delicate salted cashew butter shortbread.", image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&auto=format&fit=crop&q=80" },
  { id: "ck-b8", name: "Nan Khatai", category: "cookies", unit: "Box", price250g: 150, price1kg: 600, diet: "veg", description: "Traditional Indian cardamom-scented melt-in-mouth bakery biscuits.", image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&auto=format&fit=crop&q=80" },
  { id: "ck-b9", name: "Besan Nan Khatai", category: "cookies", unit: "Box", price250g: 200, price1kg: 800, diet: "veg", description: "Roasted gram flour and ghee biscuits with pistachio center.", image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&auto=format&fit=crop&q=80" },
  { id: "ck-b10", name: "Butter Ajwain", category: "cookies", unit: "Box", price250g: 250, price1kg: 1000, diet: "veg", description: "Crisp digestive bakery cookies infused with fragrant carom seeds.", image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&auto=format&fit=crop&q=80" },
  
  // Bakery TBD Items
  { id: "ck-tbd1", name: "Honey Oats Cookies", category: "cookies", unit: "Box", isTBD: true, priceNotice: "Coming Soon / Price TBD", diet: "veg", description: "Wholesome rolled oats and wildflower honey baked cookies.", image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600&auto=format&fit=crop&q=80" },
  { id: "ck-tbd2", name: "Choco Vanilla Cookies", category: "cookies", unit: "Box", isTBD: true, priceNotice: "Coming Soon / Price TBD", diet: "veg", description: "Swirled chocolate and vanilla pinwheel shortbread.", image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600&auto=format&fit=crop&q=80" },
  { id: "ck-tbd3", name: "Cake Rus", category: "cookies", unit: "Pack", isTBD: true, priceNotice: "Coming Soon / Price TBD", diet: "veg", description: "Twice-baked crispy sweetened artisan sponge cake toast.", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&auto=format&fit=crop&q=80" },
  { id: "ck-tbd4", name: "Coconut Cookies", category: "cookies", unit: "Box", isTBD: true, priceNotice: "Coming Soon / Price TBD", diet: "veg", description: "Baked cookies encrusted with toasted desiccated coconut.", image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&auto=format&fit=crop&q=80" },
  { id: "ck-tbd5", name: "Dry Brownie", category: "cookies", unit: "Piece", isTBD: true, priceNotice: "Coming Soon / Price TBD", diet: "veg", description: "Baked cocoa square with a crisp crust and fudgy interior.", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&auto=format&fit=crop&q=80" },
  { id: "ck-tbd6", name: "Walnut Brownie", category: "cookies", unit: "Piece", isTBD: true, priceNotice: "Coming Soon / Price TBD", diet: "veg", description: "Rich chocolate brownie packed with toasted Kashmiri walnuts.", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&auto=format&fit=crop&q=80" },
  { id: "ck-tbd7", name: "Dry Cake", category: "cookies", unit: "Loaf", isTBD: true, priceNotice: "Coming Soon / Price TBD", diet: "veg", description: "Classic tea-time loaf cake with candied fruits.", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&auto=format&fit=crop&q=80" },
  { id: "ck-tbd8", name: "Organo Stick", category: "cookies", unit: "Pack", isTBD: true, priceNotice: "Coming Soon / Price TBD", diet: "veg", description: "Crisp savoury breadstick baked with dried oregano and herbs.", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&auto=format&fit=crop&q=80" },
  { id: "ck-tbd9", name: "Garlic Toast", category: "cookies", unit: "Pack", isTBD: true, priceNotice: "Coming Soon / Price TBD", diet: "veg", description: "Twice-toasted artisan bread infused with garlic butter and parsley.", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&auto=format&fit=crop&q=80" },
  { id: "ck-tbd10", name: "Suji Toast", category: "cookies", unit: "Pack", isTBD: true, priceNotice: "Coming Soon / Price TBD", diet: "veg", description: "Crisp tea-time rusk made from premium semolina wheat.", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&auto=format&fit=crop&q=80" },
  { id: "ck-tbd11", name: "Elaichi Toast", category: "cookies", unit: "Pack", isTBD: true, priceNotice: "Coming Soon / Price TBD", diet: "veg", description: "Fragrant cardamom-infused crunchy tea rusk.", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&auto=format&fit=crop&q=80" },
  { id: "ck-tbd12", name: "Zeera Khaari", category: "cookies", unit: "Pack", isTBD: true, priceNotice: "Coming Soon / Price TBD", diet: "veg", description: "Flaky puff pastry biscuits topped with toasted cumin.", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&auto=format&fit=crop&q=80" },
  { id: "ck-tbd13", name: "Ajwain Khaari", category: "cookies", unit: "Pack", isTBD: true, priceNotice: "Coming Soon / Price TBD", diet: "veg", description: "Multi-layered savoury puff pastry with carom seeds.", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&auto=format&fit=crop&q=80" },

  // --- 18. ICE CREAM (Cone) — All Price TBD ---
  { id: "ic-1", name: "Vanilla Ice Cream", category: "ice-cream", unit: "Cone", isTBD: true, priceNotice: "Coming Soon / Price TBD", diet: "veg", description: "Creamy Madagascar vanilla bean ice cream in a waffle cone.", image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=600&auto=format&fit=crop&q=80" },
  { id: "ic-2", name: "Strawberry Ice Cream", category: "ice-cream", unit: "Cone", isTBD: true, priceNotice: "Coming Soon / Price TBD", diet: "veg", description: "Fresh farm strawberry scoop in a waffle cone.", image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=600&auto=format&fit=crop&q=80" },
  { id: "ic-3", name: "Mango Ice Cream", category: "ice-cream", unit: "Cone", isTBD: true, priceNotice: "Coming Soon / Price TBD", diet: "veg", description: "Pure Alphonso mango gelato scoop in crisp cone.", image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=600&auto=format&fit=crop&q=80" },
  { id: "ic-4", name: "Pineapple Ice Cream", category: "ice-cream", unit: "Cone", isTBD: true, priceNotice: "Coming Soon / Price TBD", diet: "veg", description: "Zesty tropical pineapple fruit cream scoop.", image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=600&auto=format&fit=crop&q=80" },
  { id: "ic-5", name: "Butterscotch Ice Cream", category: "ice-cream", unit: "Cone", isTBD: true, priceNotice: "Coming Soon / Price TBD", diet: "veg", description: "Rich butterscotch scoop with crunchy golden praline.", image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=600&auto=format&fit=crop&q=80" },
  { id: "ic-6", name: "Chocolate Almond Ice Cream", category: "ice-cream", unit: "Cone", isTBD: true, priceNotice: "Coming Soon / Price TBD", diet: "veg", description: "Dark chocolate gelato swirled with toasted almond slices.", image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&auto=format&fit=crop&q=80" },
  { id: "ic-7", name: "Kaju Kishmish Ice Cream", category: "ice-cream", unit: "Cone", isTBD: true, priceNotice: "Coming Soon / Price TBD", diet: "veg", description: "Rich cream blended with cashew nuts and sweet golden raisins.", image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=600&auto=format&fit=crop&q=80" },
  { id: "ic-8", name: "Pista Badaam Ice Cream", category: "ice-cream", unit: "Cone", isTBD: true, priceNotice: "Coming Soon / Price TBD", diet: "veg", description: "Traditional royal pistachios and almonds in sweet condensed milk.", image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=600&auto=format&fit=crop&q=80" },
  { id: "ic-9", name: "Almond Anjeer Ice Cream", category: "ice-cream", unit: "Cone", isTBD: true, priceNotice: "Coming Soon / Price TBD", diet: "veg", description: "Sun-dried wild figs and roasted almonds churned in fresh cream.", image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=600&auto=format&fit=crop&q=80" },
  { id: "ic-10", name: "TBF Lucknow Special Ice Cream", category: "ice-cream", unit: "Cone", isTBD: true, isSignature: true, priceNotice: "Coming Soon / Price TBD", diet: "veg", description: "Our exclusive royal rose and dry fruit infused city signature flavour.", image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=600&auto=format&fit=crop&q=80" },
  { id: "ic-11", name: "Blueberry Cheesecake Ice Cream", category: "ice-cream", unit: "Cone", isTBD: true, priceNotice: "Coming Soon / Price TBD", diet: "veg", description: "Real cream cheese ice cream with graham cracker crust and wild blueberry swirl.", image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=600&auto=format&fit=crop&q=80" },
  { id: "ic-12", name: "Kesar Pista Ice Cream", category: "ice-cream", unit: "Cone", isTBD: true, priceNotice: "Coming Soon / Price TBD", diet: "veg", description: "Kashmiri saffron threads and crushed pistachios in full-fat cream.", image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=600&auto=format&fit=crop&q=80" },
  { id: "ic-13", name: "Black Current Ice Cream", category: "ice-cream", unit: "Cone", isTBD: true, priceNotice: "Coming Soon / Price TBD", diet: "veg", description: "Tangy blackcurrant swirl with whole berry pieces.", image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=600&auto=format&fit=crop&q=80" },
  { id: "ic-14", name: "American Nuts Ice Cream", category: "ice-cream", unit: "Cone", isTBD: true, priceNotice: "Coming Soon / Price TBD", diet: "veg", description: "Loaded with chocolate chips, fruit jellies, and roasted mixed nuts.", image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&auto=format&fit=crop&q=80" },
  { id: "ic-15", name: "Bubble Gum Ice Cream", category: "ice-cream", unit: "Cone", isTBD: true, priceNotice: "Coming Soon / Price TBD", diet: "veg", description: "Fun, vibrant pastel blue and pink sweet nostalgic bubblegum swirl.", image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=600&auto=format&fit=crop&q=80" },
  { id: "ic-16", name: "Fruit Cocktail Ice Cream", category: "ice-cream", unit: "Cone", isTBD: true, priceNotice: "Coming Soon / Price TBD", diet: "veg", description: "Rich ice cream studded with candied cherries, pineapples, and fruits.", image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=600&auto=format&fit=crop&q=80" },
  { id: "ic-17", name: "Belgium Chocolate Ice Cream", category: "ice-cream", unit: "Cone", isTBD: true, priceNotice: "Coming Soon / Price TBD", diet: "veg", description: "Intense 70% dark Belgian cocoa churned with chocolate curls.", image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&auto=format&fit=crop&q=80" },
  { id: "ic-18", name: "Pista Kulfi", category: "ice-cream", unit: "Stick / Cup", isTBD: true, priceNotice: "Coming Soon / Price TBD", diet: "veg", description: "Slow-reduced rabri kulfi packed with pistachios, saffron, and cardamom.", image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=600&auto=format&fit=crop&q=80" }
];

const GALLERY_ITEMS = [
  {
    id: "gal-1",
    title: "Handcrafted Almond & Truffle Cakes",
    category: "cakes",
    image: "https://images.unsplash.com/photo-1535141192574-5d4897c13136?w=900&auto=format&fit=crop&q=80",
    caption: "Our signature celebration cakes made fresh daily with roasted Californian almonds."
  },
  {
    id: "gal-2",
    title: "Artisan Biscoff & Belgian Pastries",
    category: "pastries",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=900&auto=format&fit=crop&q=80",
    caption: "Decadent single-serve desserts layered with European speculoos and cocoa."
  },
  {
    id: "gal-3",
    title: "Crispy Kurkure & Steamed Momos",
    category: "savory",
    image: "https://images.unsplash.com/photo-1625398407796-82650a8c135f?w=900&auto=format&fit=crop&q=80",
    caption: "Piping hot crunchy kurkure momos served with fiery Lucknowi red chilli dip."
  },
  {
    id: "gal-4",
    title: "Creamy House-Crafted Pasta",
    category: "savory",
    image: "https://images.unsplash.com/photo-1621996346565-e3d5d628169e?w=900&auto=format&fit=crop&q=80",
    caption: "TBF Special Creamy Pasta tossed in aromatic herbs and melted parmesan."
  },
  {
    id: "gal-5",
    title: "Red Velvet Celebration Tier",
    category: "cakes",
    image: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?w=900&auto=format&fit=crop&q=80",
    caption: "Custom tiered red velvet wedding and birthday cakes crafted to order."
  },
  {
    id: "gal-6",
    title: "Cooling Mocktails & Crafted Coolers",
    category: "drinks",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=900&auto=format&fit=crop&q=80",
    caption: "Chilled Blue Lagoon and fresh mint mojitos for refreshing café moments."
  },
  {
    id: "gal-7",
    title: "Gourmet Artisan Burgers",
    category: "savory",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900&auto=format&fit=crop&q=80",
    caption: "Signature chicken and paneer cheese burgers served in toasted brioche buns."
  },
  {
    id: "gal-8",
    title: "Warm Bakery Ambience",
    category: "ambience",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=900&auto=format&fit=crop&q=80",
    caption: "A welcoming, sophisticated café space in Aliganj designed to relax and gather."
  },
  {
    id: "gal-9",
    title: "Artisan Cookies & Tea Bakes",
    category: "pastries",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=900&auto=format&fit=crop&q=80",
    caption: "Freshly baked butter kaju cookies, nan khatai, and crispy rusks."
  }
];

// Attach to window for global browser access
if (typeof window !== "undefined") {
  window.TBF_CONFIG = TBF_CONFIG;
  window.FEATURED_CATEGORIES = FEATURED_CATEGORIES;
  window.BEST_SELLERS = BEST_SELLERS;
  window.MENU_CATEGORIES = MENU_CATEGORIES;
  window.FULL_MENU_ITEMS = FULL_MENU_ITEMS;
  window.GALLERY_ITEMS = GALLERY_ITEMS;
}
