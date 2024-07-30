import React from 'react'
import './LoginPopUp.css';
import { assets } from '../../assets/assets';

const LoginpopUp = ({setLogin}) => {
    const [curretState, setcurrectState] = React.useState("Sign Up");
  return (
    <div className='Login-PopUp'>
      <form action="" className="login-pop-container">
        <div className="login-pop-title">
            <h2>{curretState}</h2>
            <img onClick={() => setLogin(false)} src= {assets.cross_icon}></img>
        </div>
        <div className="login-pop-input">
            {curretState ===  "log in" ? <></> : 
            <input type="text" placeholder="your Name" required></input>}
            <input type="text" placeholder="Email" required></input>
            <input type="password" placeholder="Password" required></input>
        </div>
        <button>{curretState === "Sign Up" ? "create account" : "Log in"}</button>
        <div className="login-pop-condition">
            <input type="checkbox" required></input>
            <p>I agree to the terms and conditions</p>

        </div>
        {curretState === "Login"}
        <p> Craete a new account ? <span onClick={() => setcurrectState("sign up")}> click here </span></p>
        <p>Already have an account ? <span onClick={() => setcurrectState("log in")}>Log in here</span></p>
      </form>
    </div>
  )
}

export default LoginpopUp
