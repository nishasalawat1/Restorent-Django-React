import React, { Component } from 'react';
import CustomNavbar from './Navbar';

class Home extends Component {
    render() {
        return (
            <div>
               <CustomNavbar />
               <h2>Home component</h2> 
            </div>
        );
    }
}

export default Home;