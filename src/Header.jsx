import React from 'react';
import './index.css';
import YouTubeIcon from '@material-ui/icons/YouTube';
import SearchIcon from '@material-ui/icons/Search';
import PublishIcon from '@material-ui/icons/Publish';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
const Header = () => {
    return(
        <div className = "header">
        <div className = "logo">
            <YouTubeIcon className = "red"/>Youtube<sup>IN</sup>
            </div>
            <div className = "form">
                <input type = "name" placeholder = "Search" />
                <button><SearchIcon className = "icon"/></button>
            </div>
            <div className = "right">
            <ul>
            <li>
            <Tooltip title="Upload">
        <IconButton aria-label="Upload">
          <PublishIcon className = "white"/>
        </IconButton>
      </Tooltip>
      </li>
             <li>
             <Tooltip title="Youtube Apps">
        <IconButton aria-label="Youtube Apps">
             <AppsIcon className = "white"/>
             </IconButton>
      </Tooltip>
             </li>
             <li>
             <Tooltip title="Notification">
        <IconButton aria-label="Notification">
             <NotificationsIcon className = "white"/>
             </IconButton>
      </Tooltip>
             </li>
             <li>
             <img src = "https://i.pinimg.com/originals/68/68/96/686896b40e3a27747def196525f75fb2.jpg" alt = "account_img"/>
             </li>
             </ul>
            </div>
        </div>
    )
}

export default Header;