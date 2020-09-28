import React from 'react';

const Svbox = (props) => {
    return(
        <>
        <div className = "svbox">
            <img src = {props.img} />
            <h3>{props.title}</h3>
            <h4>{props.cname}</h4>
            <h5>{props.views} views - {props.ago} ago</h5>
        </div>
        </>
    );
}

export default Svbox;