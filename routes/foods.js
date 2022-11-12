const express = require('express');
const router = express.Router();
const Food = require('../model/food');

// Nearby popular food
//API for Near by Popular Food = http://localhost:3000/foods/nearby/<placenamehere>
router.get('/nearby/:place',(req,res)=>{
    place = req.params.place;
    Food.find({
        "place":place
    })
    .then((foods)=>{
        res.send(foods)
    })
});

router.post('/create',(req,res)=>{
    let newFood = new Food({
        food: req.body.food,
        price: req.body.price,
        foodCategory : req.body.foodCategory,
        hotelName: req.body. hotelName,
        hotelAddress: req.body.hotelAddress,
        place: req.body.place,
        foodImage: req.body.foodimage
    });

    Food.addFood(newFood, (err,Food)=>{
        if(err){
            res.json({success: false, msg:'Failed to add food' })
        }
        else{
            res.json({success: true, msg:'Added Successfully' })

        }
    })
});

//View All food

router.get('/read',(req,res)=>{
    Food.find()
    .then((foods)=>{
        res.send(foods)
    })
});



module.exports = router;