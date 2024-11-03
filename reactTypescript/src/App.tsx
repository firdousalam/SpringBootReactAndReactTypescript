
import './App.css'
//import CourseGoal from './components/CourseGoal';
import Headers from './components/Header';
import reactImg from './assets/react.svg';
import { useState } from 'react';
import CourseGoalList from './components/CourseGoalList';
import NewGoal from './components/NewGoal';

// make this type as global
export type CourseGoal = {
  title:string;
  description : string;
  id:number
}

function App() {
  const [goals,setGoals] = useState<CourseGoal[]>([]); // alternatively we can use useState<Array<CourseGoal>>([]);
// to add new goals
  function handleAddGoal(title:string,description:string){

    setGoals(prevGoals =>{ // prevGoals contain all previous data of goals array
      const newGoal : CourseGoal = {
          id:Math.random(),
          title :title,
          description : description
      }
      return [...prevGoals,newGoal]; // adding newGoal into prevGoals array and return new array
    });
  }

  // delete Goals 
  // we have to pass this function to courseGoal components
  function handleDeleteGoal(id:number){
    setGoals(prevGoals => prevGoals.filter((goal)=> goal.id != id));
  }

  return (
    <main>
      <Headers image={{src:reactImg,alt:'A List Of Goal'} }>
        <h1>Your Course Goals</h1>
      </Headers>
      <NewGoal onAddGoal={handleAddGoal}/>
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal}></CourseGoalList>
    
    </main>
  )
}

export default App
