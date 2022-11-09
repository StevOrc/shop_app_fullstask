const Product = require("../models/Product");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).send(products);
  } catch (error) {
    console.error("ERROR", error);
    res.status(500).send({ message: error });
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.json(product);
  } catch (error) {
    console.error(object);
    res.status(500).send({ message: "Server  Error" });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
};
