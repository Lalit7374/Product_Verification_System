// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const bcrypt = require("bcrypt");

// const app = express();
// const PORT = 5000;
// const MONGO_URL = "mongodb://127.0.0.1:27017/login";

// // Middlewares
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // MongoDB Connection
// mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("✅ MongoDB connected"))
//   .catch((err) => console.error("❌ MongoDB connection failed:", err));

// // User Schema
// const userSchema = new mongoose.Schema({
//   firstName: String,
//   lastName: String,
//   email: { type: String, unique: true },
//   userName: { type: String, unique: true },
//   password: String,
// });

// const User = mongoose.model("User", userSchema);
// const productSchema = new mongoose.Schema({
//   productId: { type: String, unique: true },
//   name: String,
//   brand: String,
//   price: Number,
//   manufacturer: String,
//   seller: String,
//   consumer: String,
//   isVerified: { type: Boolean, default: false }
// });

// const Product = mongoose.model("Product", productSchema);
// // ✅ Add Product Route
// app.post("/product-add1", async (req, res) => {
//   try {
//     const {
//       productSN,
//       productName,
//       productBrand,
//       productPrice,
//       manufacturerID
//     } = req.body;

//     const exists = await Product.findOne({ productId: productSN });
//     if (exists) {
//       return res.status(409).json({ success: false, message: "❌ Product already exists" });
//     }

//     const newProduct = new Product({
//       productId: productSN,
//       name: productName,
//       brand: productBrand,
//       price: productPrice,
//       manufacturer: manufacturerID
//     });

//     await newProduct.save();
//     res.status(201).json({ success: true, message: "✅ Product added successfully", product: newProduct });

//   } catch (err) {
//     console.error("Error in /product/add:", err.message);
//     res.status(500).json({ success: false, message: "❌ Failed to add product", error: err.message });
//   }
// });

// // ROUTES

// // Get all users (for testing)
// app.get("/", async (req, res) => {
//   try {
//     const users = await User.find();
//     res.json(users);
//   } catch (err) {
//     res.status(500).json({ message: "Error fetching users" });
//   }
// });

// // Register route
// app.post("/user/register", async (req, res) => {
//   try {
//     const { firstName, lastName, email, password, userName } = req.body;

//     // Check if user already exists
//     const existingUser = await User.findOne({ $or: [{ email }, { userName }] });
//     if (existingUser) {
//       return res.status(409).json({ message: "User already exists" });
//     }

//     // Hash password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Save user
//     const newUser = new User({
//       firstName,
//       lastName,
//       email,
//       userName,
//       password: hashedPassword,
//     });

//     await newUser.save();
//     res.status(201).json({ message: "✅ Registration successful" });
//   } catch (err) {
//     res.status(500).json({ message: "❌ Registration failed", error: err.message });
//   }
// });

// // Login route
// app.post("/user/login", async (req, res) => {
//   try {
//     const { userNameorEmail, password } = req.body;

//     // Find user by username or email
//     const user = await User.findOne({
//       $or: [{ userName: userNameorEmail }, { email: userNameorEmail }],
//     });

//     if (!user) {
//       return res.status(404).json({ message: "❌ User not found" });
//     }

//     // Compare password
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(401).json({ message: "❌ Incorrect password" });
//     }

//     res.status(200).json({ message: "✅ Login successful" });
//   } catch (err) {
//     res.status(500).json({ message: "❌ Login failed", error: err.message });
//   }
// });
// const sellerSchema = new mongoose.Schema({
//   SellerName: String,
//   SellerBrand: String,
//   SellerCode: String,
//   SellerPhoneNumber: String,
//   SellerManager: String,
//   SellerAddress: String,
//   ManufacturerId: String
// });

// const Seller = mongoose.model("Seller", sellerSchema);

// // Add Seller Route
// app.post("/api/sellers", async (req, res) => {
//   try {
//     const seller = new Seller(req.body);
//     await seller.save();
//     res.status(201).json({ message: "Seller added successfully" });
//   } catch (err) {
//     console.error("Error saving seller:", err);
//     res.status(500).json({ message: "Error adding seller" });
//   }
// });
// const soldProductSchema = new mongoose.Schema({
//   productSN: { type: String, required: true },
//   sellerCode: { type: String, required: true },
//   soldAt: { type: Date, default: Date.now }
// });

