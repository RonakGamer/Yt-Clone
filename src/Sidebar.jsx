import React from 'react';
import './sidebar.css';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import PersonalVideoIcon from '@material-ui/icons/PersonalVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import {NavLink} from 'react-router-dom';

const Sidebar = () => {
    return(
        <div className = "sidebar">
        <div className = "sideul">
        <ul>
        <NavLink activeClassName = "active" to = "/" exact className = "nav">
               <li>
               <HomeIcon className = "box"/>&nbsp;&nbsp;&nbsp;&nbsp;
                   home
               </li>
               </NavLink>
               <NavLink activeClassName = "active" to = "/trending" exact className = "nav">
               <li>
               
               <WhatshotIcon className = "box" />&nbsp;&nbsp;&nbsp;&nbsp;
                   Trending
                   
               </li>
               </NavLink>
               <NavLink activeClassName = "active" to = "/subscriptions" exact className = "nav">
               <li>
               
               <SubscriptionsIcon  className = "box"/>&nbsp;&nbsp;&nbsp;&nbsp;
                   Subscriptions
                   
               </li>
               </NavLink>
             
           </ul>
           <hr className = "hr"/>
           </div>
        </div>
    )
}

export default Sidebar;