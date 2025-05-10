const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  userId: 
  { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User", unique: true 
},
  products: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      quantity: { type: Number, default: 1 },
    },
  ],
  total: 
  { type: Number },
});

cartSchema.virtual("itemCount").get(function () {
  return this.products.reduce((acc, item) => acc + item.quantity, 0);
});

module.exports = mongoose.model("Cart", cartSchema);
