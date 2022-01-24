import React from 'react';
import Item from './Item.js'

const Read = ({elems}) => (
    <ul className="crud-list">
        {elems.map(({text, done}, i) => (
            <Item text={text} done={done} i={i} />
        ))}
    </ul>
);

export default Read;