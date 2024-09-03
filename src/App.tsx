import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScoreView from './score/ScoreView';
import Form from './form/Form';
import Withdraw from './score/Withdraw';
import SetScore from './score/SetScore';

const App = () => {
  return (
    <BrowserRouter basename="/fitness-calculator">
      <Routes>
        <Route path="/" Component={ScoreView} />
        <Route path="/form" Component={Form} />
        <Route path="/set-score" Component={SetScore} />
        <Route path="withdraw" Component={Withdraw} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
