import React, { useState } from 'react';
import './App.css';
import ColorChanger from './ColorChanger';
import ShowColor from './ShowColor';

function App() {

  const [color, setColor] = useState('')
  const [textColor, setTextColor] = useState(true)


  return (
    
    <div className="App">
      
      <header className="App-header">

        <ShowColor 
          color={color}
          textColor={textColor}
        />

        <ColorChanger 
          color={color}
          setColor={setColor}
          textColor={textColor}
          setTextColor={setTextColor}
        />
      </header>
      
    </div>
  );
}

export default App;