// const SoldProduct = mongoose.model('SoldProduct', soldProductSchema);

// // API Route
// app.post('/api/sell-product', async (req, res) => {
//   const { productSN, sellerCode } = req.body;

//   if (!productSN || !sellerCode) {
//     return res.status(400).json({ success: false, message: 'Missing fields' });
//   }

//   try {
//     const newSale = new SoldProduct({ productSN, sellerCode });
//     await newSale.save();
//     res.json({ success: true, message: 'Product sold and saved' });
//   } catch (err) {
//     console.error('Sell error:', err);
//     res.status(500).json({ success: false, message: 'Server error' });
//   }
// });
// // GET products sold by a specific seller
// app.get('/api/seller-products', async (req, res) => {
//   const { sellerCode } = req.query;

//   if (!sellerCode) {
//     return res.status(400).json({ message: "Seller code is required" });
//   }

//   try {
//     // Step 1: Find all sold product SNs for the given seller
//     const soldRecords = await SoldProduct.find({ sellerCode });

//     if (soldRecords.length === 0) {
//       return res.status(404).json({ message: "No products found for this seller" });
//     }

//     const productSNs = soldRecords.map((sale) => sale.productSN);

//     // Step 2: Fetch full product details from Product collection
//     const products = await Product.find({ productId: { $in: productSNs } });

//     // Step 3: Get seller address
//     const seller = await Seller.findOne({ SellerCode: sellerCode });

//     res.json({
//       products,
//       address: seller?.SellerAddress || '',
//     });
//   } catch (err) {
//     console.error("Error fetching seller products:", err);
//     res.status(500).json({ message: "Server error fetching products" });
//   }
// });


// app.post('/api/query-products', async (req, res) => {
//   const { sellerCode } = req.body;

//   if (!sellerCode) {
//     return res.status(400).json({ message: "Seller code is required" });
//   }

//   try {
//     // Step 1: Get all sold products for this seller
//     const soldRecords = await SoldProduct.find({ sellerCode });

//     if (soldRecords.length === 0) {
//       return res.status(404).json({ message: "No products found for this seller" });
//     }

//     const productSNs = soldRecords.map(sale => sale.productSN);

//     // Step 2: Fetch full product details from Product collection
//     const rawProducts = await Product.find({ productId: { $in: productSNs } });

//     // Step 3: Format products to match frontend expectations
//     const products = rawProducts.map(p => ({
//       productId: p.productId,
//       serialNumber: p.productId, // same as productId
//       name: p.name,
//       brand: p.brand,
//       price: p.price,
//       status: p.isVerified ? "Verified" : "Unverified",
//     }));

//     // Step 4: Get seller address
//     const seller = await Seller.findOne({ SellerCode: sellerCode });

//     res.status(200).json({
//       products,
//       walletAddress: seller?.SellerAddress || "N/A",
//     });

//   } catch (err) {
//     console.error("Error in /api/query-products:", err);
//     res.status(500).json({ message: "Server error" });
//   }
// });
// app.post("/api/sellers", async (req, res) => {
//   try {
//     const newSeller = new Seller(req.body);
//     await newSeller.save();
//     res.status(201).json({ message: "Seller added successfully" });
//   } catch (err) {
//     console.error("Backend error:", err);
//     res.status(500).json({ message: "Failed to add seller" });
//   }
// });



// // Start server
// app.listen(PORT, () => {
//   console.log(`🚀 Server running at http://localhost:${PORT}`);
// });

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");

const app = express();
const PORT = 5000;
require("dotenv").config();
//const MONGO_URL = "mongodb://127.0.0.1:27017/login1";
//const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;
// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection failed:", err));

// User Schema
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  userName: { type: String, unique: true },
  password: String,
});
const User = mongoose.model("User", userSchema);

// Product Schema
const productSchema = new mongoose.Schema({
  productId: { type: String, unique: true },
  name: String,
  brand: String,
  price: Number,
  manufacturer: String,
  seller: String,
  consumer: String,
  isVerified: { type: Boolean, default: false }
});
const Product = mongoose.model("Product", productSchema);

