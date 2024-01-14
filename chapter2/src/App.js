import { useSelector } from "react-redux";
import Amount from "./Amount";
import "./App.css";
import Bonus from "./Bonus";

//---> react-redux makes react app re-render when redux state changes.

function App() {
  const amount = useSelector((state) => state.account.amount); // to get access of states in store we use 'useSelector' hook
  const points = useSelector((state) => state.bonus.points);
  const account = useSelector((state) => state.account);
  return (
    <div className="App">
      {account.pending ? (
        <p>Amount Data Loading... </p>
      ) : account.error ? (
        <p>{account.error} </p>
      ) : (
        <p>Amount: {amount} </p>
      )}

      <p>Bonus:{points} </p>
      <Amount />
      <Bonus />
    </div>
  );
}

export default App;
