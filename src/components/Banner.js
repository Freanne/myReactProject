import React from "react";
import '../styles/Banner.css';

import Recommendations from "./Recommendations";

 function Banner({children}){
    return <div className='lmj-banner'>{children}</div>
 }
 export default Banner;