const mongoose = require("mongoose");
const ProductCollection = require("../../models/ProductSchema");
const getproductcontroller = async (req, res) => {
  try {
    const product = await ProductCollection.find();
    res.status(200).send(product);
    console.log(`Product fetched successfully`);
  } catch (error) {
    res.status(504).send({
      message: "Error fetching products",
    });
    console.log(`Error Occured :${error}`);
  }
};
module.exports = getproductcontroller;
