import React from 'react';
import './trending.css';
import Boxes from './boxes';
import Vides from './Vides';
import Trendingc from './tendingc';
const Trending = () => {
    return (<div className = "floatright">
       <Boxes />
       <Vides img = "https://i.ytimg.com/vi/Dcu8QrSC2RI/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCRTiDOPE5LN7pwUJSz3o174YIBKg"
           title = " GULZAAR CHHANIWALA - BABU DEGYA ( Official Video ) | Latest Haryanvi Song 2020"
           cdetails = " Gulzaar Chhaniwala - 8.5M views - 3 days Ago"
           desc = " Facebook https://www.facebook.com/GulzaarChhaniwala/ Instagram :- https://www.instagram.com/gulzaarchhaniwala/ For Live Show Booking Callus at: 8890817511"
       />
       <Vides 
           img = "https://i.ytimg.com/vi/Ig4Y9Ui-QQs/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDOThugMysVGezvEX3SjbcQ9iSToQ"
           title = " Team Yuzi Chahal v Team Virat Kohli | RCB Practice Match | Bold Diaries"
           cdetails = " Royal Challengers Bangalore - 3.3M views - 1 week Ago"
           desc = " With our 1st match just 4 days away, the team played a practice game where Team Chahal took on Team Kohli. #PlayBold #IPL2020 #WeAreChallengers #Dream11IPL"
       />
       <Vides 
           img = "https://i.ytimg.com/vi/pvPsJFRGleA/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLATFKmOVadrNIrdms2M3RJNVe0nww"
           title = " Justin Bieber - Holy ft. Chance The Rapper"
           cdetails = " Justin Bieber - 5.1M views - 11 hours Ago"
           desc = " Holy out now: https://JustinBieber.lnk.to/Holy The new era has begun for Justin Bieber with his first single HOLY featuring"
       /><br /><br />
               <hr className = "newhr" />
               <Trendingc />
    </div>);
}
export default Trending;