import React from 'react';
import './trending.css';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import MovieIcon from '@material-ui/icons/Movie';

const Boxes = () => {
    return(
        <>
            <div className = "box-box">
    <ul>
        <li>
        <div className = "icon--box">
        <MusicNoteIcon className = "iconbox"/>
        </div>
        <h4>Music</h4>
        </li>
        <li>
        <div className = "icon--box">
        <VideogameAssetIcon className = "iconbox"/>
        </div>
        <h4>Gaming</h4>
        </li>
        <li>
        <div className = "icon--box">
        <AnnouncementIcon className = "iconbox"/>
        </div>
        <h4>News</h4>
        </li>
        <li>
        <div className = "icon--box">
        <MovieIcon className = "iconbox"/>
        </div>
        <h4> Movies</h4>
        </li>
    </ul>
    </div>
    <hr className = "newhr" />
    </>);
}
export default Boxes;
