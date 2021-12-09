import React from 'react';
import HomeNav from "./Navs/homeNav";
import Footer from "./Body/Footer";
import BottomNav from "./Navs/bottomNav";
import "../../styles/style.css";
import Slide from "../Home/slides";
import images from "../imagesForSlide";
import Container from "../Home/Body/container"

function Home(){
   
    return(
        <div id="HomeContainer">
            <div id="HomeContainer__section1">
               <HomeNav/>
           </div>
           <div id="HomeContainer__slide">
                <Slide imageP={images}/>
           </div>   
           <div id="HomeContainer__section3">
                
                <Container/>
           </div>  
         
           <Footer/>
          <BottomNav/>
        </div>
    )
}

export default Home;

//import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';