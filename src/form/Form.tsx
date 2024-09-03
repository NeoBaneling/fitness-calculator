import Typography from '@mui/material/Typography';
import LayoutContainer from '../layout/LayoutContainer';
import { Formik } from 'formik';
import { initialValues } from './initialValues';
import { calculateScore } from './helpers';
import { useLocalStore } from '../database/useLocalStore';
import DayFields from './DayFields';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router';

const Form = () => {
  const navigate = useNavigate();
  const { addToScore } = useLocalStore();
  const [currDay, setCurrDay] = useState(0);

  const isLastDay = currDay === 6;

  return (
    <LayoutContainer>
      <Typography variant="h1">Fitness Calculator 💪</Typography>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          addToScore(calculateScore(values));
          navigate('/');
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
  );
};

export default Form;
