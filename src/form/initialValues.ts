const dailyValues = {
  milesWalked: 0,
  otherExercise: false,
  closedRings: false,
  closedExerciseRing: false,
  steps: false,
};

export const initialValues = new Array(7).fill(dailyValues);

const streakScore = (streak: number) => {
  if (streak === 7) return 7;
  if (streak >= 5) return 5;
  return 0;
};

export const calculateScore = (formData: (typeof dailyValues)[]): number => {
  let totalMiles = 0;
  let numClosedRings = 0;
  let numSteps = 0;

  let sum = formData.reduce(
    (
      score,
      { milesWalked, otherExercise, closedRings, closedExerciseRing, steps }
    ) => {
      totalMiles += milesWalked;

      if (otherExercise) score += 2;
      if (closedExerciseRing) score += 1;

      if (closedRings) numClosedRings++;
      if (steps) numSteps++;

      return score;
    },
    0
  );

  sum += Math.round(totalMiles);
  sum += streakScore(numClosedRings);
  sum += streakScore(numSteps);

  return sum;
};
