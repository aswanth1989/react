import React from 'react';
import Person from './Person/Person';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>This is React App</h1>
      <Person name="Aswa" age="29"/>
      <Person name="Neetha" age="29">Hobbies: Racing</Person>
    </div>
  );
}

export default App;
