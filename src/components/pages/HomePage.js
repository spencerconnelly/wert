import React from 'react';
import {Link} from 'react-router-dom';
import {Label} from 'react-dom'
//import logo from '../resources/rocketry_logo.png'

const HomePage = () => (
    <div class="ui container">
        <div class="ui secondary pointing menu">
            <Link class="item active purple right" to="/" >Home</Link>
            <Link class="item" to="/mission">Our Mission</Link>
            <Link class="item" to="/team">The Team</Link>
            <Link class="item" to="/contact">Contact Us</Link>
        </div>
        <h1>Home Page</h1>
        <div />
        <Label image='https://photos-3.dropbox.com/t/2/AAD2T8raydgfpZXGcvNW-2fCQ6rq_q-AGe3PqvzE9lqA2g/12/125687111/png/32x32/3/1515042000/0/2/Logo%204800x2167.png/EJKW5mAYszIgAigC/3D-6PnjL7Fsy9f75jnc5DktkJam3-1-yZtNVbJe3MlU?dl=0&preserve_transparency=1&size=2048x1536&size_mode=3' />
        
        
    </div>
);

export default HomePage;