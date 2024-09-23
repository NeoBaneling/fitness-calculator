import Typography from '@mui/material/Typography';
import { getDayText } from './helpers';
import { useField } from 'formik';
import FormField from './FormField';
import { useEffect } from 'react';

const DayFields = ({ day }: { day: number }) => {
  const field = (name: string) => `[${day}].${name}`;

  const [{ checked: closedAllRings }] = useField({
    name: field('closedRings'),
    type: 'checkbox',
  });

  const [{ checked: closedExerciseRing }, , { setValue: setExercise }] =
    useField({
      name: field('closedExerciseRing'),
      type: 'checkbox',
    });

  useEffect(() => {
    if (closedAllRings && closedExerciseRing) {
      setExercise(false);
    }
  }, [closedAllRings, closedExerciseRing]);

  return (
    <>
      <Typography variant="h2">{getDayText(day)}</Typography>
      <FormField name={field('milesWalked')} type="number">
        Number of miles walked (in exercise)
      </FormField>
      <FormField name={field('otherExercise')} type="checkbox">
        Did you complete 30 minutes of other exercise?
      </FormField>
      <FormField name={field('closedRings')} type="checkbox">
        Did you close your rings?
      </FormField>
      <FormField
        name={field('closedExerciseRing')}
        type="checkbox"
        disabled={closedAllRings}
      >
        Did you close your exercise ring?
      </FormField>
      <FormField name={field('steps')} type="checkbox">
        Did you get 10K steps?
      </FormField>
    </>
  );
};

export default DayFields;
