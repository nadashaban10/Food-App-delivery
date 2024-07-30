import React from 'react'
import "./home.css"
import Header from '../header/header'
import ExploreMenu from '../../explore-menu/explore-menu'
import { useState } from 'react'
import FoodDisplay from '../../FoodDisplay/FoodDisplay'
import AppDownload from '../../addDownload/addDownload'

function Home() {
  const [category, setCategory] = useState('All')
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category}  />
      <AppDownload />
    </div>
  )
}

export default Home
