// using object way
// export default function CourseGoal(props : {
//     title : string,
//     description : string
// }){
//     return <article>
//         <div>
//             <h2>
//                 {props.title}
//             </h2>
//             <p>{props.description}</p>
//         </div>
//         <button>DELETE</button>
//     </article>
// }

import { FC, type PropsWithChildren, type ReactNode } from "react";

//using destructuring
// export default function CourseGoal({title,description} : {
//     title : string,
//     description : string
// }){
//     return <article>
//         <div>
//             <h2>
//                 {title}
//             </h2>
//             <p>{description}</p>
//         </div>
//         <button>DELETE</button>
//     </article>
// }

//declaring type defination using types or interface
// type CourseGoalProp = {
//     title : string;
//     description : string
// }
// you can use Interface
// interface CourseGoalProp{
//     title : string;
//     description : string
// }
// export default function CourseGoal({title,description} : CourseGoalProp){
//     return <article>
//         <div>
//             <h2>
//                 {title}
//             </h2>
//             <p>{description}</p>
//         </div>
//         <button>DELETE</button>
//     </article>
// }


// // using react default children using interface
// interface CourseGoalProp{
//     title : string;
//     children : ReactNode
// }
// export default function CourseGoal({title,children} : CourseGoalProp){
//     return <article>
//         <div>
//             <h2>
//                 {title}
//             </h2>
//             <p>{children}</p>
//         </div>
//         <button>DELETE</button>
//     </article>
// }

// using react default children using type
// type CourseGoalProp = PropsWithChildren<{title:string}>
// export default function CourseGoal({title,children} : CourseGoalProp){
//     return <article>
//         <div>
//             <h2>
//                 {title}
//             </h2>
//             <p>{children}</p>
//         </div>
//         <button>DELETE</button>
//     </article>
// }

//another way of declaring react component function using arrow function
type CourseGoalProp = PropsWithChildren<{title:string}>
const CourseGoal : FC<CourseGoalProp> = ({title,children} )=>{
    return <article>
        <div>
            <h2>
              USING Arrow Function   {title}
            </h2>
            <p>{children}</p>
        </div>
        <button>DELETE</button>
    </article>
}
export default CourseGoal