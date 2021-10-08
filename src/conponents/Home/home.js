import React from 'react';
import HomeNav from "./Navs/homeNav"
import "../../styles/style.css"
//import {useParams} from "react-router-dom";


function Home(props){
   
   
   
    return(
        <div id="HomeContainer">
            <div id="HomeContainer__section1">
               <HomeNav/>
           </div>
     
        </div>
    )
}

export default Home