// Seller Schema
const sellerSchema = new mongoose.Schema({
  SellerName: String,
  SellerBrand: String,
  SellerCode: String,
  SellerPhoneNumber: String,
  SellerManager: String,
  SellerAddress: String,
  ManufacturerId: String
});
const Seller = mongoose.model("Seller", sellerSchema);

// Sold Product Schema
const soldProductSchema = new mongoose.Schema({
  productSN: { type: String, required: true },
  sellerCode: { type: String, required: true },
  soldAt: { type: Date, default: Date.now }
});
const SoldProduct = mongoose.model('SoldProduct', soldProductSchema);



//
// ✅ ROUTES
//

// Health check route
app.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "Error fetching users" });
  }
});

// 🔐 Register user
app.post("/user/register", async (req, res) => {
  try {
    const { firstName, lastName, email, password, userName } = req.body;
    const existingUser = await User.findOne({ $or: [{ email }, { userName }] });
    if (existingUser) return res.status(409).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ firstName, lastName, email, userName, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "✅ Registration successful" });
  } catch (err) {
    res.status(500).json({ message: "❌ Registration failed", error: err.message });
  }
});

// 🔐 Login user
app.post("/user/login", async (req, res) => {
  try {
    const { userNameorEmail, password } = req.body;
    const user = await User.findOne({
      $or: [{ userName: userNameorEmail }, { email: userNameorEmail }],
    });
    if (!user) return res.status(404).json({ message: "❌ User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "❌ Incorrect password" });

    res.status(200).json({ message: "✅ Login successful" });
  } catch (err) {
    res.status(500).json({ message: "❌ Login failed", error: err.message });
  }
});

// ➕ Add Product
app.post("/product-add", async (req, res) => {
  try {
    const { productSN, productName, productBrand, productPrice, manufacturerID } = req.body;
    const exists = await Product.findOne({ productId: productSN });
    if (exists) return res.status(409).json({ success: false, message: "❌ Product already exists" });

    const newProduct = new Product({
      productId: productSN,
      name: productName,
      brand: productBrand,
      price: productPrice,
      manufacturer: manufacturerID
    });

    await newProduct.save();
    res.status(201).json({ success: true, message: "✅ Product added successfully", product: newProduct });
  } catch (err) {
    console.error("Error in /product-add1:", err.message);
    res.status(500).json({ success: false, message: "❌ Failed to add product", error: err.message });
  }
});

// ✅ Verify Product by QR (used in scanner)
app.post("/api/verify-product", async (req, res) => {
  const { productSN } = req.body;

  if (!productSN) {
    return res.status(400).json({ success: false, message: "Missing productSN" });
  }

  try {
    const product = await Product.findOne({ productId: productSN });
    if (product) {
      return res.status(200).json({ exists: true, product });
    } else {
      return res.status(404).json({ exists: false, message: "Product not found" });
    }
  } catch (err) {
    console.error("Error in /api/verify-product:", err);
    res.status(500).json({ exists: false, message: "Server error" });
  }
});

// ➕ Add Seller
app.post("/api/sellers", async (req, res) => {
  try {
    const newSeller = new Seller(req.body);
    await newSeller.save();
    res.status(201).json({ message: "Seller added successfully" });
  } catch (err) {
    console.error("Backend error:", err);
    res.status(500).json({ message: "Failed to add seller" });
  }
});

// 📤 Sell Product
app.post("/api/sell-product", async (req, res) => {
  const { productSN, sellerCode } = req.body;

  if (!productSN || !sellerCode) {
    return res.status(400).json({ success: false, message: "Missing fields" });
  }

  try {
    const newSale = new SoldProduct({ productSN, sellerCode });
    await newSale.save();
    res.json({ success: true, message: "Product sold and saved" });
  } catch (err) {
    console.error("Sell error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// 📦 Get products sold by seller
app.get("/api/seller-products", async (req, res) => {
  const { sellerCode } = req.query;

  if (!sellerCode) return res.status(400).json({ message: "Seller code is required" });

  try {
    const soldRecords = await SoldProduct.find({ sellerCode });
    if (soldRecords.length === 0) return res.status(404).json({ message: "No products found for this seller" });

    const productSNs = soldRecords.map((sale) => sale.productSN);
    const products = await Product.find({ productId: { $in: productSNs } });
    const seller = await Seller.findOne({ SellerCode: sellerCode });

    res.json({ products, address: seller?.SellerAddress || "" });
  } catch (err) {
    console.error("Error fetching seller products:", err);
    res.status(500).json({ message: "Server error fetching products" });
  }
});

// 📊 Query products with formatting
app.post("/api/query-products", async (req, res) => {
  const { sellerCode } = req.body;

  if (!sellerCode) return res.status(400).json({ message: "Seller code is required" });

  try {
    const soldRecords = await SoldProduct.find({ sellerCode });
    if (soldRecords.length === 0) return res.status(404).json({ message: "No products found for this seller" });

    const productSNs = soldRecords.map((sale) => sale.productSN);
    const rawProducts = await Product.find({ productId: { $in: productSNs } });

    const products = rawProducts.map(p => ({
      productId: p.productId,
      serialNumber: p.productId,
      name: p.name,
      brand: p.brand,
      price: p.price,
      status: p.isVerified ? "Verified" : "Unverified",
    })); 

    const seller = await Seller.findOne({ SellerCode: sellerCode });

    res.status(200).json({
      products,
      walletAddress: seller?.SellerAddress || "N/A",
    });
  } catch (err) {
    console.error("Error in /api/query-products:", err);
    res.status(500).json({ message: "Server error" });
  }
});


app.post("/api/verify-product", async (req, res) => {
  const { productSN } = req.body;
  const product = await Product.findOne({ productSN });
  res.json({ exists: !!product });
});

// app.post("/api/sell-product", async (req, res) => {
//   const { productSN, consumerCode } = req.body;
//   const product = await Product.findOne({ productSN });

//   if (product) {
//     product.consumerCode = consumerCode;
//     await product.save();
//     res.json({ success: true });
//   } else {
//     res.json({ success: false });
//   }
// });
app.post("/api/sell-product1", async (req, res) => {
  const { productSN, consumerCode } = req.body;

  if (!productSN || !consumerCode) {
    return res.status(400).json({ success: false, error: "Missing required fields" });
  }

  try {
    const product = await Product.findOne({ productId: productSN });

    if (!product) {
      return res.status(404).json({ success: false, error: "Product not found" });
    }

    if (product.isSold) {
      return res.status(400).json({ success: false, error: "Product already sold" });
    }

    product.consumer = consumerCode;
    product.isSold = true;
    await product.save();

    res.json({ success: true, message: "✅ Product sold" });
  } catch (error) {
    console.error("Sell error:", error.message);
    res.status(500).json({ success: false, error: "Server error" });
  }
});
// Consumer Product History Route

// 📜 Consumer Product History
app.post("/api/consumer/history", async (req, res) => {
  const { consumerCode } = req.body;

  if (!consumerCode) {
    return res.status(400).json({ success: false, message: "Consumer code is required" });
  }

  try {
    // Find all products sold to this consumer
    const products = await Product.find({ consumer: consumerCode });

    if (products.length === 0) {
      return res.json({ success: false, message: "No products found for this consumer." });
    }

    // Prepare data for frontend
    const productLogs = products.map((product) => ({
      sn: product.productId,
      seller: product.seller || "N/A",
      manufacturer: product.manufacturer || "N/A",
    }));

    // Optional: get consumer address from User model
    const user = await User.findOne({ userName: consumerCode });
    const address = user?.address || "";

    res.json({ success: true, products: productLogs, address });
  } catch (err) {
    console.error("❌ Error fetching consumer history:", err);
    res.status(500).json({ success: false, message: "Server error fetching history" });
  }
});
app.post("/api/verify-product1", async (req, res) => {
  const { productSN, consumerCode } = req.body;

  try {
    // Validate fields
    if (!productSN || !consumerCode) {
      return res.status(400).json({ genuine: false, error: "Missing fields" });
    }

    // Find product in DB
    const product = await Product.findOne({ productId: productSN });

    if (!product) {
      return res.json({ genuine: false, error: "Product not found" });
    }

    // Check if product belongs to given consumer
    if (product.consumer === consumerCode) {
      return res.json({ genuine: true, owner: consumerCode });
    } else {
      return res.json({ genuine: false, error: "Mismatch consumer" });
    }

  } catch (error) {
    console.error("Verification error:", error);
    res.status(500).json({ genuine: false, error: "Server error" });
  }
});


// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
