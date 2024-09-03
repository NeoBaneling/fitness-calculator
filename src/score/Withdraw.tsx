import { useNavigate } from 'react-router';
import { useLocalStore } from '../database/useLocalStore';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';

const Withdraw = () => {
  const navigate = useNavigate();
  const { removeFromScore } = useLocalStore();
  const [newScore, setNewScore] = useState(0);

  return (
    <Stack
      direction="column"
      spacing={2}
      alignItems="center"
      justifyContent="center"
    >
      <Typography variant="h1">Withdraw from the bank</Typography>
      <Input
        type="number"
        defaultValue={0}
        onChange={(e) => setNewScore(parseInt(e.target.value))}
      />
      <Button
        onClick={() => {
          removeFromScore(newScore);
          navigate('/');
        }}
        variant="contained"
      >
        Withdraw
      </Button>
    </Stack>
  );
};

export default Withdraw;
