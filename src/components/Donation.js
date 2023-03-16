import React, { useState } from "react";
import "./Donation.css";

const Donation = () => {
  const [amount, setAmount] = useState();
  const [name,setName] = useState();
  const [period, setPeriod] = useState();
  // const [submitForm, setSubmitForm] = useState();
  const [changeAmount, setChangeAmount] = useState();
  return (
    <div className="donation-container">
      <div className="ngo-form-amount">
        <div className="card-title">Make an impact</div>
        <div className="ngo-name ngo-input">
          <label>Name</label>
          <input className="" value={name} onChange={(e) => setName(e.target.value)}></input>
        </div>
        <div className="ngo-amount ngo-input">
          <label>Amount</label>
          <input className="" name="amount" value={amount} onChange={changeAmount}></input>
        </div>
        <div className="ngo-amount-slabs">
          <button className="amount-slab" onClick={() => setAmount(100)}>100</button>
          <button className="amount-slab" onClick={() => setAmount(200)}>200</button>
          <button className="amount-slab" onClick={() => setAmount(500)}>500</button>
          <button className="amount-slab" onClick={() => setAmount(1000)}>1000</button>
          <button className="amount-slab" onClick={() => setAmount(2000)}>2000</button>
          <button className="amount-slab" onClick={() => setAmount(5000)}>5000</button>
        </div>
        <label>
          And I would like to donate: 
          <select value={period} onChange={(e) => setPeriod(e.target.value)}>
            <option value="monthly">Monthly</option>
            <option value="weekly">Weekly</option>
            <option value="yearly">Yearly</option>
            <option value="daily">Daily</option>
          </select>
        </label>
        <div className="amount-donate">
          <button className="donate-btn" >Donate</button>
        </div>
      </div>
    </div>
  );
};

export default Donation;
