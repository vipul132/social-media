import React from 'react'
import "./share.css"
import Img from "../../assetss/person/Vipul.png"
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material"

const Share = () => {
  return (
    <div className='share'>
      <div className="shareWrapper">
        <div className="shareTop">
            <img src={Img} className='shareProfileImg' alt="" />
            <input placeholder="What's in your mind" className='shareInput'/>
        </div>
        <hr className='shareHr'/>
        <div className="shareButtons">
            <div className="shareOptions">
                <div className="shareOption">
                    <PermMedia htmlColor="tomato" className='shareIcon'/>
                    <span className='shareOptionText'>Photo or Videos</span>
                </div>
                <div className="shareOption">
                    <Label htmlColor="blue" className='shareIcon'/>
                    <span className='shareOptionText'>Tag</span>
                </div>
                <div className="shareOption">
                    <Room htmlColor="green" className='shareIcon'/>
                    <span className='shareOptionText'>Location</span>
                </div>
                <div className="shareOption">
                    <EmojiEmotions htmlColor="goldenrod" className='shareIcon'/>
                    <span className='shareOptionText'>Feelings</span>
                </div>  
            </div>
            <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  )
}

export default Share
