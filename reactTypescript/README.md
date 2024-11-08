
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
## to create new react typescript project
npm create vite@latest reactTypescript

## go to the project and install dependenccy
npm install

## to start project
npm run dev


## Reacts Props
Props is a special keyword in React that stands for properties and is used for passing data from one component to another. Data with props are passed in a unidirectional flow from parent to child.

## how can we use Props

```
import CourseGoal from './components/CourseGoal';
function App() {
 return (
     <main>
       <CourseGoal
        title="learn React +TS"
        description ="Learn it from Technophile Firdous" > // we are passing data to CourseGoal Components which can be pickup by components using Props
        </CourseGoal>
     </main>
   )
 }
 export default App
 // in CourseGoal Components we can read this value by different ways

 //1. Using Objects
 export default function CourseGoal(props : {
    title : string,
    description : string
}){
    return <article>
        <div>
            <h2>
                {props.title}
            </h2>
            <p>{props.description}</p>
        </div>
        <button>DELETE</button>
    </article>
}

// 2. using destructuring
export default function CourseGoal({title,description} : {
    title : string,
    description : string
}){
    return <article>
        <div>
            <h2>
                {title}
            </h2>
            <p>{description}</p>
        </div>
        <button>DELETE</button>
    </article>
}
 ```
 ## Children in props
 Children lets you manipulate and transform the JSX you received as the children prop.
```
const mappedChildren = Children.map(children, child =>
  <div className="Row">
    {child}
  </div>
);
```

## Different way of reading Props and Childer together in Components



// if we want to use children to send data to components
```
import CourseGoal from './components/CourseGoal';
function App() {
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
```
## Now In component we can read it in different ways

1. using react default children using interface

```
interface CourseGoalProp{
    title : string;
    children : ReactNode
}
export default function CourseGoal({title,children} : CourseGoalProp){
    return <article>
        <div>
            <h2>
                {title}
            </h2>
            <p>{children}</p>
        </div>
        <button>DELETE</button>
    </article>
}
```
2. using react default children using type

```
type CourseGoalProp = PropsWithChildren<{title:string}>
export default function CourseGoal({title,children} : CourseGoalProp){
    return <article>
        <div>
            <h2>
                {title}
            </h2>
            <p>{children}</p>
        </div>
        <button>DELETE</button>
    </article>
}

```
3. another way of declaring react component function using arrow function

```
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
```

## how to send Objects to Props and read it in components

```

// if we want to use children to send data to components
import CourseGoal from './components/CourseGoal';
import Header from './components/Header';
import reactImg from './assets/react.svg';
function App() {
return (
  <main>
    <Header image={{src:reactImg,alt:'A List Of Goal'} }>
       <h1>Your Course Goals</h1>
    </Header>
    <CourseGoal
     title="learn React +TS"
    >
      <p>Learn it from Technophile Firdous</p>
      
     </CourseGoal>
  </main>
)
}

export default App
```
from here we can send image as object and read it in Header Component
```
import { type ReactNode } from "react"

interface HeaderProp{
    image :{ 
        alt :string;
        src : string;
    };
    children : ReactNode
 }
export default function Headers({image,children} : HeaderProp){
    return <header>
             <img src={image.src} alt={image.alt}/>
                {children}
            </header>
}
```

# Next Topic UseState state in react

## how to Read array and populate it by button click using UseState

step 1 : declare your data object type which will be there inside that array
// it can be simple one like string, number but for this part i had consider this as object of array
```
type CourseGoal = {
  title:string;
  description : string;
  id:number
}
```
step 2 : declare your useState
```
import { useState } from 'react';
 const [goals,setGoals] = useState<CourseGoal[]>([]); 
 // alternatively we can use useState<Array<CourseGoal>>([]);
 // if it was a string or number
 //  const [goals,setGoals] = useState("");  this would work

```
step 3 : Create a function which will consume the event and add the data into the goals array

```
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
```

step 4 : in HTML fire the event to add data and displait using map function

```
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

```

# How to Pass Array Of Object from One Component Into Another Using Props and useState

step1 : declare your property on parent page
```
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
```
we are passing goals from parent to CourseGoalList Components and goal props is an array ob object
of type CourseGoal

