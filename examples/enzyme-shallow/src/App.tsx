import React, { useState } from 'react';
import './App.css';
import List from './components/List';
import { IPerson } from './models/person';

interface IState {
  entries?: IPerson[];
}

function App() {
  const [state, setState] = useState<IState>();

  const _clickedMe = () => {
    setState({ entries: [{ name: 'John' }, { name: 'Paul' }] });
  };

  return (
    <div className="app">
      <button onClick={_clickedMe}>Click me</button>

      {state?.entries &&
        <List people={state.entries!} />
      }
    </div>
  );
}

export default App;
