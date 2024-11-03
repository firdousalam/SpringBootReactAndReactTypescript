
import './App.css'
import CourseGoal from './components/CourseGoal';
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
    <CourseGoal
     title="learn React +TS"
    >
      <p>Learn it from Technophile Firdous</p>
      
     </CourseGoal>
  </main>
)
}

export default App
