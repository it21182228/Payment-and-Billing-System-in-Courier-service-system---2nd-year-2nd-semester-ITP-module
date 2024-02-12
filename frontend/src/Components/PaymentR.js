import React, { useState } from "react";
import "./css/PaymentR.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function PaymentR() {
  const [error,setError] = useState("");
  
  const [cusName, setCusName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNmb, setPhoneNmb] = useState("");
  const [packageId, setPackageId] = useState("");
  const [delivFee, setDelivFee] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    if(phoneNmb !== Number && phoneNmb.length !== 10){
        setError(true);
    }
    
    else{
        alert("Payment details added Success")
    const newPayment = {
      cusName,
      address,
      phoneNmb,
      packageId,
      delivFee,
    };




    axios
      .post("http://localhost:8070/Payment/add",newPayment)
      .then(() => {
        alert("Payment report details added.");
      })
      .catch((err) => {
        alert(err);
      });
    }
  };

  return (
    <div>
      <h4 className="pageName1">Payment Form</h4>
      <br />
      <form onSubmit={handleSubmit}>
        <div className="Formgroup2">
          <label htmlFor="cusName" className="lable11-lable"></label><br/>
          <input className="input11-input" type="text"  id="cusName" placeholder="Name" value={cusName}onChange={(e) => setCusName(e.target.value)}  /><br/>  
          <label htmlFor="cusAddress" className="lable22-lable"></label><br/>
          <input className="input22-input" type="text"id="cusAddress"placeholder="Address"value={address} onChange={(e) => setAddress(e.target.value)}/><br/>
          {error && phoneNmb !== Number && phoneNmb.length !== 10 && (<label className="lable33-lable">Please Enter Valid Contact Number</label>)}<br/>
          <input className="input33-input" type="text"id="cNumber"placeholder="Contact Number" value={phoneNmb} onChange={(e) => setPhoneNmb(e.target.value)}/><br/>
          <label htmlFor="packageId" className="lable44-lable"></label><br/>
          <input className="input44-input" type="text" id="packageId" placeholder="Package ID" value={packageId} onChange={(e) => setPackageId(e.target.value)}/><br/>
          <label htmlFor="dFee" className="lable55-lable"></label><br/>
          <input className="input55-input" type="text" id="dFee" placeholder="Fee" value={delivFee} onChange={(e) => setDelivFee(e.target.value)}/><br/>
        </div>
        <button type="submit" className="submit-btn">Send</button>
      </form>
      <br />
      <br />
      
      
      <button
        onClick={() => navigate("/Payment")}
        className="Btn-back"
        type="button"
        name="btn"
      >
        Back
      </button>
      <div>
        <img
          src={require("../images/pay.jpg")}
          alt="Payment"
          width="600"
          height="600"
          className="img-css"
        />
      </div>
    </div>
  );
}
