import React from 'react';
import Navbar from "../components/Navbar";
import '../App.css';
import VoteSurvey from './VoteSurvey';

const Home = () => {
    return (
        <>
            <Navbar />
            <VoteSurvey />
            <h1>Welcome to Your Home</h1>
        </>
    );
};

export default Home;
