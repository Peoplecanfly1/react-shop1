import React from "react";

export default function Button (props){
    const {btncart, outline, children} = props
    console.log(outline)
    return (
        <button
            className={`button ${btncart} ${outline ?
             "button--outline": "" }`} 
        >
            {children}
        </button>
        
    
    
    )
         
    



}