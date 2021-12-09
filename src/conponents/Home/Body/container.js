import "../../../styles/Body/container.css";
import {CachedIcon} from "../../materialUI/icons"


function Container(){
   
    return(
        <ul className="BodyContainer">
            <li className="BodyContainer__1 BodyContainer__a">
                
                <div className="BodyContainer__1__live">
                    <ul className="BodyContainer__1__container">
                        <li className="BodyContainer__1__container__a">FOOTBALL</li>
                        <li className="BodyContainer__1__container__a "><CachedIcon style={{"position":"absolute","top":"4px","right":"68px"}}/>REFRESH</li>
                    </ul>
                </div>
                <div className="BodyContainer__1__upComing">
                    <ul className="BodyContainer__1__container">
                        <li className="BodyContainer__1__container__a">FOOTBALL</li>
                        <li className="BodyContainer__1__container__a "><CachedIcon style={{"position":"absolute","top":"4px","right":"68px"}}/>REFRESH</li>
                    </ul>
                </div>

            </li>
            <li className="BodyContainer__2 BodyContainer__a"></li>
        </ul>
    )
}

export default Container;

/*
[
{
"id":"1",
"league":"Departmental",
"school":"University Of Nigeria",
"date":"30/11 Tuesday",
"time":"11:30,
"home":"computer science",
"away":"statistic",
"odd":{"1x2":[1.2,2,3],"goals":[[1.2,2.5,4,5,],[1.2,2.5,4,5,],[1.2,2.5,4,5,]]}
},
]*/