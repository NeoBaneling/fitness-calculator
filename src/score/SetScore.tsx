import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Input from '@mui/material/Input';
import { useNavigate } from 'react-router';
import Button from '@mui/material/Button';
import { useLocalStore } from '../database/useLocalStore';
import { useState } from 'react';

const SetScore = () => {
  const navigate = useNavigate();
  const { score, setScore } = useLocalStore();
  const [newScore, setNewScore] = useState(score);

  return (
    <Stack
      direction="column"
      spacing={2}
      alignItems="center"
      justifyContent="center"
    >
      <Typography variant="h1">Set your fitness score</Typography>
      <Input
        type="number"
        defaultValue={score}
        onChange={(e) => setNewScore(parseInt(e.target.value))}
      />
      <Button
        onClick={() => {
          setScore(newScore);
          navigate('/');
        }}
        variant="contained"
      >
        Set score
      </Button>
    </Stack>
  );
};

export default SetScore;
