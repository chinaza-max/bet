import React from 'react';
import HomeNav from "./Navs/homeNav";
import BottomNav from "./Navs/bottomNav";
import "../../styles/style.css";
import Slide from "../Home/slides"
//import {useParams} from "react-router-dom";

function Home(props){
   
    return(
        <div id="HomeContainer">
            <div id="HomeContainer__section1">
               <HomeNav/>
           </div>
           <div  id="HomeContainer__slide">
                <Slide/>
           </div>
          <BottomNav/>
        </div>
    )
}

export default Home;