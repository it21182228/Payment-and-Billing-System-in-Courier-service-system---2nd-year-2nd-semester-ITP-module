
import './App.css';
import NavigationBar from './Components/NavigationBar';
/* import PaymentEdit from './Components/PaymentEdit'; */
import PaymentMethod from './Components/PaymentMethod';
import VisaMaster from './Components/VisaMaster';

import Report from './Components/Report';
import PaymentR from './Components/PaymentR';
import PaymentDelete from './Components/PaymentDelete';

import {BrowserRouter, Route, Routes, useNavigate} from "react-router-dom"
import PaymentEditHistory from './Components/PaymentEditHistory';
import React from 'react';




function App() {
  return (
    <div className='app-ap'>
    <BrowserRouter>
   <div>
    
   <NavigationBar/>
   
    <Routes>
      
    <Route path="/NavigationBar" element={<NavigationBar/>}/>
     <Route path="/NavigationBar" element={<NavigationBar/>}/>
     <Route path= "/PaymentR" element={<PaymentR/>}/>
   <Route path="/paymentMethod" element={<PaymentMethod />}/> 
     <Route path="/VisaMaster" element={<VisaMaster/>}/> 
     {/* <Route path="/PaymentEdit" element={<PaymentEdit/>}/> */}
     <Route path="/VisaMaster" element={<VisaMaster/>}/>
     <Route path="/PaymentMethod" element={<PaymentMethod/>}/>
     <Route path="PaymentEditHistory" element={<PaymentEditHistory/>}/>
     <Route path="/Report" element={<Report/>}/>
     <Route path="/PaymentDelete" element={<PaymentDelete/>}/>
    <Route path='/PaymentEdit/:id' element={<PaymentEditHistory/>}/>
     
     </Routes> 

    </div>
    </BrowserRouter>
    </div>
    /*  <NavLink exact activeClassName="active" to="/PaymentMethod">Visa/Master</NavLink>
    <NavLink exact activeClassName="active" to="/PaymentMethod">Back</NavLink>

    <switch>
      <Route path="/PaymentMethod/Visa/Master" Component={PaymentMethod} />
      <Route path="/PaymentMethod/Back" Component={PaymentMethod} />

      
    </switch> 
 */

 
  );
}

export default App;


