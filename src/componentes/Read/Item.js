import React from 'react';

const Item = ({text, done, i}) => (
    <li className={`crud-list__item ${done?"crud-list__item--done":""}`}>   
        <label htmlFor={`e${i}`}>
            <input id={`e${i}`} type="checkbox" checked={done}/>
                {text}
        </label>
    </li>
);

export default Item;