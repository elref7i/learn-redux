import { useSelector } from 'react-redux';

export default function Home() {
  const { counter } = useSelector(function (store) {
    return store.counterReducer;
  });

  return (
    <>
      <div className="border-blue-400 p-3 border-2 border-solid">
        <h1 className="text-xl font-bold">Home Page {counter}</h1>
      </div>
    </>
  );
}
