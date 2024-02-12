const router = require("express").Router();
let Visa = require("../models/Visa");

http://localhost:8070/Visa/update/id
router.route("/update/:id").put(async(req,res)=>{

    let keyId = req.params.id;
    const {cusName,address,phoneNmb} = req.body;

    const updateVisa = {
        cusName,
        address,
        phoneNmb
    }
    const update = await Visa.findByIdAndUpdate(keyId,updateVisa).then(()=>{
        res.status(200).send({status: "Payment details updated"})
}).catch((err)=>{
    console.log(err);
    res.status(500).send({status: "Error with updating details", error: err.message});
})
})

/*router.route("/add").post((req,res)=>{

    const cusName = String(req.body.cusName);
    const address = String(req.body.address);
    const phoneNmb = String(req.body.phoneNmb);
    const packageId = String(req.body.packageId);
    const delivFee = String(req.body.delivFee);
    
    const newPayment = new Visa({
      
        cusName,
        address,
        phoneNmb,
        packageId,
        delivFee 


    })

    newVisa.save().then(()=>{

        res.json("Payment details Added")
    }).catch((err)=>{
        console.log(err);
    })
}) 

router.route("/").get((req,res) => {

    Payment.find().then((Payment) => {
        res.json(Payment)
    }).catch((err) => {
        console.log(err)
    })
})
*/




module.exports = router;