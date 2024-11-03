
import './App.css'
//import CourseGoal from './components/CourseGoal';
import Headers from './components/Header';
import reactImg from './assets/react.svg';
import { useState } from 'react';
import CourseGoalList from './components/CourseGoalList';

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
      <CourseGoalList goals={goals}></CourseGoalList>
    
    </main>
  )
}

export default App
