const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var dataSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    data: [
      {
        type: Number,
      },
    ],
  },
  {
    timestamps: true,
  }
);

//Export the model
module.exports = mongoose.model("Data", dataSchema);
