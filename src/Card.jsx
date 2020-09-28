import React from 'react';
import './cardbox.css';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
const Card = (props) => {
  return(
      <div className = "box-card">
       <img src = {props.img} />
       <div className = "img">
           <div className = "left-img">
             <img src = {props.cion} />
           </div>
           <div className = "right-info">
           <font3> {props.title} </font3><br />
               <font>{props.videoby} <VerifiedUserIcon className = "icon"/></font><br />
               <font2>{props.view} &nbsp;-&nbsp; {props.date}</font2>
           </div>
       </div>
      </div>
  );
}

export default Card;