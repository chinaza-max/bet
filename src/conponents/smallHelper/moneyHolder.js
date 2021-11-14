import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import "../../styles/navStyle/smallHelper/moneyHolder.css";
import VisibilityIcon from '@mui/icons-material/Visibility';
import CachedTwoToneIcon from '@mui/icons-material/CachedTwoTone';
import { useState,useEffect } from 'react';

function MoneyHolder(props){
    const[Visibility,setVisibility]=useState("on")
    

    function visible(){
        console.log(Visibility)
        if(Visibility==="on"){
            window.localStorage.setItem('Visibility',"off");
            setVisibility("off")
        }
        else{
            setVisibility("on")
            window.localStorage.setItem('Visibility',"on");
        }
    }
    function refresh(){
        let element=document.querySelector(".amountConatainer_load")
        element.classList.toggle("refresh")

        setTimeout(()=>{
            element.classList.toggle("refresh")
        },5000)
    }
    useEffect(()=>{
        setVisibility(window.localStorage.getItem('Visibility'))
        
    },[])

    return(
        <div className="amountConatainer">
         
             <input type={Visibility==="off"?'password':''}
              value={"1200000"}  name="password" id="password" readOnly/>
             <span className="amountConatainer__icon">&#8358;</span>
            {Visibility==="off"?
                <span className="amountConatainer__vi" onClick={()=>{visible()}}>
                    <VisibilityOffIcon/>
                </span>
                 :
                <span className="amountConatainer__vi" onClick={()=>{visible()}}>
                    <VisibilityIcon/>
                </span>
            }

             <span className="amountConatainer_load" onClick={()=>{refresh()}}>
                <CachedTwoToneIcon />
            </span>
        </div>
    ) 
}

export  default MoneyHolder