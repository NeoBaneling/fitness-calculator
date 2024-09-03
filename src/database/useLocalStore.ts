const key = 'score';

export const useLocalStore = () => {
  const score = parseInt(localStorage.getItem(key) ?? '0');

  const setScore = (newScore: number) =>
    localStorage.setItem(key, newScore.toString());

  const addToScore = (acc: number) => setScore(score + acc);
  const removeFromScore = (acc: number) => setScore(score - acc);

  const resetScore = () => localStorage.removeItem(key);

  return { addToScore, removeFromScore, resetScore, score, setScore };
};
