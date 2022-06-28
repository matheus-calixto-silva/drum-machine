import React, { useEffect, useState } from 'react';
import DrumPad from './components/DrumPad/DrumPad';
import './App.css';

import api from './services/api';

function App() {
  const [sounds, setSounds] = useState([]);

  useEffect(() => {
    api.get('/sounds').then(({ data }) => {
      setSounds(data);
    });
  }, []);

  return (
    <div id='drum-machine'>
      <div id='pads'>
        {sounds.map(({ id, keyTrigger, url }) => (
          <DrumPad key={id} id={id} keyTrigger={keyTrigger} url={url} />
        ))}
      </div>
      <div id='display'></div>
    </div>
  );
}

export default App;
