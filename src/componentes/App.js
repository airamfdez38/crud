import React, { useState } from 'react';
import './App.css';
import Create from './Create/Create.js';
import Read from './Read/Read.js';
import Delete from './Delete/Delete.js'

const initialElems = [
    { 
        text: 'Hacer TicTacToe', 
        done: true 
    },
    { 
        text: 'Hacer CRUD', 
        done: false 
    },
    { 
        text: 'Personalizar TicTacToe', 
        done: true 
    },
    { 
        text: 'Personalizar CRUD', 
        done: false 
    }
];

const App = () => {

  const [elems, setElems] = useState(initialElems)

  return(
    <div className="app">
    <h1>CRUD</h1>
    <Create  onNewElem = {elem => setElems([...elems, elem])}/>
    <Read elems = {elems} onElemsChange = {elems => setElems(elems)}/>
    <Delete elems = {elems} elemToDelete = {elem => setElems(elem)}/>
   
   
</div>
  )

};

export default App;