Now we need to Declare a type of array of CourseGoal type object 
we can do it by following way
```
// they way we can declare array of object types
type CourseGoalListProps = {
    goals : {
    title:string;
    description : string;
    id:number;
  }[]
};
```
now we can utalize it and create a property type to comsume it as props

```
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
```

# Pass Function Through Props

## we will try to pass function from 
app.tsx ->CourseGoalList -> Course Goal
we will declare Function in app.tsx 
and fire it from courseGoal.tsx components

step 1 create Function and app.tsx and pass it as props to child components
```
// delete Goals 
  // we have to pass this function to courseGoal components
  function handleDeleteGoal(id:number){
    setGoals(prevGoals => prevGoals.filter((goal)=> goal.id != id));
  }
  //passing it to courseGoalListComponents
    <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal}></CourseGoalList>
    // now we have pass the function from app.tsx to CourseGoalList Components
```
step2 : Now we will read the function in CourseGoalList as props and update type to receive props as function
```
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
```
step 3 : function been passed along with all required data to CourseGoalList components now we
need to passit to CourseGoal Components where the button is present
we will fire this function from there

```
//using react default children using type
type CourseGoalProp = PropsWithChildren<
                            {title:string;
                            onDelete:(id:number)=>void;
                            id:number
                        }>
export default function CourseGoal({title,onDelete,id,children} : CourseGoalProp){
    return (
    <>
        <div>
            <h2>
               {id}- {title}
            </h2>
            <p>{children}</p>
        </div>
        <button onClick={() => onDelete(id)}> DELETE</button>
    </>);
      
}
```

# add form in react typescript

```

export default function NewGoal(){
    function handlerSubmit(event: FormEvent<HTMLFormElement>){// react type for submit form FormEvent
        event.preventDefault();
        new FormData(event.currentTarget); // similar to javascript event.target
    }
    return ( <form onSubmit={handlerSubmit}>
        <p>
            <label htmlFor="goal">Your Goal</label>
            <input id="goal" type="text"></input>
        </p>
        <p>
            <label htmlFor="summary">Short Summary</label>
            <input id="summary" type="text"></input>
        </p>
        <p>
            <button>Add Goal</button>
        </p>
    </form>
    )
}
```
## using useRef to get data

```
import {useRef, type FormEvent } from "react";

export default function NewGoal(){
    const goal = useRef<HTMLInputElement>(null); // dafault its undefined to resolve it use null
    const summary = useRef<HTMLInputElement>(null);

    function handlerSubmit(event: FormEvent<HTMLFormElement>){// react type for submit form FormEvent
        event.preventDefault();
        new FormData(event.currentTarget); // similar to javascript event.target
        //to read goal of text
        const enteredGoal = goal.current!.value;
    }
    return ( <form onSubmit={handlerSubmit}>
        <p>
            <label htmlFor="goal">Your Goal</label>
            <input id="goal" type="text" ref={goal}></input>
        </p>
        <p>
            <label htmlFor="summary">Short Summary</label>
            <input id="summary" type="text" ref={summary}></input>
        </p>
        <p>
            <button>Add Goal</button>
        </p>
    </form>
    )
}
```
updated code to add goal using useRef

```
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
```
NewGoal Components code
```
import {useRef, type FormEvent } from "react";
type addGoalProps = {
    onAddGoal:(title:string,description:string)=>void; // the way we can declare function type
};
export default function NewGoal({onAddGoal}:addGoalProps){
   
    const goal = useRef<HTMLInputElement>(null); // dafault its undefined to resolve it use null
    const summary = useRef<HTMLInputElement>(null);

    function handlerSubmit(event: FormEvent<HTMLFormElement>){// react type for submit form FormEvent
        event.preventDefault();
        new FormData(event.currentTarget); // similar to javascript event.target
        //to read goal of text
        const enteredGoal = goal.current!.value;
        const enteredSummary = summary.current!.value;
        // to reset form
        event.currentTarget.reset(); // it will reset all form element data
        onAddGoal(enteredGoal,enteredSummary);
    }
    return ( <form onSubmit={handlerSubmit}>
        <p>
            <label htmlFor="goal">Your Goal </label>
            <input id="goal" type="text" ref={goal}></input>
        </p>
        <p>
            <label htmlFor="summary">Short Summary </label>
            <input id="summary" type="text" ref={summary}></input>
        </p>
        <p>
            <button>Add Goal</button>
        </p>
    </form>
    )
}

```
