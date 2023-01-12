import React, {useState} from "react";
import ScalableImage from './ScalableImage';

function Image(){
    return (
        <>
            <a href="https://kyivcity.gov.ua" target="blank"><img alt="Kyiv" src="https://anga.ua/ifiles/images/kyiv/tsikavi_fakty_pro_kyiv/Screenshot_2(1).png" class="pic"/></a>

            <ScalableImage imgUrl="./images/kyiv_map.jpg" defaultWidth={500}/>
            <h3 style={{textAlign: 'center'}}>Books</h3>
        </>
    );
}

export default Image;