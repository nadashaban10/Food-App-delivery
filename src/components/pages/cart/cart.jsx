import React, { useContext } from 'react';
import "./cart.css";
import { food_list } from '../../../assets/assets';
import { StoreContext } from '../../../StoreContext/context';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const { cartItems, removeFromCart, getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <div className='cart'>
      <div className='cart-items'>
        <div className="cart-items-title">
          <p>items</p>
          <p>Title</p>
         <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => { 
          if (cartItems[item._id] > 0) {
            return (
              <div key={index}> 
                <div className=' cart-items-data'>
                  <img src={item.image} alt={item.title} />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{item.title}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className='cross'>x</p>
                </div>
                <hr/>
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className="cart-botton">
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
<p>{getTotalCartAmount() ===0?0:2}</p>
  </div>
  <div className="card-total-details">
<b>Total</b>
<b>${getTotalCartAmount()===0?0:getTotalCartAmount() +2}</b>
  </div>
  
</div>
<button onClick={() => navigate('/order')}>Proceed to checkout</button>
        </div>
        <div className="cart-promo-code">
          <div>
            <p>If you have a promocode, Enter it here </p>
            <input type="text" placeholder="Enter promocode" />
            <button>Apply</button>
          
          </div>

        </div>
      </div>
    </div>
  );
}

export default Cart;