import React from "react"
import './css/NavigationBar.css'


export default function NavigationBar(){

    return(
     
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="main-nav" href="#">Courier Mate</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="home-nav" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="order-nav" href="#">Order Processing</a>
        </li>
        <li className="nav-item dropdown">
          <a className="payment-nav" href="/Payment" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            </a>
            <div className="dropdown">
  <a className="dropdown-toggle" href="#" role="button" id="paymentDropdown" data-bs-toggle="dropdown" aria-expanded="false">
    Payment
  </a>
  <ul className="dropdown-menu" aria-labelledby="paymentDropdown">
    <li><a className="dropdown-item" href="/PaymentR">Payment Form</a> </li>
    <li><a className="dropdown-item" href="/PaymentMethod">Payment </a></li>
   
    <li><a className="dropdown-item" href="/PaymentDelete">Payment History</a></li>
      
  </ul>
</div>
        </li>
        <li className="nav-item">
          <a className="tracking-btn">Tracking</a>
        </li>
        <li className="nav-Login">
          <a className="login-btn">Login</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="serch-lable" type="search" placeholder="Search" aria-label="Search"></input>
        <button className="btn-outline-success" type="submit">Search</button>
        <hr></hr>
      </form>
     
    </div>
  </div>
</nav>
    )


}
