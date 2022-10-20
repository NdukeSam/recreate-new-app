import React from "react";



function HeroImg(props) {
    return (
            <img src={props.Img} alt="Hero" className={props.className}/>
        
    )
}

export default HeroImg;

