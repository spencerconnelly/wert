import React from 'react';
import {Link} from 'react-router-dom';

class MenuBar extends React.Component {
    constructor(props){
        super(props);
    }
  render() {
    let link1 = null, link2 = null, link3 = null, link4 = null, link5 = null;
    if(this.props.active == "1"){
        link1 = <Link class="item right active purple" to="/" >Home</Link>;
        link2 = <Link class="item" to="/mission" >Our Mission</Link>;
        link3 = <Link class="item" to="/team" >The Team</Link>;
        link4 = <Link class="item" to="/contact" >Contact Us</Link>;
        link5 = <Link class="item" to="/sponsors" >Sponsors</Link>;
    } else if(this.props.active == "2"){
        link1 = <Link class="item right" to="/" >Home</Link>;
        link2 = <Link class="item active purple" to="/mission" >Our Mission</Link>;
        link3 = <Link class="item" to="/team" >The Team</Link>;
        link4 = <Link class="item" to="/contact" >Contact Us</Link>;
        link5 = <Link class="item" to="/sponsors" >Sponsors</Link>;
    } else if(this.props.active == "3"){
        link1 = <Link class="item right" to="/" >Home</Link>;
        link2 = <Link class="item" to="/mission" >Our Mission</Link>;
        link3 = <Link class="item active purple" to="/team" >The Team</Link>;
        link4 = <Link class="item" to="/contact" >Contact Us</Link>;
        link5 = <Link class="item" to="/sponsors" >Sponsors</Link>;
    } else if(this.props.active == "4"){
        link1 = <Link class="item right" to="/" >Home</Link>;
        link2 = <Link class="item" to="/mission" >Our Mission</Link>;
        link3 = <Link class="item" to="/team" >The Team</Link>;
        link4 = <Link class="item active purple" to="/contact" >Contact Us</Link>;
        link5 = <Link class="item" to="/sponsors" >Sponsors</Link>;
    }
    else if(this.props.active == "5"){
        link1 = <Link class="item right" to="/" >Home</Link>;
        link2 = <Link class="item" to="/mission" >Our Mission</Link>;
        link3 = <Link class="item" to="/team" >The Team</Link>;
        link4 = <Link class="item" to="/contact" >Contact Us</Link>;
        link5 = <Link class="item active purple" to="/sponsors" >Sponsors</Link>;
    }
    return (
        <div class="ui secondary pointing menu">
            <div class="item">
                <img src={process.env.PUBLIC_URL + '/rocketry_logo.png'}  alt='logo' />
            </div>
            {link1}
            {link2}
            {link3}
            {link4} 
            {link5}  
        </div>);
  }
}

export default MenuBar;
