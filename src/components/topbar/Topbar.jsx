import React from 'react'
import "./topbar.css"
import { Search, Person, Chat, Notifications } from "@mui/icons-material"
import Img1 from "../../assetss/person/Vipul.png"

const Topbar = () => {
  return (
    <div className='topbarContainer'>
      <div className="topbarLeft">
        <span className="logo">Facebook</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
            <Search className='searchIcon'/>
            <input type="text" placeholder='Search for friend, post or video' className="searchInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
            <span className="topbarLink">Homepage</span>
            <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
            <div className="topbarIconItem">
                <Person />
                <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
                <Chat />
                <span className="topbarIconBadge">2</span>
            </div>
            <div className="topbarIconItem">
                <Notifications />
                <span className="topbarIconBadge">1</span>
            </div>
            <img src={Img1} alt="" className="topbarImg" />
        </div>
      </div>
    </div>
  )
}

export default Topbar
