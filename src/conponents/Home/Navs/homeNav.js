import React from 'react';
import { Link } from "react-router-dom";
import "../../../styles/navStyle/homeNav.css"


function HomeNav(){
    function selectedNav(position){
        let span=document.querySelectorAll('.span')
        for(let i=0; i<span.length; i++){
            const element=span[i];
            element.classList.remove("active")
        }
        span[position].classList.add("active")
    }
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
                    <li><Link to="#" onClick={()=>selectedNav(0)} className="Link" >Home <span className="span  active"></span></Link></li>
                    <li><Link to="#" onClick={()=>selectedNav(1)} className="Link" >Live <span className="span" ></span></Link></li>
                    <li><Link to="#" onClick={()=>selectedNav(2)} className="Link">League <span className="span" ></span></Link></li>
                    <li><Link to="#" onClick={()=>selectedNav(3)} className="Link">LiveScore <span className="span"></span></Link></li>
                    <li><Link to="#" onClick={()=>selectedNav(4)} className="Link">Blog <span className="span"></span></Link></li>
                    <li><Link to="#" onClick={()=>selectedNav(5)} className="Link">Fixture <span className="span"></span></Link></li>
                    <li><Link to="#" onClick={()=>selectedNav(6)} className="Link">Profile <span className="span"></span></Link></li>
                </ul>
            </div>
        </nav>
    )
}
export default HomeNav;