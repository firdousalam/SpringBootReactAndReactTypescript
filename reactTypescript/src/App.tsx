
import './App.css'
import CourseGoal from './components/CourseGoal';
import Headers from './components/Header';
import reactImg from './assets/react.svg';
import { useState } from 'react';

type CourseGoal = {
  title:string;
  description : string;
  id:number
}
function App() {
  const [goals,setGoals] = useState<CourseGoal[]>([]); // alternatively we can use useState<Array<CourseGoal>>([]);

  function handleAddGoal(){

    setGoals(prevGoals =>{ // prevGoals contain all previous data of goals array
      const newGoal : CourseGoal = {
          id:Math.random(),
          title : "Learn React TS",
          description : "Learn it in depth"
      }
      return [...prevGoals,newGoal]; // adding newGoal into prevGoals array and return new array
    });
  }
  return (
    <main>
      <Headers image={{src:reactImg,alt:'A List Of Goal'} }>
        <h1>Your Course Goals</h1>
      </Headers>
      <button onClick={handleAddGoal}> Add Course Goals</button>
      <ul>
          { goals.map((goal)=> (
            <li key={goal.id}>
              <CourseGoal
                title={goal.title} >
                  <p>{goal.description}</p>
                </CourseGoal>
            </li>
          ))
          }
      </ul>
    
    </main>
  )
}

export default App
