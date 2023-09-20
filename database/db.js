const { MongoClient } = require("mongodb");
require("dotenv").config();

const URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.frfcceb.mongodb.net/?retryWrites=true&w=majority`;

let client;
const getDb = () => {
  if (!client) {
    client = new MongoClient(URI);
  }

  const database = client.db("Nike");
  const products = database.collection("products");

  return {
    products,
  };
};

module.exports = getDb;
