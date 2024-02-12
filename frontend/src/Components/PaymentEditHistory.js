import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import "./css/PaymentEditHistory.css";

function PaymentEditHistory() {
  const [user, setUser] = useState({});
  const params = useParams();
  const [changing, setChanging] = useState(false);
  const navigate = useNavigate();

  const getItemById = async () => {
    try {
      const response = await axios.get(`http://localhost:8070/Payment/update/${params.id}`);
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getItemById();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
    setChanging(true);
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:8070/Payment/update/${params.id}`, user);
      navigate("/PaymentDelete");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h4>Payment Edit</h4><br/>
      <form>
        <div className="formgroup2">
          <label className="l1-lable">Package ID:</label>
          <input onChange={handleChange} className="i1-input" type="text" id="packageId" name="packageId" placeholder={user.packageId} value={user.packageId || ""}/><br />
          <label className="l2-lable">Delivery Fee:</label>
          <input onChange={handleChange} className="i2-input" type="text" id="delivFee"name="delivFee" placeholder={user.delivFee} value={user.delivFee || ""} /><br />
         
          
        </div>
      </form>
      <br />
      <br />
      <br />
      <button onClick={() => navigate("/PaymentDelete")} className="btn-cancel" type="button" name="btn">Cancel</button>
      <button onClick={handleUpdate} className="btn-update" name="btn1" disabled={!changing}>Update</button>

      <img src={require("../images/edit.png")} alt=" " width="500" height="400" className="img3-css"/>
    </div>
  );
}

export default PaymentEditHistory;
