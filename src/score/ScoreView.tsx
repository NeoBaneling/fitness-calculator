import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { useEffect, useState } from 'react';

const ScoreView = ({ score, reset }: { score: number; reset: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let timeout = undefined;
    if (isOpen) timeout = setTimeout(() => setIsOpen(false), 3000);
    return () => clearTimeout(timeout);
  }, [isOpen]);

  return (
    <>
      <Stack
        alignItems="center"
        justifyContent="center"
        spacing={2}
        paddingBottom={6}
      >
        <Typography variant="h2">You earned</Typography>
        <Tooltip
          open={isOpen}
          title="Copied to clipboard!"
          disableFocusListener
          disableHoverListener
          disableTouchListener
        >
          <Button
            onClick={() => {
              navigator.clipboard.writeText(`${score}`);
              setIsOpen(true);
            }}
          >
            <Typography variant="h1" paddingX={8}>
              {score}
            </Typography>
          </Button>
        </Tooltip>
      </Stack>
      <Stack
        direction="column"
        alignItems="flex-start"
        justifyContent="flex-start"
        spacing={4}
        paddingX={2}
      >
        <Button onClick={reset} variant="contained">
          Calculate Again
        </Button>
      </Stack>
    </>
  );
};

export default ScoreView;
