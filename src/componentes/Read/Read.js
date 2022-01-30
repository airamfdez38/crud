import React from 'react';
import Item from './Item.js'

const Read = ({elems, onElemsChange}) => (
    <ul className = "crud-list">
        {elems.map(({text, done}, i) => (
            <Item text = {text} done = {done} i = {i} 
                onDoneChange = {value => {
                    const updateElems = [...elems];
                    updateElems[i].done = value;
                    onElemsChange(updateElems);
                    
                }
                
            }/>
        ))}
    </ul>
);

export default Read;