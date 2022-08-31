import React, { useState } from 'react';
import './App.scss';
import PlayPage from './Components/PlayPage';
import StartPage from './Components/StartPage';
import reportWebVitals from './reportWebVitals';

function App() {
  const [play, setPlay] = useState(false);
  return (
    <>
      {play ? <PlayPage setPlay={setPlay} /> : <StartPage setPlay={setPlay} />}
    </>
  );
}

export default App;

//
reportWebVitals();
