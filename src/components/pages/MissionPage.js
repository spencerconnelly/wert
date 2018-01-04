import React from 'react';
import {Link} from 'react-router-dom';

const MissionPage = () => (
    <div class="ui container">
        <div class="ui secondary pointing menu">
            <Link class="item right" to="/">Home</Link>
            <Link class="item active purple" to="/mission">Our Mission</Link>
            <Link class="item" to="/team">The Team</Link>
            <Link class="item" to="/contact">Contact Us</Link>
        </div>
        <h1>Mission Page</h1>

    </div>
);

export default MissionPage;