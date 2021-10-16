import React from 'react';
import { Link } from "react-router-dom";
import "../../../styles/navStyle/bottomNav.css"
import {HomeIcon,BookmarksIcon,AttachMoneyIcon,PersonIcon} from "../../materialUI/icons"





function bottomNav(){
    function selectedNavB(position){
        let span=document.querySelectorAll('.bottomNav__Link')
        for(let i=0; i<span.length; i++){
            const element=span[i];
            element.classList.remove("active")
        }
        span[position].classList.add("active")
    }



    return(
        <ul className="bottomNav">
            <li>
                <Link to={"#"} onClick={()=>selectedNavB(0)} className="bottomNav__Link active">
                    <span><HomeIcon/></span>
                    <span>Home</span>
                </Link>
            </li>  
            <li>
                <Link to={"#"} onClick={()=>selectedNavB(1)} className="bottomNav__Link">
                    <span><BookmarksIcon/></span>
                    <span>LoadCode</span>
                </Link>
            </li>
            <li>
                <Link to={"#"} onClick={()=>selectedNavB(2)} className="bottomNav__Link">
                    <span><AttachMoneyIcon/></span>
                    <span>Bets</span>
                </Link>
              
            </li>
            <li>
                <Link to={"#"} onClick={()=>selectedNavB(3)} className="bottomNav__Link">
                    <span><PersonIcon/></span>
                    <span>Profile</span>
                </Link>
            </li>
        </ul>
    )
}

export default bottomNav;