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

  const switchHandler = (newName)=> {
    setPersonState({
      persons:[
        {name:newName, age:29},
        {name:'Neetha', age:29},
        {name:'Arun', age:33}
      ],
      otherState:'Some other value'
    });
  };

  const namechangedHandler = (event) =>{
    setPersonState({
      persons:[
        {name:event.target.value, age:29},
        {name: event.target.value, age:29},
        {name:event.target.value, age:33}
      ],
      otherState:'Some other value'
    });
  };

const style = {
  backroundColor:'white',
  font:'inherit',
  border:'1px solid blue', 
  padding:'8px',
  cursor:'pointer'
};

  return (
    <div className="App">
      <h1>This is React App</h1>
      <button style={style}
      onClick={switchHandler.bind(this,'Aswanth M')}>Switch Name</button>
      <Person 
        name={personState.persons[0].name} 
        age={personState.persons[0].age}
        changed={namechangedHandler}/>
      <Person 
        name={personState.persons[1].name} 
        age={personState.persons[1].age}
        click={switchHandler.bind(this,'Aswanth Muthukrishnan')}
        changed={namechangedHandler}>Hobbies: Racing</Person>
      <Person 
        name={personState.persons[2].name} 
        age={personState.persons[2].age}
        changed={namechangedHandler}/>
    </div>
  );
}

export default App;
