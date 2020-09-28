import React from 'react';
import './cardbox.css';
import Card from './Card';

const Cardbox = () => {
    return(
        <div className = "cardbox">
            <Card 
              img = "https://i.pinimg.com/originals/68/f2/9a/68f29a5da65ace8159029d7473594b14.jpg"
              title = "Mann Bharrya (Full Song) | B Praak | Jaani"
              videoby = "B Praak"
              cion = "https://static.toiimg.com/thumb/msid-74244860,imgsize-103620,width-800,height-600,resizemode-75/74244860.jpg"
              view = "2M Views"
              date = "2 years Ago"
            />
            <Card 
                img = "https://img.utdstc.com/screen/1/grand-theft-auto-v-wallpaper-005.jpg:800"
              title = "GTA V Live Stream | Ajao Jaldi Friends"
              videoby = "RakaZone Gaming"
              cion = "https://yt3.ggpht.com/a/AATXAJwYyoaXZFpAuArPrlivotvVtySVNSmg5_TjFa9tPg=s900-c-k-c0xffffffff-no-rj-mo"
              view = "1.6K Views"
              date = "6 Months Ago"
            />
            <Card 
                img = "https://i.ytimg.com/vi/yqTVAUfl2jo/maxresdefault.jpg"
              title = "FaZe Clan vs Team Spirit - ESL Pro League Season 12 "
              videoby = "ESL Pro League"
              cion = "https://about.eslgaming.com/wp-content/uploads/2019/02/ESL-ONE-logo.svg"
              view = "3.6M Views"
              date = "3 days Ago"
            />
            <Card 
                img = "https://i.ytimg.com/vi/2TDcgVI1cjM/maxresdefault.jpg"
              title = "The Kapil Sharma Show Season 2 - Desi Vibes"
              videoby = "Sony Digital"
              cion = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSByUDKLUi4J7Ioex7YXlcySTmP9YqcEThIMg&usqp=CAU"
              view = "196K Views"
              date = "1 year Ago"
            />
            <Card 
                img = "https://i.ytimg.com/vi/uQ763VvqiEM/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDh0Q_C7GKFnjCdFQBWNPTXlZaFOg"
              title = "Suit Full Video Song | Guru Randhawa Feat. Arjun | T-Series"
              videoby = "T-Series"
              cion = "https://yt3.ggpht.com/a/AATXAJzOcyc2UwB0vlV7SyfzwgU_La1FOFZmObW3HCH0VzM=s900-c-k-c0xffffffff-no-rj-mo"
              view = "425M Views"
              date = "4 years Ago"
            />
            <Card 
                img = "https://s2.dmcdn.net/v/LcFP51Pi3IOLAPk8y/x1080"
              title = "Ed Sheeran - Castle on the Hill (Live on the Honda Stage at the Abbey Road)"
              videoby = "Ed Sherren"
              cion = "https://i.ytimg.com/vi/Ix9NXVIbm2A/maxresdefault.jpg"
              view = "256M Views"
              date = "3 years Ago"
            />
        </div>
    )
}

export default Cardbox;