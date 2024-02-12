import React, {useState, useEffect} from "react"
import './css/PaymentMethod.css';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function PaymentMethod() {
    const navigate = useNavigate();
    const [payments, setPayments] = useState([]);

    useEffect(() => {
      async function fetchPayments() {
        try {
          const response = await axios.get("http://localhost:8070/Payment/",payments);
          setPayments(response.data);
        } catch (error) {
          console.error(error);
        }
      }
  
      fetchPayments();
    }, []);

  
    console.log(payments)
    
    return (
        <div>
            <title>
                <body style={{backgroundColor :"lightblue"}}></body>
            </title>
            <div className='payment-banner'>
                <span className="payment-report">Payment Report</span>
                <div className="row-middle">
                    <div className="col-line">
                        <span className="line-one">Customer Name:</span><br/>
                        <span className="line-two">Address:</span><br/>
                        <span className="line-three">Phone Number:</span><br/>
                        <span className="line-four">Package ID:</span><br/>
                        <span className="line-six">Delivery Fee:</span>
                     </div>
                    {/* <span className="span-data"> 
                        {payments.map((payment) => {
                            return (
                                <span key={payment._id}>
                                    <span>{payment.cusName}</span><pre/>
                                    <span>{payment.address}</span><pre/>
                                    <span>{payment.phoneNmb}</span><pre/>
                                    <span>{payment.packageId}</span><pre/>
                                    <span>{payment.delivFee}</span><pre/>
                                    <span> </span>
                                </span>
                            );
                        })}
                    </span>*/}
                    <span className="span-data">
                       {payments.length > 0 && (
                      <span key={payments[payments.length-1]._id}>
                      <span className="data-one">{payments[payments.length-1].cusName}</span><br/><br/>
                      <span className="data-two">{payments[payments.length-1].address}</span><br/><br/>
                      <span className="data-three">{payments[payments.length-1].phoneNmb}</span><br/><br/>
                      <span className="data-four">{payments[payments.length-1].packageId}</span><br/><br/>
                      <span className="data-five">{payments[payments.length-1].delivFee}</span><br/><br/>
        </span>
    )}
</span>
                     </div>   
            </div>      
            <div className="header-container"><h3>Payment Method</h3></div><br/>
            <div><button onClick={() => navigate("/VisaMaster")} className="btn-container" type="button">Visa/Master</button></div><br/><br/> 
            <div><button className="btn-container" type="button">Cash On Delivery</button></div><br/><br/> 
            <div><button onClick={() => navigate("/Payment")} className="btn1-container" type="button">Back</button></div>

            <img src={require("../images/card.jpg")} alt=" " width="600" height="500" className="img1-css"/>
        </div>
    );
}
