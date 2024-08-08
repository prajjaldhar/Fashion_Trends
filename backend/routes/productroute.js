const express = require("express");
const getproductcontroller = require("../controllers/products/getproductcontroller");
const router = express.Router();

router.get("/", getproductcontroller);
router.get("/category/:category", getproductcontroller);
router.get("/subcategory/:subcategory", getproductcontroller);
module.exports = router;
