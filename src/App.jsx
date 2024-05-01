// src/App.jsx
import { useState } from 'react';

import './App.css';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  console.log(isDarkMode);

  const handleDarkMode = () => {
    console.log("before setIsDarkMode is called: ", isDarkMode);
    console.log('Dark mode!');
    setIsDarkMode(true);
    console.log("after setIsDarkMode is called: ", isDarkMode);
  }

  const handleLightMode = () => {
    console.log('Light mode!');
    setIsDarkMode(false);
  }

  return (
    <>
      <div className={isDarkMode ? 'dark' : 'light'}>
        <h1>Hello world!</h1>
      </div>
      <div>
        <button onClick={handleDarkMode}>Dark Mode</button>
        <button onClick={handleLightMode}>Light Mode</button>
      </div>
    </>
  );
};

export default App;
