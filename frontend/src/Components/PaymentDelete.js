import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/PaymentDelete.css';
import { useNavigate } from 'react-router-dom';

export default function PaymentDelete() {
  const [payments, setPayments] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
 const navigate =useNavigate();
  useEffect(() => {
    async function fetchPayments() {
      try {
        const response = await axios.get('http://localhost:8070/Payment/');
        setPayments(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchPayments();
  }, []);

  function handleSearch(e) {
    setSearchQuery(e.target.value);
  }

  function deletedata(i) {
    if (window.confirm('Are you sure?')) {
      axios.delete('http://localhost:8070/Payment/Delete/' + i._id)
        .then(() => {
          alert('Success');
        })
        .catch((err) => {
          alert(err);
        });
    }
  }
  
  
  
  return (
    <div className="Payment-delete-container">
      <div className="Payment-banner">
        <span className="Payment-title">Payment History</span>
        <div className="row-middle"></div>
      </div>
      <br /><br />
      <label className='search-text'> Search:<input className='search-area' type="text" placeholder='Enter Package Id' onChange={handleSearch} /></label><br/><br/>
      
      <table className="Track-align">
        <thead>
          <tr>
            <th className="table-hd1">Customer Name</th>
            <th className="table-hd2">Address</th>
            <th className="table-hd2">Contact Number</th>
            <th className="table-hd3">Package ID</th>
            <th className="table-hd5">Delivery Fee</th>
            <th className="table-hd4">Action</th>
          </tr>
        </thead>
        <br />
        <tbody>
          {payments
            /* .filter((payment) => payment.packageId.includes(searchQuery)) */
            .filter((payment) => payment.cusName.includes(searchQuery))
            .map((payment) => (
              <tr key={payment._id}>
                <td>{payment.cusName}</td>
                <td>{payment.address}</td>
                <td>{payment.phoneNmb}</td>
                <td>{payment.packageId}</td>
                <td>{payment.delivFee}</td>
                <td>
                  <a href={`/PaymentEdit/${payment._id}`}>
                    <button className="edit-btn" type="button">Edit</button>
                    
                 </a>
                </td>
                <td>
                  <button className="delete-btn" type="button" onClick={() => deletedata(payment)}>Delete </button>
                 </td>
               
              </tr>
            ))}
        </tbody>
      </table>
      <button onClick={() => navigate("/Report")} className="generate-btn" type="button" >Generate Report</button>
    </div>
  );
}
