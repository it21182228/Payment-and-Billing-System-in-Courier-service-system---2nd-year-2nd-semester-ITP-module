import React, { useState } from "react";
import "./css/VisaMaster.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function VisaMaster() {
  const [cardNmb, setCardNumber] = useState("");
  const [expiration, setExpiration] = useState("");
  const [cvv, setCvv] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cardNmb.length !== 16) {
      setError(true);
    
    } 
   
    else {
      const newPayment = {
        cardNmb,
        expiration,
        cvv,
      };
    
      axios
        .post("http://localhost:8070/Payment/add", newPayment)
        .then(() => {
          alert("Payment success");
        })
        .catch((err) => {
          alert(err);
        });
      console.log("Card Number", cardNmb);
    }
  };

  return (
    <div>
      <h4 className="pageName">Visa/Master</h4>
      <br />
      
      <form onSubmit={handleSubmit}>
        <div className="formgroup2">
          {error && cardNmb.length !== 16 && (
            <label className="lable1-lable">Please enter a valid 16-digit card number. </label>
          )}<br/>
          <input className="input1-input"type="text"id="cardNumber"placeholder="Card Number"onChange={(e) => {setCardNumber(e.target.value);setError(false); }}/>
          <br/><br/>
          <label className="lable2-lable" htmlFor="expire"></label>
          <input className="input2-input"type="text"id="expire"placeholder="Month/Year"onChange={(e) => setExpiration(e.target.value)}/>
          <br/>
          <label className="lable3-lable" htmlFor="cvv"></label><br/>
          <input className="input3-input"type="text"id="cvv"placeholder="CVV"onChange={(e) => setCvv(e.target.value)}/>
          <br/><br/>
        </div>
      </form>
      <br />
      <br />

      <button onClick={() => navigate("/PaymentMethod")} className="btn-back" type="button" name="btn">Back </button>

      <button onClick={handleSubmit} className="btn-pay" type="button" name="btn1">Pay</button>
      <img src={require("../images/online-payment.jpg")} alt=" " width="400" height="400" className="img2-css"/>
    </div>
  );
}
