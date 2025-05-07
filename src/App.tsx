import React, { useState } from 'react';

const App = () => {
  const scrambled = "elpap"; // scrambled 'apple'
  const [userInput, setUserInput] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (userInput.toLowerCase() === 'apple') {
      setMessage('🎉 Correct! You guessed the word!');
    } else {
      setMessage('❌ Incorrect guess. Try again.');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Guess the Word Game</h1>
      <h2>Scrambled Word: <code>{scrambled}</code></h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userInput}
          onChange={handleInputChange}
          placeholder="Your guess"
        />
        <button type="submit">Guess</button>
      </form>

      <p>{message}</p>
    </div>
  );
};

export default App;
