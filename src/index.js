import React from  "react";
import ReactDOM from "react-dom";
 import Text from "./Text.js";
 import "./styles.css";
import faker from 'faker';



const App =()=>
{
    return(
        <div>
            <Text tag="Name" name="Lalitha" sec="devi"  thir="gudivada" four="Mithali"
            a="student"  b="crickter"/>
        </div>
    )
};




ReactDOM.render(
   <>
    <App />
   </>,
    
   document.getElementById("root")

);




