export const restaurants = [
  {
    id: "bistro-avenida",
    name: "Bistro Avenida",
    category: "Portuguesa",
    rating: 4.7,
    deliveryTime: "25-35 min",
    deliveryFee: 1.49,
    minimumOrder: 8,
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80",
    featured: true,
    menu: [
      {
        id: "bitoque",
        name: "Bitoque da Casa",
        description: "Vaca grelhada, ovo, batata frita e arroz.",
        price: 10.9,
        popular: true
      },
      {
        id: "bacalhau",
        name: "Bacalhau a Bras",
        description: "Bacalhau desfiado, batata palha, ovo e salsa.",
        price: 11.5,
        popular: false
      }
    ]
  },
  {
    id: "sushi-rio",
    name: "Sushi Rio",
    category: "Japonesa",
    rating: 4.8,
    deliveryTime: "35-45 min",
    deliveryFee: 2.49,
    minimumOrder: 14,
    image:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=900&q=80",
    featured: false,
    menu: [
      {
        id: "combo-salmon",
        name: "Combo Salmon",
        description: "18 pecas com nigiri, hosomaki e uramaki.",
        price: 16.9,
        popular: true
      },
      {
        id: "gyozas",
        name: "Gyozas",
        description: "Dumplings crocantes com molho ponzu.",
        price: 5.8,
        popular: false
      }
    ]
  },
  {
    id: "pizza-forno",
    name: "Pizza Forno",
    category: "Italiana",
    rating: 4.5,
    deliveryTime: "20-30 min",
    deliveryFee: 0.99,
    minimumOrder: 9,
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80",
    featured: true,
    menu: [
      {
        id: "margherita",
        name: "Pizza Margherita",
        description: "Tomate, mozzarella, manjericao e azeite.",
        price: 9.4,
        popular: true
      },
      {
        id: "diavola",
        name: "Pizza Diavola",
        description: "Mozzarella, pepperoni picante e oregano.",
        price: 11.2,
        popular: false
      }
    ]
  }
];

export const orders = [
  {
    id: "ORD-1024",
    restaurantName: "Bistro Avenida",
    status: "A preparar",
    total: 12.39,
    eta: "28 min"
  }
];
