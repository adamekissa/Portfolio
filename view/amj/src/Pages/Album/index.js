import React from 'react';
import useDarkMode from 'use-dark-mode';
import Toggle from './Toggle';
import "./Album.css";

function Album() {
  const darkMode = useDarkMode(false);

  return (
    <div>
        <h1>Heyyyyyyy EEEEEEEEEEEEEEEEEEFLGJKBN KNJSCIOLKS</h1>
        <button type="button" onClick={darkMode.disable}>
        ☀
      </button>
      {/* <Toggle checked={darkMode.value} onChange={darkMode.toggle} /> */}
      <button type="button" onClick={darkMode.enable}>
        ☾
      </button>
      
    </div>
  );
};

export default Album;