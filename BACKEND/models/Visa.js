const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const visaSchema = new Schema({

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

const Visa = mongoose.model("Visa",visaSchema);

module.exports = Visa;