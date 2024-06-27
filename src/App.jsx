import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { actionMinus, actionPlus } from "../store/valueSlice/valueSlice";

function App() {
  const balance = useSelector((state) => {
    return state.value.balance;
  });
  const dispatch = useDispatch();

  const handlePlus = () => {
    dispatch(actionPlus(1));
  };

  const handleMinus = () => {
    dispatch(actionMinus(1));
  };
  return (
    <>
      <p>{balance}</p>
      <p>BALANCE</p>
      <button onClick={handlePlus}>+</button>
      <button onClick={handleMinus}>-</button>
    </>
  );
}

export default App;
