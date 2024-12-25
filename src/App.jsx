import { Provider } from 'react-redux';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import { myStore } from './App/store';

function App() {
  return (
    <>
      <Provider store={myStore}>
        <div className="space-y-5 p-5">
          <Home />
          <About />
        </div>
      </Provider>
    </>
  );
}

export default App;
