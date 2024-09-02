import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Field } from 'formik';
import { PropsWithChildren } from 'react';

const FormField = ({
  name,
  children,
  type,
  disabled = false,
}: {
  name: string;
  type: 'checkbox' | 'number';
  disabled?: boolean;
} & PropsWithChildren) => {
  return (
    <Stack direction="row" spacing={1}>
      <Field name={name} type={type} disabled={disabled} />
      <Typography variant="subtitle1">{children}</Typography>
    </Stack>
  );
};

export default FormField;
