import "./App.css";
import Account from "./Account";
import Bonus from "./Bonus";
import Reward from "./Reward";
import Admin from "./Admin";
import { useSelector } from "react-redux";

function App() {
  const amount = useSelector(state=>state.account.amount);
  const points = useSelector(state=>state.bonus.points);
  const rewards = useSelector(state=>state.reward.points);
  return (
    <div className="App">
      <h2> App.js Details</h2>
      <p>Amount: {amount}</p>
      <p>Bonus: {points}</p>
      <p>Reward: {rewards}</p>

      <Account />
      <Bonus />
      <Reward />
      <Admin />
    </div>
  );
}

export default App;
