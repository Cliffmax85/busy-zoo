import './App.css';
import { useState } from 'react';
import AnimalList from './AnimalList';

function App() {
  const [animalArray, setAnimalArray] = useState(['snek', 'cow']);

  return (
    <div className="App">
      <AnimalList animals = {animalArray}/>
      <div className='buttons'>
        <button onClick={() => setAnimalArray([...animalArray, 'snek'])}>Snek</button>
        <button onClick={() => setAnimalArray([...animalArray, 't-rex'])}>T-Rex</button>
        <button onClick={() => setAnimalArray([...animalArray, 'cow'])}>Cow</button>
        <button onClick={() => setAnimalArray([...animalArray, 'ladybug'])}>Ladybug</button>
      </div>
      
    </div>
  );
}

export default App;
