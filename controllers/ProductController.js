const { addAbortSignal } = require("stream");
const Products = require("../models/ProductsModel");

exports.getProducts = async (req, res) => {
  try {
    const allProducts = await Products.find();
    res.status(200).json({
      status: "Success",
      data: allProducts,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      error: error.message,
    });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const newProduct = await Products.create(req.body);
    res.status(201).json({
      status: "Success",
      data: {
        newProduct,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      error: error.message,
    });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const currentProduct = await Products.findById(req.params.id);
    if (!currentProduct) {
      throw new Error(`Sorry, no product with this id : ${req.params.id}`);
    }
    res.status(200).json({
      status: "Success",
      data: {
        currentProduct,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      error: error.message,
    });
  }
};
