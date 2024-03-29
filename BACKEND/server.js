const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 8070;



app.use(cors());
app.use(bodyParser.json());

const URL = process.env.ATLAS_URL;

mongoose.connect(URL, {
    //useNewUrlParser: true, 
    useUnifiedTopology: true,
    //useCreateIndex: true
    //useFindAndModify: false

});


const connection = mongoose.connection;
connection.once("open", ()=> {
    console.log("MongoDB connection success!")
});

const paymentRouter = require("./routes/Payment.js");

app.use("/Payment",paymentRouter);

app.listen(PORT, ()=> {
    console.log(`server is up and running on port ${PORT}`);
});
