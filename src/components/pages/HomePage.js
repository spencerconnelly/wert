import React from 'react';
import {Link} from 'react-router-dom';
import {Label} from 'react-dom'
import MenuBar from '../nav/MenuBar';

const HomePage = () => (
    <div> 
        <MenuBar active="1"/>     
        <br/>
        <div class="ui container"> 
            <div class="ui two column relaxed grid">
                <div class="column">
                    <h1 class="ui huge header">Who are we?</h1>
                    Western Engineering Rocketry is the newest design team at Western University! <br />

                </div>
                <div class="column">
                    <img width='500' height='300' src={process.env.PUBLIC_URL + '/rocketry_logo_big.png'}  alt='logo' />
                </div>
            </div>
        </div>   
    </div>
);

export default HomePage;