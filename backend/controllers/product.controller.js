import Product from "../models/Product.js";

export const seedProducts = async (req, res) => {
  await Product.deleteMany();

  await Product.insertMany([
    {
      name: "Cotton Innerwear",
      category: "Innerwear",
      price: 499,
      description: "Soft cotton innerwear",
      image: "https://m.media-amazon.com/images/I/61LcUP6kjkL._SX679_.jpg"
    },
    {
      name: "Premium Vest",
      category: "Innerwear",
      price: 699,
      description: "Premium quality vest",
      image: "https://m.media-amazon.com/images/I/61SDUvsawXL._SY741_.jpg"
    },
    {
      name: "Boxer Shorts",
      category: "Innerwear",
      price: 399,
      description: "Comfortable boxer shorts",
      image: "https://img.joomcdn.net/ea00123c76796d241a1280a2dffb2b161e0ed970_original.jpeg"
    },
    {
      name: "Thermal Wear",
      category: "Innerwear",
      price: 899,
      description: "Warm thermal wear",
      image: "https://ttbazaar.com/cdn/shop/files/21_2511733a-93eb-4421-93d9-bb2c562f4c5d_1800x1800.jpg?v=1759986585"
    },
    {
      name: "Sports Innerwear",
      category: "Innerwear",
      price: 599,
      description: "Breathable sports innerwear",
      image: "https://www.technosport.in/cdn/shop/files/P798IronGrey_1.jpg?v=1738840962&width=493"
    },
    {
      name: "Sleeveless Vest",
      category: "Innerwear",
      price: 349,
      description: "Light sleeveless vest",
      image: "https://friskers.in/cdn/shop/files/MC2001_7.jpg?v=1683376464&width=713"
    }
  ]);

  res.json({ message: "Products seeded" });
};

export const getProducts = async (req, res) => {
  const { search, sort, category } = req.query;
  let filter = {};

  if (category) filter.category = category;
  if (search) filter.name = { $regex: search, $options: "i" };

  let query = Product.find(filter);
  if (sort === "low") query.sort({ price: 1 });
  if (sort === "high") query.sort({ price: -1 });

  res.json(await query);
};
