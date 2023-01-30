const mongoose = require("mongoose");
const validateMongoDbId = (id) =>{
    const isValid = mongoose.Schema.Types.ObjectId.isValid(id);
    if(!isValid){
        throw new Error("Invalid Id");
    }
};

module.exports = validateMongoDbId;