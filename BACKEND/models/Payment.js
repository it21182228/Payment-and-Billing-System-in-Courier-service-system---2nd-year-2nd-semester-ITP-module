 const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const paymentSchema = new Schema({

    cardNmb : {
        type : String,
        required: true
     
    },

    expiration : {
        type : String,
        required: true
    },
    cvv : {
        type : String,
        required: true
    },
    
    cusName : {
        type : String,
        required: true
    },

    address : {
        type : String,
        required: true
    },
    phoneNmb : {
        type : String,
        required: true
    },
    packageId : {
      type :  String,
    required : true
},
delivFee : {
    type : String,
    required : true
}

})

const Payment = mongoose.model("Payment",paymentSchema);

module.exports = Payment;
 
