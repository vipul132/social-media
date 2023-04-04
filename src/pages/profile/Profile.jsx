import React from 'react'
import "./profile.css"
import Topbar from "../../components/topbar/Topbar"
import Leftbar from "../../components/leftbar/Leftbar"
import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"

const Profile = () => {
  return (
    <>
    <Topbar />
    <div className="profile">
      <Leftbar />
      <div className="profileRight">
        <div className="profileRightTop">
            <div className="profileCover">
              <img className='profileCoverImg' src="assets/post/3.jpeg" alt="" />
              <img className='profileUserImg' src="assets/person/Vipul.png" alt="" />
            </div>
            <div className="profileinfo">
                <h4 className="profileInfoName">Vipul</h4>
                <span className="profileinfoDesc">Hello my friends!</span>
            </div>
        </div>
        <div className="profileRoghtBottom">
          <Feed />
          <Rightbar profile/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Profile
