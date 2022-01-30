import React from "react";

const Delete = ({elemToDelete, elems}) => {
    
    return(
        <button 
            className="crud-clean"
            type="button"
            onClick={() => elemToDelete(elems.filter(elem => !elem.done))}>
            Borrar
        </button>
           
    )
}

export default Delete