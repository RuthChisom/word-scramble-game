import React, { useState, useEffect } from 'react';
import { wordList } from './utils/wordList';
import { scrambleWord } from './utils/scramble';

const App = () => {
  const [currentWord, setCurrentWord] = useState({ word: '', hint: '' });
  const [scrambled, setScrambled] = useState('');
  const [userInput, setUserInput] = useState('');
  const [message, setMessage] = useState('');
  const [showNext, setShowNext] = useState(false);
  const [visible, setVisible] = useState(true);

  const getNewWord = () => {
    const randomIndex = Math.floor(Math.random() * wordList.length);
    const wordItem = wordList[randomIndex];
    setCurrentWord(wordItem);
    setScrambled(scrambleWord(wordItem.word));
    setMessage('');
    setShowNext(false);
    setVisible(true);
  };

  useEffect(() => {
    getNewWord();
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (userInput.toLowerCase() === currentWord.word.toLowerCase()) {
      setMessage('🎉 Correct! You guessed the word!');
      setShowNext(true);
    } else {
      setMessage('❌ Incorrect guess. Try again.');
    }
  };

  const handleNextWord = () => {
    setVisible(false);
    setShowNext(false);
    setMessage('');
    setTimeout(getNewWord, 1000);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Guess the Word Game</h1>

      {currentWord && visible && (
        <>
          <h2>Scrambled Word: <code>{scrambled}</code></h2>
          <p><strong>Hint:</strong> {currentWord.hint}</p>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={userInput}
              onChange={handleInputChange}
              placeholder="Your guess"
            />
            <button type="submit">Guess</button>
          </form>
        </>
      )}

      <p>{message}</p>

      {showNext && (
        <button onClick={handleNextWord} style={{ marginTop: '10px' }}>
          Next Word
        </button>
      )}
    </div>
  );
};

export default App;
