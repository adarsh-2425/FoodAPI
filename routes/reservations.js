const express = require('express');
const router = express.Router();
const Reservation = require('../model/reservation');



//Reservation Center
//API for Reservation center = http://localhost:3000/reservation/create

router.post('/create',(req,res)=>{
    let newReservation = new Reservation({
        food: req.body.food,
        price: req.body.price,
        hotelName: req.body.hotelName,
        hotelAddress: req.body.hotelAddress,
        userName: req.body.userName,
        userEmail: req.body.userEmail,
        deliveryAddress: req.body.deliveryAddress
    });
    Reservation.addReservation(newReservation, (err,Reservation)=>{
        if(err){
            res.json({success: false, msg:'Failed to reserve food' })
        }
        else{
            res.json({success: true, msg:'Reservation Successful' })

        }
    })
});

//View reservation
router.get('/read',(req,res)=>{
    Reservation.find()
    .then((reservations)=>{
        res.send(reservations)
    })
});

module.exports = router;

