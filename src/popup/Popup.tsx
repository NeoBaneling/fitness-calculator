import { PropsWithChildren } from 'react';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Popup = ({
  open,
  children,
  cancel,
  submit,
}: {
  open: boolean;
  cancel: () => void;
  submit: () => void;
} & PropsWithChildren) => {
  return (
    <Dialog open={open} onClose={cancel}>
      <Stack direction="column" spacing={4} sx={{ padding: 2 }}>
        {children}
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          justifyContent="flex-end"
        >
          <Button onClick={cancel} variant="outlined">
            Cancel
          </Button>
          <Button onClick={submit} variant="contained">
            Confirm
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default Popup;
