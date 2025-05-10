const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: 
    { 
        type: String, 
        required: true 
    },
    price: 
    { 
        type: Number, 
        required: true 
    },
    stock: 
    { 
        type: Number, 
        required: true 
    },
    category: 
    { 
        type: String 
    },
    vendorId: 
    { 
        type: mongoose.Schema.Types.ObjectId,
         ref: "User" 
    },
  },
  { timestamps: true }
);

productSchema.index({ vendorId: 1 }); 

module.exports = mongoose.model("Product", productSchema);
