import CourseGoal from "./CourseGoal";

// they way we can declare array of object types
type CourseGoalListProps = {
    goals : {
    title:string;
    description : string;
    id:number;
  }[]
};

export default function CourseGoalList({goals} : CourseGoalListProps ){
   return <ul>
        { goals.map((goal)=> (
            <li key={goal.id}>
            <CourseGoal
                title={goal.title} >
                <span>{goal.description}</span>
            </CourseGoal>
            </li>
        ))
        }
    </ul>
}