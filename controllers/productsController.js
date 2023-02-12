const Product = require("../models/Product");

// Get All Products

const product_get_all = async (req, res) => {
  try {
    const productsList = await Product.find();
    res.status(200).json(productsList);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Product By ID

const product_get_id = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    if (product == null) {
      res.status(404).json({ message: "Product not found" });
    } else {
      res.status(201).json(product);
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Create New Product

const product_post = async (req, res) => {
  const product = new Product({
    productName: req.body.productName,
    brand: req.body.brand,
    price: req.body.price,
  });
  try {
    const createProduct = await product.save();
    res.status(201).json(createProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update Product Information

const product_patch = async (req, res) => {
  try {
    const updateProduct = await Product.updateOne(
      { _id: req.params.productId },
      {
        $set: {
          productName: req.body.productName,
          brand: req.body.brand,
          price: req.body.price,
        },
      }
    );
    res.status(200).json(updateProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete Product

const product_delete = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    } else {
      product.deleteOne();
      res.status(202).json({ message: "Product successfully deleted!" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  product_get_all,
  product_get_id,
  product_post,
  product_patch,
  product_delete,
};
