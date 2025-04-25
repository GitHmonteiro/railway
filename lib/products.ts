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
    name: "Combo Pop - 90 Peças",
    description: `
  Sashimi:\n
  - 5x Salmão Ice (salmão enrolado no cream cheese)\n
  Hossomaki:\n
  - 10x Philadelphia (salmão e cream cheese)\n
  - 6x Kanicroc (empanado de kani, cream cheese e cebolinha)\n
  - 10x Fishroll (peixe, cream cheese e alho poró picadinho)\n
  - 4x Fishroll Pepper (peixe, cream cheese e pimenta biquinho)\n
  Uramaki:\n
  - 10x Skin Poró (pele de salmão, cream cheese e alho poró frito)\n
  - 10x Uramaki Fishcroc (empanado de peixe e cream cheese)\n
  - 5x Uramaki Fishchilli (peixe, cream cheese, geleia de pimenta)\n
  Hot Rolls:\n
  - 20x Hot Philadelphia (salmão e cream cheese)\n
  - 10x Hot Crock (peixe, cream cheese)\n
  Acompanha:\n
  - 100ml de shoyu (02 garrafinhas)`,
    price: 45.00,
    image: "/images/produto1.jpg",
    media: {
      type: "local",
      url: "/videos/produto1.mp4",
    },
    ingredients: ["Arroz japonês", "Salmão fresco", "Cream cheese", "Nori", "Pepino", "Gergelim"],
    additionals: [
      { id: 1, name: "Wasabi extra", price: 3.5 },
      { id: 2, name: "Gengibre extra", price: 2.5 },
      { id: 3, name: "Molho tarê", price: 4.0 },
    ],
    accompaniments: [
      { id: 1, name: "Molho shoyu", included: true },
      { id: 2, name: "Wasabi", included: true },
      { id: 3, name: "Gengibre", included: true },
      { id: 4, name: "Hashi", included: true },
    ],
  },
  {
    id: 2,
    name: "Combo Executivo - 50 peças",
    description:
      "Sashimis - Sashimi de Salmão (5) e Sashimi de Salmão Ice (5)\n" +
      "Uramakis - Salmão Skin (5), Skin Poró (5) e Peteroll (5)\n" +
      "Hosomakis - Philadelphia (10) e Shakeroll (5)\n" +
      "Hot Rolls - Philadelphia (10)\n" +
      "Acompanha 50ml de shoyu. (01 garrafinha)",
    price: 25.00,
    image: "/images/produto2.jpg",
    // Example local video
    media: {
      type: "local",
      url: "/videos/produto2.mp4"",
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
      { id: 1, name: "Cream cheese extra", price: 3.0 },
      { id: 2, name: "Salmão extra", price: 6.0 },
      { id: 3, name: "Raspas de limão", price: 1.5 }
    ],
    accompaniments: [
      { id: 1, name: "Molho shoyu", included: true },
      { id: 2, name: "Wasabi", included: true },
      { id: 3, name: "Gengibre", included: true }
    ]
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
      { id: 1, name: "Molho tarê extra", price: 4.0 },
      { id: 2, name: "Cream cheese extra", price: 3.0 },
      { id: 3, name: "Porção de batata palha", price: 5.5 }
    ],
    accompaniments: [
      { id: 1, name: "Molho shoyu", included: true },
      { id: 2, name: "Molho agridoce", included: true }
    ]
  },  
  {
    id: 4,
    name: "Combo Executivo - 100 peças",
    description:
      "Sashimis - Sashimi de Salmão (10) e Sashimi de Salmão Ice (10)\n" +
      "Uramakis - Salmão Skin (10), Skin Poró (10) e Peteroll (10)\n" +
      "Hosomakis - Philadelphia (20) e Shakeroll (10)\n" +
      "Hot Rolls - Philadelphia (20)\n" +
      "Acompanha 100ml de shoyu. (02 garrafinhas)",
    price: 50.00,
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
      { id: 1, name: "Camarão extra", price: 7.0 },
      { id: 2, name: "Abacate extra", price: 3.5 },
      { id: 3, name: "Molho especial", price: 4.5 }
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
      { id: 1, name: "Porção extra (5 fatias)", price: 15.0 },
      { id: 2, name: "Molho ponzu extra", price: 4.0 },
      { id: 3, name: "Azeite trufado", price: 6.5 }
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
      { id: 1, name: "Ovas extra", price: 8.0 },
      { id: 2, name: "Molho especial", price: 4.0 }
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
      { id: 1, name: "Carne extra", price: 10.0 },
      { id: 2, name: "Legumes extras", price: 5.0 },
      { id: 3, name: "Molho extra", price: 3.5 }
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
      { id: 1, name: "Porção extra (3 unidades)", price: 10.0 },
      { id: 2, name: "Molho agridoce", price: 3.5 }
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
      { id: 1, name: "Salmão extra", price: 8.0 },
      { id: 2, name: "Abacate extra", price: 3.5 },
      { id: 3, name: "Cream cheese", price: 3.0 }
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
      { id: 1, name: "Cream cheese vegano", price: 4.0 },
      { id: 2, name: "Molho tarê vegano", price: 4.0 }
    ],
    accompaniments: [
      { id: 1, name: "Molho shoyu", included: true },
      { id: 2, name: "Wasabi", included: true },
      { id: 3, name: "Gengibre", included: true },
      { id: 4, name: "Hashi", included: true }
    ]
  }  
]
