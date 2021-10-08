import React from 'react';
import { Link } from "react-router-dom";
import "../../../styles/navStyle/homeNav.css"


function HomeNav(){
    return(
        <nav id="nav">
            <div id="nav__container1">
                <ul id="nav__container1__content">
                    <li  id="nav__container1__content__logo"> BetRich</li>
                    <li id="nav__container1__content__account">
                            <div><Link to="#" className="Link">Register</Link></div>
                            <div><Link to="#" className="Link">Login</Link></div>
                    </li>
                </ul>
            </div>      

            <div id="nav__container2">
                <ul id="nav__container2__row2Nav">
                    <li><Link to="#" className="Link">Home <span id="active"></span></Link></li>
                    <li><Link to="#" className="Link">Live <span></span></Link></li>
                    <li><Link to="#" className="Link">League <span></span></Link></li>
                    <li><Link to="#" className="Link">LiveScore <span></span></Link></li>
                    <li><Link to="#" className="Link">Blog <span></span></Link></li>
                    <li><Link to="#" className="Link">Fixture <span></span></Link></li>
                    <li><Link to="#" className="Link">Profile <span></span></Link></li>
                </ul>
            </div>
        </nav>
    )
}
export default HomeNav;