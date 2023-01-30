const express = require("express");
const router = express.Router();
const {
    createProduct
} = require("../controller/productCtrl");

router.post("/createproduct", createProduct)



module.exports = router;