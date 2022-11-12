const mongoose = require('mongoose');

const FoodSchema = mongoose.Schema({
    food:{
        type: String
    },
    foodCategory:{
        type: String
    },
    price: {
        type: Number
    },
    hotelName: {
        type: String
    },
    hotelAddress: {
        type: String
    },
    place: {
        type: String
    },
    foodImage: {
        type: String
    }
});

const Food = module.exports = mongoose.model('Food', FoodSchema);

module.exports.addFood = (newFood,callback)=>{
    newFood.save(callback);
};