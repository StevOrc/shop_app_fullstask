require("dotenv").config();

const productsData = require("./data/products");
const Product = require("./models/Product");
const connectDb = require("./config/db");

connectDb();

const importData = async () => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(productsData);
    console.log("Data Imported and save with Success");
    process.exit();
  } catch (error) {
    console.log("Error with data import");
    process.exit(1);
  }
};

importData();
