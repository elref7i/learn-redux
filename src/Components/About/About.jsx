import { useSelector } from 'react-redux';

export default function About() {
  const { counter } = useSelector(function (store) {
    //* انا برجع الحاجه اللى عايزها من المخزن فقط
    return store.counterReducer;
  });

  return (
    <>
      <div className="border-red-400 p-3 border-2 border-solid">
        <h1 className="text-xl font-bold">About Page {counter}</h1>
      </div>
    </>
  );
}
