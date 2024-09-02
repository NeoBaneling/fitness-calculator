import { PropsWithChildren } from 'react';
import Stack from '@mui/material/Stack';

const LayoutContainer = ({ children }: PropsWithChildren) => {
  return (
    <Stack
      direction="column"
      spacing={2}
      alignItems="flex-start"
      justifyContent="flex-start"
      paddingX={2}
    >
      {children}
    </Stack>
  );
};

export default LayoutContainer;
