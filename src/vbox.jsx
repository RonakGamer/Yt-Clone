import React from 'react';

const Vbox = (props) => {
    return (<div className = "v-box">
       <img src = {props.img}/>
       <h5>{props.h5}</h5>
    </div>);
}
export default Vbox;