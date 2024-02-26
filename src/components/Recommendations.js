import React from "react";

function Recommendations (){
    const currentMonth = new Date().getMonth()
    const isSpring = currentMonth >=2 && currentMonth <=5
    
    if (!isSpring) {
        return <div> Ce n'est pas le moment, rempoter</div>
    }
    return <div> C'est le printemps, rempotez ! </div>
}

export default Recommendations