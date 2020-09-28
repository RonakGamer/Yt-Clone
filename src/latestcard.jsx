import Latest from './Latest';
import React,{useEffect, useState} from 'react';
import './Latest.css';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { Style } from '@material-ui/icons';

const Latestcard = (props) => {
    const num = props.num
    const dislike = props.dislike
     const [num2,setnum] = useState(num);
     const [dlike,setdlike] = useState(dislike);
    const add = () => {
    setnum(num2 + 1);
    }
    const down = () => {
        setdlike(dlike - 1);
        }
    return(
        <div className = "lcard">
          <div className = "top">
              <img src = {props.cimg} />&nbsp;&nbsp;&nbsp;{props.cname} - {props.days}
          </div>
          <div className = "infoc">
          {props.quote} <br /><span>{props.span}</span>
          <img src = {props.pic} />
          <div className = "like-box">
          <IconButton>
              <ThumbUpAltIcon  onClick ={add} className = "icon"/>
              </IconButton>
      {num2}
              </div>
              <div className = "like-box">
              <IconButton>
              <ThumbDownIcon className = "icon" onClick = {down} className = "icon"/>
              </IconButton>
              {dlike}
              </div>   
          </div> 
        </div>
    )
}

export default Latestcard;