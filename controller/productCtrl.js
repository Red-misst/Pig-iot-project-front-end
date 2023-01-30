const product = require("../models/poductModel");
const asyncHandler = require("express-async-handler");

//add a new product
const createProduct = asyncHandler(async (req, res)=>{
    try{
    const newProduct = await product.create(req.body);
    res.json(newProduct);
    } catch (error){
        throw new Error(error);
    }
});




module.exports ={ createProduct };