import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { decNumber, incNumber } from "./actions/index";

function App() {
  const prvState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <div className="bg-gray-200 min-h-screen">
      <h1 className="text-3xl text-center font-bold py-10">WELCOME TO REDUX</h1>
      <div className="container shadow-xl  bg-gray-300 mx-auto text-center rounded-lg p-10 w-1/2 ">
        <h2 className="text-xl font-semibold mb-3">
          Increment/Decrement Counter
        </h2>
        <h4 className=" font-semibold ">Using React and Redux</h4>
        <div className="py-8 rounded-lg bg-slate-300 shadow-md w-1/2 mx-auto mt-5 flex justify-center items-center ">
          <button
            title="Decrement"
            className="rounded-l-md  w-10 h-12  bg-slate-600 flex items-center justify-center text-yellow-50"
            onClick={() => dispatch(decNumber())}
          >
            <span>-</span>
          </button>

          <p className="flex items-center justify-center w-14 h-12  bg-slate-200">
            {prvState}
          </p>
          <button
            title="Increment"
            className="rounded-r-md  w-10 h-12  bg-slate-600 flex items-center justify-center text-yellow-50"
            onClick={() => dispatch(incNumber(5))}
          >
            <span>+</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
