import React, { useContext } from 'react'
import { StoreContext } from '../../../StoreContext/context';
import './placeOrder.css';

function PlaceOrder() {
  const {getTotalCartAmount} = useContext(StoreContext);
  return (
   <form className='place-order'>
    <div className="place-order-left">

      <p className='title'></p>
      <div className="multi-fields">
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        </div>
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="street" />
        <div className="multi-fields">
        <input type="text" placeholder="city" />
        <input type="text" placeholder="state" />
        </div>
        <div className="multi-fields">
        <input type="text" placeholder="Zip-code" />
        <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="Phone Number" />
    </div>
    <div className="place-order-right">
    <div className="cart-total">
          <h2>Cart Total</h2>
<div>
  <hr />
  <div className="card-total-details">
<p>Sub total</p>
<p>{getTotalCartAmount()}</p>
  </div>
  <div className="card-total-details">
<p>Delivery Fee </p>
<p>{2}</p>
  </div>
  <div className="card-total-details">
<b>Total</b>
<b>{getTotalCartAmount()+2}</b>
  </div>
  
</div>
<button >Proceed to payment</button>
        </div>
    </div>

   </form>
  )
}

export default PlaceOrder
