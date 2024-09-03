import { FormData } from './initialValues';

export const getDayText = (day: number) =>
  [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ][day];

const streakScore = (streak: number) => {
  if (streak === 7) return 7;
  if (streak >= 5) return 5;
  return 0;
};

export const calculateScore = (formData: FormData): number => {
  let numClosedRings = 0;
  let numSteps = 0;

  let sum = formData.reduce(
    (
      score,
      { milesWalked, otherExercise, closedRings, closedExerciseRing, steps }
    ) => {
      score += Math.floor(milesWalked);

      if (otherExercise) score += 2;
      if (closedExerciseRing) score += 1;

      if (closedRings) numClosedRings++;
      if (steps) numSteps++;

      return score;
    },
    0
  );

  sum += streakScore(numClosedRings);
  sum += streakScore(numSteps);

  return sum;
};
