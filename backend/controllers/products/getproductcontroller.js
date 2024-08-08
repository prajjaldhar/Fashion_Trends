const mongoose = require("mongoose");
const ProductCollection = require("../../models/ProductSchema");
const getproductcontroller = async (req, res) => {
  try {
    const { category, name, subcategory } = req.params;
    let products;
    if (category) {
      const searchcategory = category.toLowerCase();
      products = await ProductCollection.find({
        category: { $regex: new RegExp(searchcategory, "i") },
      });
    } else if (name) {
      const searchname = name.toLowerCasease();
      products = await ProductCollection.find({
        name: { $regex: new RegExp(searchname, "i") },
      });
    } else if (subcategory) {
      const searchsubcategory = subcategory.toLowerCase();
      products = await ProductCollection.find({
        sub_category: { $regex: new RegExp(searchsubcategory, "i") },
      });
    } else {
      products = await ProductCollection.find();
      console.log(`Product fetched successfully`);
    }
    if (!products || products.length === 0) n 
      return res.status(404).send({ message: "Product not found" });
    res.status(200).send(products);
  } catch (error) {
    res.status(504).send({
      message: "Error fetching products",
    });
    console.log(`Error Occured :${error}`);
  }
};
module.exports = getproductcontroller;
