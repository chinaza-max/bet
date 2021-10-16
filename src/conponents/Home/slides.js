import "../../styles/slide.css"
import {DoubleArrowIcon} from "../materialUI/icons"
import {useEffect, useState } from 'react';
import img1 from "../../images/football5.jfif";
import img2 from "../../images/football3.jfif"
import img3 from "../../images/football2.jfif"
let slideIndex=0;


function Slide(){
    const[position,setPosition]=useState("")
    const[width,setWidth]=useState()

    
    function Plusslide(Position){ 
        let dots=document.querySelectorAll(".slideConatiner__containerDOT span");
        
        slideIndex+=Position
       if(slideIndex>width){
            slideIndex=1;
        }
        else if(slideIndex<1){  
            slideIndex=width
        }
        for(let i=0; i<dots.length; i++){
            const element=dots[i];
            element.classList.remove("dot-active")
        }

        setPosition(`-${slideIndex-1}00%`);
        dots[slideIndex-1].classList.add("dot-active")
    }


    function dotSlide(Position){   
        let dots=document.querySelectorAll(".slideConatiner__containerDOT span");
        
        slideIndex+=Position
        if(slideIndex>width){
             slideIndex=1;
        }
        else if(slideIndex<1){  
             slideIndex=width
        }
        for(let i=0; i<dots.length; i++){
             const element=dots[i];
             element.classList.remove("dot-active")
        }
 
         setPosition(`-${slideIndex-1}00%`);
         dots[slideIndex-1].classList.add("dot-active")
    }

    useEffect(()=>{
        let slide=document.querySelectorAll(".slideConatiner__container__items");
        setWidth(slide.length)
        let slider=document.querySelector(".slideConatiner");
        
        function showslide(){
            let dots=document.querySelectorAll(".slideConatiner__containerDOT span");
          
        
            if(slideIndex>=width){
                slideIndex=0;
            }
            else if(slideIndex<0){  
                slideIndex=width-1
            }

            for(let i=0; i<dots.length; i++){
                const element=dots[i];
                element.classList.remove("dot-active")
            }
            if(slideIndex<3){
                setPosition(`-${slideIndex}00%`);
                dots[slideIndex].classList.add("dot-active")
            }
            slideIndex++;
        }
        
        let interval=window.setInterval(()=>{
            showslide();
        },1000)

        slider.addEventListener("mouseover",()=>{
            window.clearInterval(interval)
        })

        slider.addEventListener("mouseout",()=>{
            interval=window.setInterval(()=>{
            
                showslide();
            },1000)
        })
        return()=> { window.clearInterval(interval); }
    },[width])
    return(
        <div className="slideConatiner">
            <ul className="slideConatiner__container" style={{left:position}}>
                <li className="slideConatiner__container__items">
                    <img src={img1} alt=""/>
                </li>
                <li className="slideConatiner__container__items">
                    <img src={img2} alt=""/>
                </li>
                <li className="slideConatiner__container__items">
                    <img src={img3} alt=""/>
                </li>
            </ul>
           <span className="slideConatiner__left" onClick={()=>Plusslide(-1)}>
               <DoubleArrowIcon/>
           </span>
           <span className="slideConatiner__right"  onClick={()=>Plusslide(1)}>
               <DoubleArrowIcon/>
           </span>
            <div  className="slideConatiner__containerDOT">
                <span className="slideConatiner__container__dot" onClick={()=>dotSlide(1)}></span>
                <span className="slideConatiner__container__dot" onClick={()=>dotSlide(2)}></span>
                <span className="slideConatiner__container__dot" onClick={()=>dotSlide(3)}></span>
            </div>
        </div>
    ) 
}

export  default Slide