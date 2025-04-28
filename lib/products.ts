export interface Product {
  id: number
  name: string
  description: string
  price: number
  image: string
  // Media options
  media?: {
    type: "instagram" | "local"
    url: string
  }
  ingredients: string[]
  additionals: Additional[]
  accompaniments: Accompaniment[]
}

export interface Additional {
  id: number
  name: string
  price: number
}

export interface Accompaniment {
  id: number
  name: string
  included: boolean
  price?: number
}

export const products: Product[] = [
  {
    id: 1,
    name: "Seu 1º Pedido - Entrega Grátis",
    description:
      "Monte seu combo de boas vindas, a taxa de entrega não se aplica no 1º pedido",
    price: 0.00,
    image: "/images/produto2.jpg",
    // Example local video
    media: {
      type: "local",
      url: "/videos/produto2.mp4",
    },
    ingredients: [
      "Arroz japonês",
      "Salmão fresco",
      "Cream cheese",
      "Cebolinha",
      "Limão",
      "Nori"
    ],
    additionals: [
      { id: 1, name: "Sashimi de Salmão (5)", price: 4.0 },
      { id: 2, name: "Sashimi de Salmão Ice (5)", price: 6.0 },
      { id: 3, name: "Salmão Skin (5)", price: 4.0 },
      { id: 4, name: "Skin Poró (5)", price: 4.0 },
      { id: 5, name: "Peteroll (5)", price: 5.0 },
      { id: 7, name: "Philadelphia (5)", price: 4.0 },
      { id: 8, name: "Shakeroll (5)", price: 4.0 },
      { id: 9, name: "Hot Philadelphia (5)", price: 5.0 },
    ],
    accompaniments: [
      { id: 1, name: "Molho shoyu", included: true },
      { id: 2, name: "Wasabi", included: true },
      { id: 3, name: "Gengibre", included: true }
    ]
  },
  {
    id: 2,
    name: "Combo presente - 16 Peças",
    description: `
    16 peças já inclusas na promoção - \n

  Sashimi:\n 
  - Sashimi de Salmão (2)\n
  - Sashimi de Salmão Ice (2) \n
  
  Uramakis: 
  - Salmão Skin (2) \n 
  - Skin Roll (2) \n

  Hossomaki:\n
  - Philadelphia (2) \n 
  - Shakemaki (2) \n 
  
  Hot Rolls \n 
  - Hot Philadelphia (4) \n
  Acompanha:\n
  - 100ml de shoyu (02 garrafinhas)`,
    price: 0,
    image: "/images/combo-16 peças.webp",
    media: {
      type: "local",
      url: "/videos/combo-16p.mp4",
    },
    ingredients: ["Arroz japonês", "Salmão fresco", "Cream cheese", "Nori", "Pepino", "Gergelim"],
    additionals: [
      { id: 1, name: "Sashimi de Salmão - 5", price: 5 },
      { id: 2, name: "Sashimi de Salmão Ice - 5 ", price: 6 },
      { id: 3, name: "Salmão Skin - 5", price: 4.0 },
      { id: 4, name: "Skin Roll - 5", price: 5 },
      { id: 5, name: "Philadelphia - 5", price: 5 },
      { id: 6, name: "Shakemaki - 5", price: 4 },
      { id: 7, name: "Hot Rolls - 5", price: 5 },
      { id: 8, name: "Hot - 5", price: 5 },
      { id: 9, name: "Uramakis - Nutella - 5", price: 6.0 },
      { id: 10, name: "Romeu e Julietta - 5", price: 6.0 },
      { id: 11, name: "Molho tarê extra", price: 4.0 },
      { id: 12, name: "Cream cheese extra", price: 5.0 },
    ],
    accompaniments: [
      { id: 1, name: "Molho shoyu", included: true },
      { id: 2, name: "Wasabi", included: true },
      { id: 3, name: "Gengibre", included: true },
      { id: 4, name: "Hashi", included: true },
    ],
  },
  {
    id: 3,
    name: "Combo Executivo Makimonos - 100 peças",
    description:
      "Uramakis - Salmão Skin (10), Skin Poró (10) e Peteroll (20)\n" +
      "Hosomakis - Philadelphia (20) e Shakeroll (10)\n" +
      "Hot Rolls - Philadelphia (30)\n" +
      "Acompanha 100ml de shoyu. (02 garrafinhas)",
    price: 50.00,
    image: "/images/produto3.jpg",
    media: {
      type: "local",
      url: "/videos/produto3.mp4",
    },
    ingredients: [
      "Arroz japonês",
      "Salmão fresco",
      "Cream cheese",
      "Farinha panko",
      "Molho tarê",
      "Cebolinha"
    ],
    additionals: [
      { id: 1, name: "Sashimi de Salmão - 5", price: 5 },
      { id: 2, name: "Sashimi de Salmão Ice - 5 ", price: 6 },
      { id: 3, name: "Salmão Skin - 5", price: 4.0 },
      { id: 4, name: "Skin Roll - 5", price: 5 },
      { id: 5, name: "Philadelphia - 5", price: 5 },
      { id: 6, name: "Shakemaki - 5", price: 4 },
      { id: 7, name: "Hot Rolls - 5", price: 5 },
      { id: 8, name: "Hot - 5", price: 5 },
      { id: 9, name: "Uramakis - Nutella - 5", price: 6.0 },
      { id: 10, name: "Romeu e Julietta - 5", price: 6.0 },
      { id: 11, name: "Molho tarê extra", price: 4.0 },
      { id: 12, name: "Cream cheese extra", price: 5.0 },
    ],
    accompaniments: [
      { id: 1, name: "Molho shoyu", included: true },
      { id: 2, name: "Molho agridoce", included: true }
    ]
  },  
  {
    id: 4,
    name: "Combo Executivo - 75 peças",
    description:
      "Sashimis - Sashimi de Salmão (10) e Sashimi de Salmão Ice (10)\n" +
      "Uramakis - Salmão Skin (10), Skin Poró (10) e Peteroll (10)\n" +
      "Hosomakis - Philadelphia (5) e Shakeroll (10)\n" +
      "Hot Rolls - Philadelphia (10)\n" +
      "Acompanha 100ml de shoyu. (02 garrafinhas)",
    price: 37.50,
    image: "/images/produto4.jpg",
    media: {
      type: "local",
      url: "/videos/produto1.mp4",
    },
    ingredients: [
      "Arroz japonês",
      "Camarão empanado",
      "Cream cheese",
      "Abacate",
      "Gergelim",
      "Nori"
    ],
    additionals: [
      { id: 1, name: "Sashimi de Salmão - 5", price: 5 },
      { id: 2, name: "Sashimi de Salmão Ice - 5 ", price: 6 },
      { id: 3, name: "Salmão Skin - 5", price: 4.0 },
      { id: 4, name: "Skin Roll - 5", price: 5 },
      { id: 5, name: "Philadelphia - 5", price: 5 },
      { id: 6, name: "Shakemaki - 5", price: 4 },
      { id: 7, name: "Hot Rolls - 5", price: 5 },
      { id: 8, name: "Hot - 5", price: 5 },
      { id: 9, name: "Uramakis - Nutella - 5", price: 6.0 },
      { id: 10, name: "Romeu e Julietta - 5", price: 6.0 },
      { id: 11, name: "Molho tarê extra", price: 4.0 },
      { id: 12, name: "Cream cheese extra", price: 5.0 },
    ],
    accompaniments: [
      { id: 1, name: "Molho shoyu", included: true },
      { id: 2, name: "Wasabi", included: true },
      { id: 3, name: "Gengibre", included: true }
    ]
  },  
  {
    id: 5,
    name: "Combo - 60 peças",
    description: "Sashimis - Sashimi salmão (6), Sashimi salmão ice (6)\n" +
                 "Hosomaki - Philadélphia (9), Shakemaki (9), Salmão skin (6), Skin roll (6), Kanicheese (6)\n" +
                 "Hot Rolls - Hot philadélphia (12)\n" +
                 "Acompanha 50ml de shoyu (01 garrafinha)",
    price: 59.90,
    image: "/images/produto5.jpg",
    ingredients: [
      "Salmão fresco premium",
      "Molho ponzu",
      "Limão",
      "Cebolinha"
    ],
    additionals: [
      { id: 1, name: "Sashimi de Salmão - 5", price: 5 },
      { id: 2, name: "Sashimi de Salmão Ice - 5 ", price: 6 },
      { id: 3, name: "Salmão Skin - 5", price: 4.0 },
      { id: 4, name: "Skin Roll - 5", price: 5 },
      { id: 5, name: "Philadelphia - 5", price: 5 },
      { id: 6, name: "Shakemaki - 5", price: 4 },
      { id: 7, name: "Hot Rolls - 5", price: 5 },
      { id: 8, name: "Hot - 5", price: 5 },
      { id: 9, name: "Uramakis - Nutella - 5", price: 6.0 },
      { id: 10, name: "Romeu e Julietta - 5", price: 6.0 },
      { id: 11, name: "Molho tarê extra", price: 4.0 },
      { id: 12, name: "Cream cheese extra", price: 5.0 },
    ],
    accompaniments: [
      { id: 1, name: "Molho shoyu", included: true },
      { id: 2, name: "Wasabi", included: true },
      { id: 3, name: "Gengibre", included: true }
    ]
  },  
  {
    id: 6,
    name: "Combo Hot Variados - 50 Peças",
    description: "Hot Rolls - Philadelphia (20), Hot Romeu e Julieta (10), Haru Hot (10) e Ebi Hot (10).\n" +
                 "Acompanha 50ml de shoyu (01 garrafinha)",
    price: 49.90,
    image: "/images/produto6.jpg",
    ingredients: [
      "Arroz japonês",
      "Ovas de salmão",
      "Nori",
      "Cebolinha"
    ],
    additionals: [
      { id: 1, name: "Sashimi de Salmão - 5", price: 5 },
      { id: 2, name: "Sashimi de Salmão Ice - 5 ", price: 6 },
      { id: 3, name: "Salmão Skin - 5", price: 4.0 },
      { id: 4, name: "Skin Roll - 5", price: 5 },
      { id: 5, name: "Philadelphia - 5", price: 5 },
      { id: 6, name: "Shakemaki - 5", price: 4 },
      { id: 7, name: "Hot Rolls - 5", price: 5 },
      { id: 8, name: "Hot - 5", price: 5 },
      { id: 9, name: "Uramakis - Nutella - 5", price: 6.0 },
      { id: 10, name: "Romeu e Julietta - 5", price: 6.0 },
      { id: 11, name: "Molho tarê extra", price: 4.0 },
      { id: 12, name: "Cream cheese extra", price: 5.0 },
    ],
    accompaniments: [
      { id: 1, name: "Molho shoyu", included: true },
      { id: 2, name: "Wasabi", included: true },
      { id: 3, name: "Gengibre", included: true }
    ]
  },
  {
    id: 7,
    name: "Combo Especial - 100 peças",
    description: "Sashimi: 10 Sashimi de Salmão e 10 Sashimi de Salmão Ice.\n" +
                 "- Uramaki: 10 Salmão Skin, 10 Skin Poró e 10 Uramaki Philadelphia.\n" +
                 "- Hossomaki: 10 Philadelphia e 10 Shakeroll.\n" +
                 "- Hot Roll: 20 Hot Philadelphia e 10 Hot Poró.\n" +
                 "100ml de shoyu (02 garrafinhas)",
    price: 109.90,
    image: "/images/produto7.jpg",
    ingredients: [
      "Macarrão yakisoba",
      "Filé mignon",
      "Brócolis",
      "Cenoura",
      "Repolho",
      "Champignon",
      "Molho especial"
    ],
    additionals: [
      { id: 1, name: "Sashimi de Salmão - 5", price: 5 },
      { id: 2, name: "Sashimi de Salmão Ice - 5 ", price: 6 },
      { id: 3, name: "Salmão Skin - 5", price: 4.0 },
      { id: 4, name: "Skin Roll - 5", price: 5 },
      { id: 5, name: "Philadelphia - 5", price: 5 },
      { id: 6, name: "Shakemaki - 5", price: 4 },
      { id: 7, name: "Hot Rolls - 5", price: 5 },
      { id: 8, name: "Hot - 5", price: 5 },
      { id: 9, name: "Uramakis - Nutella - 5", price: 6.0 },
      { id: 10, name: "Romeu e Julietta - 5", price: 6.0 },
      { id: 11, name: "Molho tarê extra", price: 4.0 },
      { id: 12, name: "Cream cheese extra", price: 5.0 },
    ],
    accompaniments: [
      { id: 1, name: "Hashi", included: true },
      { id: 2, name: "Molho shoyu", included: true }
    ]
  },  
  {
    id: 8,
    name: "Combo Gourmet - 100 peças",
    description: "Sashimis - Sashimi de Salmão (8) e Sashimi de Salmão Ice (8)\n" +
                 "Niguiris - Niguiri de Salmão (4) e Niguiri de Camarão (4)\n" +
                 "Uramakis - Ebi Maki (8), Makichilli Roll (8), Skin Roll (8) e Duplomaki (4)\n" +
                 "Hosomakis - Philadelphia (8)\n" +
                 "Hot Rolls - Hot Philadelphia (16) e Haru Hot (4)\n" +
                 "Acompanha 100ml de shoyu (02 garrafinhas)",
    price: 109.90,
    image: "/images/produto8.jpg",
    ingredients: [
      "Massa de gyoza",
      "Carne suína",
      "Repolho",
      "Cebolinha",
      "Gengibre",
      "Alho"
    ],
    additionals: [
      { id: 1, name: "Sashimi de Salmão - 5", price: 5 },
      { id: 2, name: "Sashimi de Salmão Ice - 5 ", price: 6 },
      { id: 3, name: "Salmão Skin - 5", price: 4.0 },
      { id: 4, name: "Skin Roll - 5", price: 5 },
      { id: 5, name: "Philadelphia - 5", price: 5 },
      { id: 6, name: "Shakemaki - 5", price: 4 },
      { id: 7, name: "Hot Rolls - 5", price: 5 },
      { id: 8, name: "Hot - 5", price: 5 },
      { id: 9, name: "Uramakis - Nutella - 5", price: 6.0 },
      { id: 10, name: "Romeu e Julietta - 5", price: 6.0 },
      { id: 11, name: "Molho tarê extra", price: 4.0 },
      { id: 12, name: "Cream cheese extra", price: 5.0 },
    ],
    accompaniments: [
      { id: 1, name: "Molho especial para gyoza", included: true }
    ]
  },  
  {
    id: 9,
    name: "Combo Gourmet - 80 peças",
    description: "Sashimis - Sashimi de Salmão (4) e Sashimi de Salmão Ice (4)\n" +
                 "Niguiris - Niguiri de Salmão (2) e Niguiri de Camarão (2)\n" +
                 "Uramakis - Ebi Maki (4), Makichilli Roll (4), Skin Roll (4) e Duplomaki (2)\n" +
                 "Hosomakis - Philadelphia (4)\n" +
                 "Hot Rolls - Hot Philadelphia (8) e Haru Hot (2)\n" +
                 "Acompanha 50ml de shoyu (01 garrafinha)",
    price: 89.90,
    image: "/images/produto9.jpg",
    ingredients: [
      "Arroz japonês",
      "Salmão fresco",
      "Manga",
      "Pepino",
      "Abacate",
      "Cebolinha",
      "Gergelim",
      "Molho especial"
    ],
    additionals: [
      { id: 1, name: "Sashimi de Salmão - 5", price: 5 },
      { id: 2, name: "Sashimi de Salmão Ice - 5 ", price: 6 },
      { id: 3, name: "Salmão Skin - 5", price: 4.0 },
      { id: 4, name: "Skin Roll - 5", price: 5 },
      { id: 5, name: "Philadelphia - 5", price: 5 },
      { id: 6, name: "Shakemaki - 5", price: 4 },
      { id: 7, name: "Hot Rolls - 5", price: 5 },
      { id: 8, name: "Hot - 5", price: 5 },
      { id: 9, name: "Uramakis - Nutella - 5", price: 6.0 },
      { id: 10, name: "Romeu e Julietta - 5", price: 6.0 },
      { id: 11, name: "Molho tarê extra", price: 4.0 },
      { id: 12, name: "Cream cheese extra", price: 5.0 },
    ],
    accompaniments: [
      { id: 1, name: "Molho shoyu", included: true },
      { id: 2, name: "Hashi", included: true }
    ]
  },
  {
    id: 10,
    name: "Combo Gourmet - 40 peças",
    description: "Combinado vegetariano com 15 peças, incluindo uramaki de pepino,\n" +
                 "hossomaki de manga e nigiri de abacate.",
    price: 59.90,
    image: "/images/produto10.jpg",
    ingredients: [
      "Arroz japonês",
      "Pepino",
      "Manga",
      "Abacate",
      "Cenoura",
      "Nori",
      "Gergelim"
    ],
    additionals: [
      { id: 1, name: "Sashimi de Salmão - 5", price: 5 },
      { id: 2, name: "Sashimi de Salmão Ice - 5 ", price: 6 },
      { id: 3, name: "Salmão Skin - 5", price: 4.0 },
      { id: 4, name: "Skin Roll - 5", price: 5 },
      { id: 5, name: "Philadelphia - 5", price: 5 },
      { id: 6, name: "Shakemaki - 5", price: 4 },
      { id: 7, name: "Hot Rolls - 5", price: 5 },
      { id: 8, name: "Hot - 5", price: 5 },
      { id: 9, name: "Uramakis - Nutella - 5", price: 6.0 },
      { id: 10, name: "Romeu e Julietta - 5", price: 6.0 },
      { id: 11, name: "Molho tarê extra", price: 4.0 },
      { id: 12, name: "Cream cheese extra", price: 5.0 },
    ],
    accompaniments: [
      { id: 1, name: "Molho shoyu", included: true },
      { id: 2, name: "Wasabi", included: true },
      { id: 3, name: "Gengibre", included: true },
      { id: 4, name: "Hashi", included: true }
    ]
  }  
]
