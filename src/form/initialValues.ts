const dailyValues = {
  milesWalked: 0,
  otherExercise: false,
  closedRings: false,
  closedExerciseRing: false,
  steps: false,
};

export type FormData = (typeof dailyValues)[];

export const initialValues = new Array(7).fill(dailyValues);
