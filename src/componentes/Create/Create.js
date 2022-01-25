import React, { useState } from "react";

const Create = ({onNewElem}) => {
    
    const [newElemText, setNewElemText] = useState('');

    return (
        <fieldset className = "crud-input">
            <legend className = "crud-input__label">Nuevo elemento</legend>
            <input className = "crud-input__input"
            value = {newElemText}
            onChange = {e => setNewElemText(e.target.value)}
            onKeyUp = {
                (e) => {
                    if(e.key === 'Enter' && newElemText.length){
                        onNewElem({done:false, text: newElemText});
                        setNewElemText('');
                    }
                }
            }
            placeholder = "Introduzca el elemento" />

        </fieldset>)
    
};

export default Create;