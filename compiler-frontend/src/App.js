import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Main } from './components/Main';
import { Buttons } from './components/Buttons';

function App() {
  const [data, setData] = useState(null);
   const [fetchData, setFetch] = useState(false);

   useEffect(() => {
      if (fetchData) {
         fetch('https://jsonplaceholder.typicode.com/todos/1')
         .then((response) => response.json())
         .then((data) => setData(data.title));
      }
   }, [fetchData]);
  return (

    <div className="App">
      <header className="App-header">
        <Buttons></Buttons>
        <h1>Hello</h1>
      </header>
      <Main>
        
      </Main>
      <h1>{data}</h1>
      <button onClick={() => setFetch(true)}>Fetch Data</button>
    </div>
  );
}

export default App;
