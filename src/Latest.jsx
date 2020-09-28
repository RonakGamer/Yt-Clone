import React from 'react';
import './Latest.css';
import Latestcard from './latestcard';

const Latest = () => {
    return(
        <div className = "latest">
        <h1>Latest Youtube Posts</h1>
        <Latestcard 
        cimg = "https://yt3.ggpht.com/a/AATXAJznbXyHYhWTkk1tGRpzugZw7lCHhXPVBl9Nh8OgaA=s32-c-k-c0x00ffffff-no-rj-mo"
        quote = "I secretly got married 😍"
        span = "https://youtu.be/-t5fawG5nUw﻿"
        pic = "https://yt3.ggpht.com/IwYoWgih_8uPtYYTet0l-CEfu_1Qtq43G_NJEssevFxmjykX0TsF2yk3Ea6yIS6aDDsC8HfZE63_z9g=s240-c-fcrop64=1,34650000c3f2ffff-nd-rwa"
        cname = "Davie504"
        days = "2 Days Ago"
        num = {102}
        dislike = "20"
        />
        <Latestcard 
             cimg = "https://yt3.ggpht.com/a/AATXAJz9I9MHR5rQWKh318jw7GVW7OZG31WOff7GgZBzFg=s32-c-k-c0x00ffffff-no-rj-mo"
        quote = "ENCE vs OG - ESL Pro League"
        span = "https://www.youtube.com/Hh3U"
        pic = "https://yt3.ggpht.com/8jv7MWB8HJoK3mK8OSgt4N2SJqBJN48aIYyD1sczjQTgHWAGUBkuhtKzH1f1RVi9hKp28FB_I_Je=s720-c-fcrop64=1,38000000c7ffffff-nd"
        cname = "Vladopard"
        days = "10 Hours Ago"
        num = {12}
        dislike = "20"
        />
        <Latestcard 
             cimg = "https://yt3.ggpht.com/a/AATXAJyf68VcsivsU153q_w1GBdx2dj65savpNx1eUDJ=s48-c-k-c0xffffffff-no-rj-mo"
        quote = "New video is already on channel🔥"
        span = "https://youtu.be/FG6xelv6MKI"
        pic = "https://yt3.ggpht.com/Ow1mjR-B5IOlKVUM--eV7JBbYsGzEpPQsVRBZMJi3dQY6uMrqljNM38pt4JiMzZYIOh7SYQ9FDXWjyw=s640-nd"
        cname = "Titans Volleyball"
        days = "22 hours ago"
        num = {120}
        dislike = "20"
        />
        <Latestcard 
             cimg = "https://yt3.ggpht.com/a/AATXAJxnFN9HfgKkAdzrqk88wiQrsNqfVo2S0QWljicYeg=s32-c-k-c0x00ffffff-no-rj-mo"
        quote = "Well isn't that a shame 🤷‍♂️🤷‍♂️"
        span = "https://youtu.be/F54a56sf4a"
        pic = "https://yt3.ggpht.com/bSEvhQSvFN5NnDrnW5wtxZhLZtjdrm8oI-HOAP4E-G0Ij9Za56S5BLo7qBpEAtyb-5FPNMb-DQqs=s1920-c-fcrop64=1,00000000ffffffff-nd"
        cname = "theScore esports"
        days = "1 Day Ago"
        num = {134}
        dislike = "20"
        />
        </div>
    )
}

export default Latest;