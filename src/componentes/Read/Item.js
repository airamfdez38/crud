import React from 'react';

const Item = ({elems, text, done, i, onDoneChange}) => (
    
    <li className={`crud-list__item ${done?"crud-list__item--done":""}`}>   
        <label htmlFor={`e${i}`}>
            <input id={`e${i}`}
             type="checkbox"
              checked={done}
              onChange={e => onDoneChange(e.target.checked)}
            />
                {text}
        </label>  
       
       
        <input 
            type="button"
            value="X"
            onClick={(e) => {
                const updateElems = [...elems];
                updateElems.splice(i, 1);
                onDoneChange(updateElems);
            }}
        /> 
        <input 
            type="button"
            value="Edit"
            onClick={(e) => {
                const updateElems = [...elems];
                updateElems.splice(i, 1);
                onDoneChange(updateElems);
            }}
        /> 
    </li>
);

export default Item;