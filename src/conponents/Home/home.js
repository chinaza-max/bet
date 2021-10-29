import React from 'react';
import HomeNav from "./Navs/homeNav";
import BottomNav from "./Navs/bottomNav";
import "../../styles/style.css";
import Slide from "../Home/slides"
import images from "../imagesForSlide"

function Home(){
   
    return(
        <div id="HomeContainer">
            <div id="HomeContainer__section1">
               <HomeNav/>
           </div>
           <div  id="HomeContainer__slide">
                <Slide imageP={images}/>
           </div>
          <BottomNav/>
        </div>
    )
}

export default Home;