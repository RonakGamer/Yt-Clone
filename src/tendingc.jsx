import React from 'react';
import './trending.css';
import Vbox from './vbox';
const Trendingc = () => {
    return(<div className = "tvideo">
    <div className = "cname">
    <img src = "https://yt3.ggpht.com/a/AATXAJwYyoaXZFpAuArPrlivotvVtySVNSmg5_TjFa9tPg=s900-c-k-c0xffffffff-no-rj-mo" />
        <h1>Rakazone Gaming</h1>
        </div>
        <div className = "vbox">
           <Vbox img = "https://i.ytimg.com/an_webp/iIJ3q0zW9f0/mqdefault_6s.webp?du=3000&sqp=CKSwrPsF&rs=AOn4CLDCwvLocFXAon8ny3uYrvpt5Os8Fw"
               h5 = "RakaZone Gaming Channel Trailer"
           />
           <Vbox img = "https://i.ytimg.com/an_webp/l4SH8QXinPo/mqdefault_6s.webp?du=3000&sqp=CPTfrPsF&rs=AOn4CLATDJ_shiMuvqAN97_Xr-5ADf-YPA" 
               h5 = "Watch Dogs 2 + Among US Live Stream"
           />
           <Vbox img = "https://i.ytimg.com/an_webp/p3XR8Lj85Ho/mqdefault_6s.webp?du=3000&sqp=CLS-rPsF&rs=AOn4CLCGs68D3ESi_Rb-9A4UAKp2OWuJQA"
               h5 = "Among Us Live Stream India #GameOnIntel"
           />
           <Vbox img = "https://i.ytimg.com/an_webp/g0SvNEWus9E/mqdefault_6s.webp?du=3000&sqp=CNKcrPsF&rs=AOn4CLDjwLI0sUck0Ye1nR-oNt-Ym3siqw"
               h5 = "Robbery In A Haunted House 😲😱"
           />
        </div>
    </div>);
}

export default Trendingc;