import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';

const CarWidget = () => {
    return(
        <div className="App" style={{fontSize:"25px"}}>
            <FontAwesomeIcon icon={faCartShopping} />
        </div>

    )
}

export default CarWidget;