import React,{useState} from 'react';
import Person from './Person/Person';
import './App.css';

function App() {
  const [personState,setPersonState] = useState({
    persons:[
      {name:'Aswa', age:29},
      {name:'Neetha', age:29},
      {name:'Arun', age:33}
    ],
    otherState:'Some other value'
  });

  const switchHandler = ()=> {
    setPersonState({
      persons:[
        {name:'Aswanth', age:29},
        {name:'Neetha', age:29},
        {name:'Arun', age:33}
      ],
      otherState:'Some other value'
    });
  };

  return (
    <div className="App">
      <h1>This is React App</h1>
      <button onClick={switchHandler}>Switch Name</button>
      <Person name={personState.persons[0].name} age={personState.persons[0].age}/>
      <Person name={personState.persons[1].name} age={personState.persons[1].age}>Hobbies: Racing</Person>
      <Person name={personState.persons[2].name} age={personState.persons[2].age}/>
    </div>
  );
}

export default App;
