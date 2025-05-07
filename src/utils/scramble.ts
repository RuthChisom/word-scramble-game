export function scrambleWord(word: string): string {
  if (!word || typeof word !== 'string') return '';
  return word
    .split('')
    .sort(() => Math.random() - 0.5)
    .join('');
}
