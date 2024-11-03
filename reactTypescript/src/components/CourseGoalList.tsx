import CourseGoal from "./CourseGoal";
import { type CourseGoal as CGoalType} from '../App'

// the way we can declare array of object types
type CourseGoalListProps = {
    goals : CGoalType[],
    onDeleteGoal:(id:number)=>void; // the way we can declare function type
};

export default function CourseGoalList({goals,onDeleteGoal} : CourseGoalListProps ){
   return <ul>
        { goals.map((goal)=> (
            <li key={goal.id}>
            <CourseGoal
                title={goal.title}  onDelete={onDeleteGoal} id={goal.id}>
                <span>{goal.description}</span>
            </CourseGoal>
            </li>
        ))
        }
    </ul>
}