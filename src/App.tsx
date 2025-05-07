import React from 'react';

const App = () => {
  const scrambled = "elpap"; // scrambled 'apple'

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Guess the Word Game</h1>
      <h2>Scrambled Word: <code>{scrambled}</code></h2>
    </div>
  );
};

export default App;
