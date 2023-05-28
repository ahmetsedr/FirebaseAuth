import React, { Component } from 'react';
import Navbar from "../components/Navbar"
import '../App.css';

export default class Home extends Component {
    render() {
        return (
            <>
                <Navbar />
                <h1>Welcome Your Home</h1>

            </>
        )
    }
}
