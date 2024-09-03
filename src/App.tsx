import { useState } from 'react';
import { initialValues } from './form/initialValues';
import { calculateScore } from './form/helpers';
import LayoutContainer from './layout/LayoutContainer';
import { Formik } from 'formik';
import Typography from '@mui/material/Typography';
import DayFields from './form/DayFields';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ScoreView from './score/ScoreView';

function App() {
  const [currDay, setCurrDay] = useState(0);
  const [score, setScore] = useState(0);

  const isLastDay = currDay === 6;

  return score ? (
    <ScoreView
      score={score}
      reset={() => {
        setScore(0);
        setCurrDay(0);
      }}
    />
  ) : (
    <LayoutContainer>
      <Typography variant="h1">Fitness Calculator 💪</Typography>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => setScore(calculateScore(values))}
      >
        {({ handleSubmit }) => (
          <>
            <DayFields day={currDay} />
            <Stack
              direction="row"
              alignItems="flex-start"
              justifyContent="space-between"
              sx={{ width: '100%' }}
            >
              <Button
                disabled={!currDay}
                onClick={() => setCurrDay(currDay - 1)}
                variant="contained"
              >
                Go back
              </Button>
              <Button
                onClick={() => {
                  isLastDay ? handleSubmit() : setCurrDay(currDay + 1);
                }}
                variant="contained"
              >
                {isLastDay ? 'Submit' : 'Next'}
              </Button>
            </Stack>
          </>
        )}
      </Formik>
    </LayoutContainer>
  );
}

export default App;
