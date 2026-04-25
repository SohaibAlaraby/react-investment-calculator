import { useState } from "react";

export default function Input({id,title,defaultValue,type = "number",getUserInput,negativeList}) {
    
    return (
        <div >
            <label htmlFor={id}>{title}</label>
            <input 
                type={type} 
                id={id} 
                defaultValue={defaultValue}
                onChange={(event)=> getUserInput(id,event.target.value)} 
                required/>
            {negativeList.has(id) && <p className="error">negative number is not allowed</p>}
        </div>
    );
}