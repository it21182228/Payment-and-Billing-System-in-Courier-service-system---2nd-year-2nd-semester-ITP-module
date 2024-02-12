const mongoose = require('mongoose')

const Schema = mongoose.Schema

const billSchema = new Schema({

        custName : {

        type : String,
        require : true
    },
    address: {

        type : String,
        require : true

    },
    phoneNmb: {

        type : String,
        require : true
    
    },
    packageId : {

        type : String,
        require : true
    },
    
    
    delivFee : {

        type : String,
        require : true
    }

    
})
const Bill = mongoose.model("Bill",billSchema);



module.exports = Bill;