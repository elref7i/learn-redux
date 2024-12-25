import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../App/Counter.slice';

export default function About() {
  const { counter } = useSelector(function (store) {
    //* انا برجع الحاجه اللى عايزها من المخزن فقط
    return store.counterReducer;
  });
  const { decrease } = actions;
  const dispatch = useDispatch();
  return (
    <>
      <div className="border-red-400 p-3 border-2 border-solid">
        <h1 className="text-xl font-bold">About Page {counter}</h1>
        <button
          onClick={() => {
            dispatch(decrease(5));
          }}
          className="bg-red-500 text-white p-3 rounded-lg text-lg px-3 py-2 my-4"
        >
          +1
        </button>
      </div>
    </>
  );
}
