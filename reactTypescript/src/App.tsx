
import './App.css'
import CourseGoal from './components/CourseGoal';
import Headers from './components/Header';
import reactImg from './assets/react.svg';
function App() {
 

//   return (
//     <main>
//       <CourseGoal
//        title="learn React +TS"
//        description ="Learn it from Technophile Firdous" >

//        </CourseGoal>
//     </main>
//   )
// }

// if we want to use children to send data to components
return (
  <main>
    <Headers image={{src:reactImg,alt:'A List Of Goal'} }>
       <h1>Your Course Goals</h1>
    </Headers>
    <CourseGoal
     title="learn React +TS"
    >
      <p>Learn it from Technophile Firdous</p>
      
     </CourseGoal>
  </main>
)
}

export default App
