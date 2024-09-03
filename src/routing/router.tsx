import ScoreView from '../score/ScoreView';
import { createBrowserRouter } from 'react-router-dom';
import SetScore from '../score/SetScore';
import Withdraw from '../score/Withdraw';
import Form from '../form/Form';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <ScoreView openForm={() => {}} />,
      children: [
        {
          path: 'set-score',
          element: <SetScore />,
        },
        {
          path: 'withdraw',
          element: <Withdraw />,
        },
        {
          path: 'form',
          element: <Form />,
        },
      ],
    },
  ],
  { basename: '/fitness-calculator' }
);
