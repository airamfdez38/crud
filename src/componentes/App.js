import './App.css';
import Create from './Create/create.js';
import Read from './Read/read.js';

const elems = [
    {
        text: 'Hacer CRUD',
        done: true
    },
    {
        text: 'Personalizar CRUD',
        done: false
    }
]

const App = () => (
  <div className="App">
    <Create/>
    <Read elems={elems}/>
    <button className='crud-clear' type='button'>Borrar hechos</button>
  </div>
);

export default App;
