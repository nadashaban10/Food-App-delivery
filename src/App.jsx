import React from 'react';
import NavBar from "./components/pages/NavBar/NavBar.jsx";
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home/home.jsx';
import PlaceOrder from './components/pages/PlaceOrder/placeOrder.jsx';
import Cart from './components/pages/cart/cart.jsx';
import Footer from './components/Footer/footer.jsx';
import LoginpopUp from './components/LoginPop/LoginpopUp.jsx';
function App() {

  const [Login, setLogin] = React.useState(false);
  return (
    <>
    {Login? <LoginpopUp setLogin= {setLogin} /> : <></>}
    <div className='app'>
      <NavBar setLogin = {setLogin} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/order' element={<PlaceOrder />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
    <Footer />
    </>
  );
}

export default App;