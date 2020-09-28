import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Banner from './Banner';
import Cardbox from './Cardbox';
import Latest from './Latest';

const Home = () => {
    return (
        <>
        <Sidebar />
        <div className = "float-right">
        <Banner />
        <Cardbox />
        <hr className = "hr2" />
        <Latest />
        <hr className = "hr2" />
        <Cardbox />
        </div>
        </>
    )
}
export default Home;