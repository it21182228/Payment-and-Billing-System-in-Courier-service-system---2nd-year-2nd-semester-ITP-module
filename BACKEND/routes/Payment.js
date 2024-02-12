const router = require("express").Router();
let Payment = require("../models/Payment");
const asyncHandler = require("express-async-handler")

http://localhost:8070/Payment/add

router.route("/add").post((req,res)=>{

    const cardNmb = String(req.body.cardNmb);
    const expiration = String(req.body.expiration);
    const cvv = String(req.body.cvv);
    const cusName = String(req.body.cusName);
    const address = String(req.body.address);
    const phoneNmb = String(req.body.phoneNmb);
    const packageId = String(req.body.packageId);
    const delivFee = String(req.body.delivFee);


    const newPayment = new Payment({
      
        cardNmb,
        expiration,
        cvv, 
        cusName,
        address,
        phoneNmb,
        packageId,
        delivFee 

    })

    newPayment.save().then(()=>{

        res.json("Payment details Added")
    }).catch((err)=>{
        console.log(err);
    })
}) 



 http://localhost:8070/Payment/delete/id
router.route("/delete/:id").delete(async(req,res)=>{

    let keyId = req.params.id;
    await Payment.findByIdAndDelete(keyId).then(() => {
        res.status(200).send({status: "Payment details deleted"});

    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status: "Error with payment details", error: err.message});
    })

}) 

router.get("/update/:id", async (req, res) => {
    try {
      const keyId = req.params.id;
  
      const payment = await Payment.findById(keyId);
      if (!payment) {
        return res.status(404).json({ status: "Payment not found" });
      }
  
      res.status(200).json(payment);
    } catch (error) {
      console.log(error);
      res.status(500).json({ status: "Error retrieving payment", error: error.message });
    }
  });
  



router.put("/update/:id", async (req, res) => {
  try {
    const keyId = req.params.id;
    const { packageId,delivFee } = req.body;

    const updatePayment = {
      packageId,
      delivFee
      
    };

    const updatedPayment = await Payment.findByIdAndUpdate(keyId, updatePayment);
    if (!updatedPayment) {
      return res.status(404).json({ status: "Payment not found" });
    }

    res.status(200).json({ status: "Payment details updated" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "Error with updating details", error: error.message });
  }
});



router.route("/").get((req,res) => {

    Payment.find().then((Payment) => {
        res.json(Payment)
    }).catch((err) => {
        console.log(err)
    })

})

router.route("/:id").get(
    asyncHandler(async (req, res)=>{
        let id = req.params.id;

        const data = await Payment.findById(id)

        if(data){
            res.json(data)
        } 
    })
)


module.exports = router;

