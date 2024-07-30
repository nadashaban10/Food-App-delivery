import React from 'react'
import "./addDownload.css"
import { assets } from '../../assets/assets'
function AppDownload() {
  return (
    <div className='app-download' id='app-download'>
        <p>For better Experince donwload <br />Tomato App</p>
      <div className="app-download-platform">
        <img src= {assets.play_store}></img>
        <img src= {assets.app_store}></img>
      </div>
    </div>
  )
}

export default AppDownload
