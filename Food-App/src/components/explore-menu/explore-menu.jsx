import React from 'react';
import "./explore-menu.css";
import { menu_list } from "../../assets/assets";

function ExploreMenu({ category, setCategory }) {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our Menu</h1>
        <p className='explore-menu-text'>Craving something delicious? Explore our diverse menu and find your favorite dishes, freshly prepared just for you. Whether it's a quick snack or a gourmet meal, we've got you covered!</p>
        <div className='explore-menu-list'>
            {menu_list.map((item, index) => {
                return (
                    <div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} key={index} className='explore-menu-item'>
                        <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt={item.menu_name} />
                        <p>{item.menu_name}</p>
                    </div>
                );
            })}
        </div>
        <hr />
    </div>
  );
}

export default ExploreMenu;