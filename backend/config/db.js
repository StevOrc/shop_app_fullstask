require("dotenv").config();
const mongoose = require("mongoose");
const {
  DB_NAME,
  DB_HOST,
  DB_PORT,
  DB_PASSWORD,
  DB_USERNAME,
} = require("../helpers/env-variables");

const URI = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;

const connectDb = async () => {
  try {
    await mongoose.connect(URI, {
      authSource: "admin",
      user: DB_USERNAME,
      pass: DB_PASSWORD,
    });
    console.log(`Connected to mongoDB...`);
  } catch (error) {
    console.log("Error conecting to mongo db : ", error);
    throw new Error(error.message);
  }
};

module.exports = connectDb;
