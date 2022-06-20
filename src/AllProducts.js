let allProducts = [
  {
    category: "men's clothing",
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    id: 1,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    price: 109,
    count: 120,
    rate: 3.9,
  },
  {
    category: "men's clothing",
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    id: 2,
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    price: 22,
    count: 259,
    rate: 4.1,
  },
  {
    category: "men's clothing",
    title: "Mens Cotton Jacket",
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    id: 3,
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    price: 55,
    count: 500,
    rate: 4,
  },
  {
    category: "men's clothing",
    title: "Mens Casual Slim Fit",
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    id: 4,
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    price: 15,
    count: 430,
    rate: 4.3,
  },
  {
    category: "jewelery",
    title:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    id: 5,
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    price: 695,
    count: 400,
    rate: 3.5,
  },
  {
    category: "jewelery",
    title: "Solid Gold Petite Micropave",
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    id: 6,
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    price: 168,
    count: 70,
    rate: 4.5,
  },
  {
    category: "jewelery",
    title: "White Gold Plated Princess",
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    id: 7,
    image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    price: 9,
    count: 400,
    rate: 4.4,
  },
  {
    category: "jewelery",
    title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    id: 8,
    image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    price: 10,
    count: 100,
    rate: 4,
  },
  {
    category: "electronics",
    title: "WD 2TB Elements Portable External Hard Drive - USB 3.0",
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    id: 9,
    image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    price: 64,
    count: 203,
    rate: 3,
  },
  {
    category: "electronics",
    title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    id: 10,
    image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
    price: 109,
    count: 592,
    rate: 2.5,
  },
  {
    category: "electronics",
    title:
      "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    id: 11,
    image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
    price: 109,
    count: 700,
    rate: 2,
  },
  {
    category: "electronics",
    title:
      "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    id: 12,
    image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
    price: 114,
    count: 800,
    rate: 5,
  },
  {
    category: "electronics",
    title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    id: 13,
    image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
    price: 599,
    count: 150,
    rate: 5,
  },
  {
    category: "electronics",
    title:
      "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED",
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    id: 14,
    image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
    price: 999,
    count: 250,
    rate: 4.7,
  },
  {
    category: "women's clothing",
    title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    id: 15,
    image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    price: 56,
    count: 450,
    rate: 3.9,
  },
  {
    category: "women's clothing",
    title:
      "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    id: 16,
    image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
    price: 29,
    count: 380,
    rate: 3,
  },
  {
    category: "women's clothing",
    title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    id: 17,
    image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    price: 39,
    count: 470,
    rate: 4,
  },
  {
    category: "women's clothing",
    title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    id: 18,
    image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
    price: 9,
    count: 566,
    rate: 5,
  },
  {
    category: "women's clothing",
    title: "Opna Women's Short Sleeve Moisture",
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    id: 19,
    image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
    price: 7,
    count: 624,
    rate: 2.5,
  },
  {
    category: "women's clothing",
    title: "DANVOUY Womens T Shirt Casual Cotton Short",
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    id: 20,
    image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
    price: 12,
    count: 720,
    rate: 4.9,
  },
];
export { allProducts };
