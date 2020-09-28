import React from 'react';
import './trending';
const Vides = (props) => {
    return(
        <>
        <div className = "video-box">
            <div className = "img">
              <img src = {props.img} />
            </div>
            <div className = "title">
           {props.title}
            </div>
            <div className = "cdetails">
           {props.cdetails}
            </div>
            <div className = "desc">
           {props.desc}
            </div>
        </div>

        </>
    )
}

export default Vides;