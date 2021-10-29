import "../../styles/slide.css"
import {DoubleArrowIcon} from "../materialUI/icons"
import {useEffect, useState } from 'react';
import img1 from "../../images/football5.jfif";
import img2 from "../../images/football3.jfif"
import img3 from "../../images/football2.jfif"

function Slide(props){
    const[position,setPosition]=useState("")
    const[width,setWidth]=useState()
    const[slideIndex,setSlideIndex]=useState(0)
    
    function Plusslide(){ 
        setSlideIndex(slideIndex===width-1?0:slideIndex+1)
    }

    function minusslide(){ 
        setSlideIndex(slideIndex===0?width-1:slideIndex-1)
    }
    

    function dotSlide(Position){   
        setSlideIndex(Position)
    }

    useEffect(()=>{
        let slide=document.querySelectorAll(".slideConatiner__container__items");
        setWidth(slide.length)
        //let slider=document.querySelector(".slideConatiner");
        //let dot=document.querySelector(".slideConatiner__containerDOT");
        let dots=document.querySelectorAll(".slideConatiner__containerDOT span");

        function showslide(){
            
            setSlideIndex(slideIndex===width-1?0:slideIndex+1)

          /*  for(let i=0; i<dots.length; i++){
                const element=dots[i];
                element.classList.remove("dot-active")
            }
          
            setPosition(`-${slideIndex-1}00%`);
            dots[slideIndex-1].classList.add("dot-active")*/
            
        }
        for(let i=0; i<dots.length; i++){
            const element=dots[i];
            element.classList.remove("dot-active")
        }
        setPosition(`-${slideIndex}00%`);

        dots[slideIndex].classList.add("dot-active")
        let interval=window.setInterval(()=>{
            
            showslide();
        },5000)
/*
        slider.addEventListener("mouseover",()=>{
            window.clearInterval(interval)
        })

        slider.addEventListener("mouseout",()=>{
            interval=window.setInterval(()=>{
            
                showslide();
            },5000)
        })
        */
        return()=> { window.clearInterval(interval); }
    },[width,slideIndex])
    return(
        <div className="slideConatiner">
            <ul className="slideConatiner__container" style={{left:position}}>
                <li className="slideConatiner__container__items">
                    <img src={props.imageP.image1} alt=""/>
                </li>
                <li className="slideConatiner__container__items">
                    <img src={props.imageP.image2} alt=""/>
                </li>
                <li className="slideConatiner__container__items">
                    <img src={props.imageP.image3} alt=""/>
                </li>
            </ul>
           <span className="slideConatiner__left" onClick={()=>minusslide()}>
               <DoubleArrowIcon/>
           </span>
           <span className="slideConatiner__right"  onClick={()=>Plusslide()}>
               <DoubleArrowIcon/>
           </span>
            <div  className="slideConatiner__containerDOT">
                <span className="slideConatiner__container__dot" onClick={()=>dotSlide(0)}></span>
                <span className="slideConatiner__container__dot" onClick={()=>dotSlide(1)}></span>
                <span className="slideConatiner__container__dot" onClick={()=>dotSlide(2)}></span>
            </div>
        </div>
    ) 
}

export  default Slide