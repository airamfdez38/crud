import React from "react";


const Read = () => {
    <ul className='crud-list'>
        {elems.map(({text,done}, i) => (
        <li className={`crud-list_item ${done? 'crud-list_item--done':''}`}>
            <label htmlFor={`e${i}`}>
                <input id={`e${i}`} type='checkbox' checked={done}/>
                {text}
            </label>
        </li> 
        ))}
    </ul>
}

export default Read;