import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useLocalStore } from '../database/useLocalStore';
import Popup from '../popup/Popup';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ScoreView = () => {
  const [resetPopupOpen, setResetPopupOpen] = useState(false);
  const { score, resetScore } = useLocalStore();

  const navigate = useNavigate();

  return (
    <>
      <Popup
        open={resetPopupOpen}
        cancel={() => setResetPopupOpen(false)}
        submit={() => {
          resetScore();
          setResetPopupOpen(false);
        }}
      >
        <Typography variant="body1">
          Are you sure you want to wipe the bank?
        </Typography>
      </Popup>
      <Stack
        alignItems="center"
        justifyContent="center"
        spacing={4}
        paddingBottom={6}
      >
        <Typography variant="h1">Total score 🏆</Typography>

        <Typography variant="h1" paddingX={8}>
          {score}
        </Typography>
        <Button
          onClick={() => navigate('/form')}
          variant="contained"
          sx={{ height: '4rem' }}
        >
          Add to the fitness bank
        </Button>
        {!!score && (
          <Button
            onClick={() => navigate('/withdraw')}
            variant="outlined"
            sx={{ height: '4rem' }}
          >
            Withdraw from the bank
          </Button>
        )}
        <Stack direction="row" spacing={1}>
          <Button onClick={() => navigate('/set-score')} variant="outlined">
            Set score
          </Button>
          <Button
            disabled={!score}
            onClick={() => setResetPopupOpen(true)}
            variant="outlined"
          >
            Reset
          </Button>
        </Stack>
      </Stack>
    </>
  );
};

export default ScoreView;
