import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../App/Counter.slice';

export default function Home() {
  const { counter } = useSelector(function (store) {
    return store.counterReducer;
  });
  const { increase } = actions;
  //* return Function
  const dispatch = useDispatch(increase);
  return (
    <>
      <div className="border-blue-400 p-3 border-2 border-solid">
        <h1 className="text-xl font-bold">Home Page {counter}</h1>
        <button
          onClick={() => {
            //* increase =? ActionCreator
            //* لما اعمل كول بيرجعلى اوبجكت الديسباتش محتاجاه
            //* دا اللى بيرجع بعد الكول {type:"",payload:fun}
            dispatch(increase(5));
          }}
          className="bg-green-500 text-white p-3 rounded-lg text-lg px-3 py-2 my-4"
        >
          +1
        </button>
      </div>
    </>
  );
}
