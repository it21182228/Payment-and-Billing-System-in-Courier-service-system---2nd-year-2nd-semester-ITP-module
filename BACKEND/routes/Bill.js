const router = require("express").Router();

const { Router } = require("express");
let Bill = require("../models/Bill");


http://localhost:8070/Bill/add

router.route("Bill/add").post((req,res) => {

    const custName = String(req.body.custName);
    const address = String(req.body.address);
    const phoneNmb = String(req.body.address);
    const packageId = String(req.body.packageId);
    const delivFee = String(req.body.delivFee);
  
    const newBill = new Bill({
        custName,
        address,
        phoneNmb,
        packageId,
        delivFee
        
    })

})

http://localhost:8070/Bill/

router.route("/add").get((req,res) => {

   
    const custName = String(req.body.custName);
    const packageId = String(req.body.packageId);
    const orderId = String(req.body.orderId);
    const delivFee = Number(req.body.delivFee);
    const tAmount = Number(req.body.tAmount);

    


})

module.exports = router;