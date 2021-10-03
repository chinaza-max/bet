import React from 'react';
import { Link } from "react-router-dom";

import "../../styles/style.css"
//import {useParams} from "react-router-dom";


function Home(props){
   
   
   
    return(
        <div id="HomeContainer">
            <div id="HomeContainer__section1">

                <nav id="HomeContainer__section1__nav">
                    <div id="HomeContainer__section1__nav__container1">
                        <Link to="#" id="logo">BetRich</Link>
                        <ul id="HomeContainer__section1__nav__container1__content">
                            <li><Link to="#" className="Link">NGN 0</Link></li>
                            <li><Link to="#" className="Link">Register</Link></li>
                            <li><Link to="#" className="Link">Login</Link></li>
                        </ul>
                    </div>      

                    <div id="HomeContainer__section1__container2">
                        <ul id="HomeContainer__section1__bottomNav">
                            <li><Link to="#" className="Link">Home <span id="active"></span></Link></li>
                            <li><Link to="#" className="Link">Live <span></span></Link></li>
                            <li><Link to="#" className="Link">League <span></span></Link></li>
                            <li><Link to="#" className="Link">Live Score <span></span></Link></li>
                            <li><Link to="#" className="Link">Blog <span></span></Link></li>
                            <li><Link to="#" className="Link">Fixture <span></span></Link></li>
                            <li><Link to="#" className="Link">Profile <span></span></Link></li>
                        </ul>
                    </div>

                </nav>
                <div  id="HomeContainer__section1__SlideContainer">
                        <div id="HomeContainer__section1__SlideContainer_center"></div>
                </div>
           </div>
        </div>
    )
}

export default Home