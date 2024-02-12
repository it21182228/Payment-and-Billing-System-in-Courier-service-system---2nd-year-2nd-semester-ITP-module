import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Report.css';
import axios from 'axios';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

export default function Report() {
  const [payments, setPayments] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8070/Payment/');
        setPayments(response.data);
      } catch (error) {
        console.error('Error fetching payments data:', error);
      }
    };

    fetchData();
  }, []);

  const downloadPDF = () => {
    const unit = 'pt';
    const size = 'A4'; // Use A1, A2, A3 or A4
    const orientation = 'portrait'; // portrait or landscape

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    const title = 'Invoice Report';
    const headers = [['Customer Name', 'Address', 'Contact Number', 'Package Id', 'Delivery Fee']];

    const data = payments.map((payment) => [
      payment.cusName,
      payment.address,
      payment.phoneNmb,
      payment.packageId,
      payment.delivFee
    ]);

    const content = {
      startY: 50,
      head: headers,
      body: data
    };

    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save('report.pdf');
  };

  return (
    <div className="pdf-data">
      <table className="pdf-align">
        <thead>
          <tr>
            <th className="table-hd1">Customer Name</th>
            <th className="table-hd2">Address</th>
            <th className="table-hd2">Contact Number</th>
            <th className="table-hd3">Package ID</th>
            <th className="table-hd5">Delivery Fee</th>
          </tr>
        </thead>
        <br />
        <tbody>
          {payments
            .filter((payment) => payment.packageId.includes(searchQuery))
            .map((payment) => (
              <tr key={payment._id}>
                <td>{payment.cusName}</td>
                <td>{payment.address}</td>
                <td>{payment.phoneNmb}</td>
                <td>{payment.packageId}</td>
                <td>{payment.delivFee}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <button onClick={downloadPDF} className="down-btn">
        Download as PDF
      </button>
      <br />
      <br />
      <button onClick={() => navigate('/PaymentDelete')} className="back-pdf">
        Back
      </button>
    </div>
  );
}
