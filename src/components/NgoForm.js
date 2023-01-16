import { useState } from "react"

import img from "./img1.jpg"
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import img4 from '../images/img4.jpg'
import axios from 'axios'

const NgoForm = () =>{
  const [startSubscription, setStartSubscription] = useState(false);
  const [amount, setAmount] = useState();
  const[name,setName] = useState("");
  const[period,setPeriod] = useState("monthly");
  const[buttonText,setButtonText] = useState("Donate");
  var changeAmount = (e) =>{
    setAmount(e.target.value);
  }
  var UpdateAmount = (amount) => {
    setAmount(amount);
  }
  var submitForm = () => {
    setButtonText("Processing Please Wait...")
    axios.post("http://localhost:5000/donate",{
      amount:amount,
      name:name,
      period:period
    }).then((resp)=>{
      window.location.replace(resp.data.short_url);
    })
  }
  return (
    <div className="ngo-form">
      <div className="ngo-form-description">
        <div className="ngo-aboutus">
          <h2>About Us</h2>
          <div>
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an orem Ipsum.
          </p>
          {/* <img src={img}></img>
          <li>Yogdan Kendra</li>
          <li>Kanya Pujan</li>
          <li>Samuhik Vivah</li>
          <li>Mahila Sashaktikaran</li> */}
        </div>
        </div>
        <div className="ngo-initiative">
          <h2>Our Initiatives</h2>
          <div className="ngo-images">
          <div>
            <h5>Samuhik Vivah</h5>
            <img src={img2}></img>
          </div>
          <div>
            <h5>Samuhik Vivah</h5>
            <img src={img4}></img>
          </div>
          <div>
            <h5>Samuhik Vivah</h5>
            <img src={img}></img>
          </div>
          <div>
            <h5>Samuhik Vivah</h5>
            <img src={img3}></img>
          </div>
        </div>
        </div>
      </div>
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
          <button className="donate-btn" onClick={submitForm}>{buttonText}</button>
        </div>
      </div>
    </div>
  );
}

export default NgoForm