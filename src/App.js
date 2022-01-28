import './App.css';
import { useState } from 'react';
import AnimalList from './AnimalList';

function App() {
  const [animalArray, setAnimalArray] = useState(['snek', 'cow']);
  const [lionSize, setLionSize] = useState(10);
  const [unicornSize, setUnicornSize] = useState(10);

  return (
    <div className="App">
      <div className='fight'>
        <div className='unicorn'>
          <p style={{ fontSize: `${unicornSize}rem` }}>🦄</p>
          <button onClick={() => setUnicornSize(unicornSize + 1)}>Unicorns Always win</button>
          <button onClick={() => setLionSize(lionSize - 1)}>The Unicorn Attacks!</button>
        </div>
        <div className='lion'>
          <p style={{ fontSize: `${lionSize}rem` }}>🦁</p>
          <button onClick={() => setLionSize(lionSize + 1)}>The lion feasts!</button>
          <button onClick={() => setUnicornSize(unicornSize - 1)}>The lion bites!</button>
        </div>
      </div>
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
