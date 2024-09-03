import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useLocalStore } from '../database/useLocalStore';

const ScoreView = ({ openForm }: { openForm: () => void }) => {
  const { score } = useLocalStore();

  return (
    <>
      <Stack
        alignItems="center"
        justifyContent="center"
        spacing={4}
        paddingBottom={6}
      >
        <Typography variant="h2">Total score 🏆</Typography>

        <Typography variant="h1" paddingX={8}>
          {score}
        </Typography>
        <Button onClick={openForm} variant="contained">
          Add to the fitness bank
        </Button>
      </Stack>
    </>
  );
};

export default ScoreView;
