import React, { useState } from 'react';

interface WordInputProps {
  onGuess: (guess: string) => void;
}

const WordInput: React.FC<WordInputProps> = ({ onGuess }) => {
  const [guess, setGuess] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (guess.trim() === '') return;
    onGuess(guess);
    setGuess('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your guess"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        required
      />
      <button type="submit">Guess</button>
    </form>
  );
};

export default WordInput;
