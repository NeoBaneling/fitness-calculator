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
import { useLocalStore } from './database/useLocalStore';

function App() {
  const { addToScore } = useLocalStore();

  const [currDay, setCurrDay] = useState(0);
  const [formActive, setFormActive] = useState(false);

  const isLastDay = currDay === 6;

  return formActive ? (
    <LayoutContainer>
      <Typography variant="h1">Fitness Calculator 💪</Typography>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          addToScore(calculateScore(values));
          setFormActive(false);
        }}
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
  ) : (
    <ScoreView
      openForm={() => {
        setFormActive(true);
        setCurrDay(0);
      }}
    />
  );
}

export default App;
