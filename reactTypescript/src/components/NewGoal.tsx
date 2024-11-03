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