import React from 'react';
import {Link} from 'react-router-dom';

const ContactPage = () => (
    <div class="ui container">
        <div class="ui secondary pointing menu">
            <Link class="item right" to="/">Home</Link>
            <Link class="item" to="/mission">Our Mission</Link>
            <Link class="item" to="/team">The Team</Link>
            <Link class="item active purple" to="/contact">Contact Us</Link>
        </div>
        <h1>Contact Page</h1>
    </div>
);

export default ContactPage;