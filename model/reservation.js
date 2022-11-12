const mongoose = require('mongoose');

const ReservationSchema = mongoose.Schema({
    food:{
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
    userName: {
        type: String
    },
    userEmail: {
        type: String
    },
    deliveryAddress: {
        type: String
    }
});

const Reservation = module.exports = mongoose.model('Reservation', ReservationSchema);

module.exports.addReservation = (newReservation,callback)=>{
    newReservation.save(callback);
};