const mongoose = require('mongoose');


const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter product name"]
    },

    price: {
      type: Number,
      required: true,
      default: 0
    },

    image: {
      type: String,
      required: true
    },

    availability: {
      type: Boolean,
      required: true
    },

    fuelType: {
      type: String,
      required: true
    },
    
    fuelCapacity: {
      type: Number,
      required: true
    },
   
    passengerCapacity: {
      type: Number,
      required: true
    },

    description: {  
      type: String,
      required: [true, "Please enter a description"]
    }
  },
  {
    timestamps: true 
  }
);


const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;

