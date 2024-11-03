
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
