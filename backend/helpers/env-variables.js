const dotenv = require('dotenv')
dotenv.config();

const PORT = process.env.PORT || 3001;
const MONGO_URI = process.env.MONGO_URI;
const DB_HOST = process.env.DB_HOST;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;
const DB_PORT = process.env.DB_PORT;
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

module.exports = { PORT, MONGO_URI, DB_HOST, DB_NAME, DB_PASSWORD, DB_USERNAME, JWT_SECRET_KEY, DB_PORT };
