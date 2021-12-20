import React, { useState,useEffect } from 'react';
import { Link } from "react-router-dom";
import "../../../styles/navStyle/homeNav.css"
import MoneyHolder from "../../smallHelper/moneyHolder"


function HomeNav(){
    let [university,setUniversity]=useState([{name:"University of Lagos"},{name:"University of Nigeria"},{name:"University of Ibadan"},{name:"Obafemi Awolowo University"},{name:"University of Port Harcourt"}])
    let [league,setLeague]=useState([{name:"Departmental league"},{name:"vc league"},{name:"faculty league"},{name:"fix match"}])
    let [selectUniversity,setSelectUniversity]=useState([])
    let [selectLeague,SetSelectLeague]=useState([])
    let [checkedState1,setCheckedState1]=useState(new Array (university.length).fill(false))
    let [checkedState2,setCheckedState2]=useState(new Array (league.length).fill(false))





    function changeStateUni(position,value){
    
        let updatedCheckedState=checkedState1.map((item,index)=>
            index===position?!item:item
        )
        setCheckedState1(updatedCheckedState)
        addSchool(value)
    }
    function changeStateLea(position,value){
    
        let updatedCheckedState=checkedState2.map((item,index)=>
            index===position?!item:item
        )
        setCheckedState2(updatedCheckedState)
        addLeague(value)
    }
   
    function addSchool(value){
        if(selectUniversity.includes(value)){
            let newSelectedUni=selectUniversity.filter((val)=>{
                return val !== value
            })
            setSelectUniversity(newSelectedUni)
        }
        else{
            setSelectUniversity(oldArray=>[...oldArray,value])
        }
      
    }
   
    function addLeague(value){
        if(selectLeague.includes(value)){
            let newSelectedLea=selectLeague.filter((val)=>{
                return val !== value
            })
            SetSelectLeague(newSelectedLea)
        }
        else{
            SetSelectLeague(oldArray=>[...oldArray,value])
        }
    }

    let schools=university.map((name,index)=>{
        return(
            <li key={name.name}> <input type="checkbox"  aria-checked={checkedState1[index]}  className="checkSchool"  checked={checkedState1[index]} onChange={()=>changeStateUni(index,name.name)}/> {name.name}</li>
        )
    })
    let leagues=league.map((name,index)=>{
        return(
            <li key={name.name}> <input type="checkbox"  aria-checked={checkedState2[index]}  className="checkLeague" checked={checkedState2[index]} onChange={()=>changeStateLea(index,name.name)} /> {name.name}</li>
        )
    })

    function selectedNav(position){
        let span=document.querySelectorAll('.span')
        for(let i=0; i<span.length; i++){
            const element=span[i];
            element.classList.remove("active")
        }
        span[position].classList.add("active")
      
    }
    useEffect(()=>{
    
    })

    return(
        <nav id="nav">
            <div id="nav__container1">
                <ul id="nav__container1__content">
                    <li  id="nav__container1__content__logo"> BetRich</li>
                    {true?
                        <li id="nav__container1__content__account">
                                 <div className="nav__container1__content__account_container nav__container1__content__account_container_1" id="nav__container1__content__account_container_1_id"><Link to="#" className="Link"><MoneyHolder/></Link></div>
                            <div className="nav__container1__content__account_container nav__container1__content__account_container_2" ><Link to="#" className="Link">Deposit</Link></div>
                        </li>
                        :
                        <li id="nav__container1__content__account">
                            <div className="nav__container1__content__account_container nav__container1__content__account_container_1"><Link to="#" className="Link">Register</Link></div>
                            <div className="nav__container1__content__account_container nav__container1__content__account_container_2"><Link to="#" className="Link">Login</Link></div>
                        </li>
                    }
                   
                </ul>
            </div>      

            <div id="nav__container2">
                <ul id="nav__container2__row2Nav">
                    <li><Link to="#" onClick={()=>selectedNav(0)} className="Link" >Home <span className="span  active"></span></Link></li>
                    <li>
                        <span   className="Link Link1" >
                                School
                            <ul className="nav__container2__row2Nav__school">
                                {schools}
                            </ul>
                            <span className="span" ></span>
                        </span>
                    </li>
                    
                    <li>
                        <span  className="Link Link2">
                                sport
                            <ul className="nav__container2__row2Nav__league">
                                {leagues}
                            </ul>
                            <span className="span" ></span>
                        </span>
                    </li>
                    <li><Link to="#" onClick={()=>selectedNav(3)} className="Link">LiveScore <span className="span"></span></Link></li>
                    <li><Link to="#" onClick={()=>selectedNav(4)} className="Link">p2p <span className="span"></span></Link></li>
                    <li><Link to="#" onClick={()=>selectedNav(5)} className="Link">Fixture <span className="span"></span></Link></li>
                    <li><Link to="#" onClick={()=>selectedNav(6)} className="Link">Profile <span className="span"></span></Link></li>
                </ul>
            </div>
        </nav>
    )
}
export default HomeNav;