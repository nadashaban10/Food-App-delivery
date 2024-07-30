import React, { useContext } from 'react';
import './NavBar.css';
import { useState } from 'react';
import logo from '../../../assets/logo.png';
import search from '../../../assets/search_icon.png';
import basket from '../../../assets/basket_icon.png';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../../StoreContext/context';

function NavBar({ setLogin }) {
    const [underline, setUnderline] = useState('home');
    const {getTotalCartAmount} = useContext(StoreContext);
    return (
        <div className='Nav-Bar'>
            <Link to="/"><img src={logo} alt='Logo' className='logo' /></Link>
            <ul className='Nav-Bar-menu'>
                <Link to='/' onClick={() => setUnderline("home")} className={underline === "home" ? "active" : ""}>Home</Link>
                <a href='#explore-menu' onClick={() => setUnderline("menu")} className={underline === "menu" ? "active" : ""}>Menu</a>
                <a href='#app-download1' onClick={() => setUnderline("mobile-app")} className={underline === "mobile-app" ? "active" : ""}>Mobile App</a>
                <a href='#footer' onClick={() => setUnderline("contact")} className={underline === "contact" ? "active" : ""}>Contact us</a>
            </ul>
            <div className='Nav-Bar-right'>
                <img src={search} className='search' alt='Search Icon' />
                <div className='search-icon'>
                    <Link to='/cart'><img src={basket} className='basket' alt='Basket Icon' /></Link>
                    <div className={getTotalCartAmount() ===0?"": "dot" }></div>
                </div>
                <button onClick={() => setLogin(true)} className='dot-button'>log-in</button>
            </div>
        </div>
    );
}

export default NavBar;