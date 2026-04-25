import { useState } from "react";

export default function Input({id,title,value,type = "number",getUserInput}) {
    
    return (
        <div >
            <label htmlFor={id}>{title}</label>
            <input 
                type={type} 
                id={id} 
                value={value}
                onChange={(event)=> getUserInput(id,event.target.value)} 
                required/>
        </div>
    );
}