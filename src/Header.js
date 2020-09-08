import React from 'react'
import './Header.css'
import  HomeIcon from '@material-ui/icons/Home'
import FlashOnIcon from '@material-ui/icons/FlashOn'
import LiveTvIcon from '@material-ui/icons/LiveTv'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import SearchIcon from '@material-ui/icons/Search'
import PersonOutLineIcon from '@material-ui/icons/PersonOutline'

function Header() {
    return (
        <div className="header">
            <div className="header-icons">
                <div className="header-icon header-icon--active">
                <HomeIcon/>
                <p>Home</p>
                </div>
                <div className="header-icon">
                <FlashOnIcon/>   
                <p>Trending</p>       
                </div>
                <div className="header-icon">               
                <LiveTvIcon/>
                <p>Verified</p>
                </div>
                <div className="header-icon">                <VideoLibraryIcon/>
                <p>Collections</p>
                </div>
                <div className="header-icon">                
                <SearchIcon/>
                <p>Search</p>
                </div>
                <div className="header-icon">               
                <PersonOutLineIcon/>
                <p>Account</p>
                </div>  
                
                </div>
                <img src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png" alt=""></img>
          
            
        </div>
    )
}

export default Header
