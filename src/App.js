import logo from './logo.svg';
import './App.css';
import { useRef } from 'react';

function App() {
  let h1ele = useRef("Hello World");
  return (
    <div>
      <h1 ref={h1ele} className="blue">Using Useref</h1>
      <button onClick={() => {
        h1ele.current.classList.toggle("orange");
      }}>Change</button>
    </div>
  );
}

export default App;
