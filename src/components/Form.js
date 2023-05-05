//import { useRef } from 'react';

import { useRef } from "react";

function Form() {

    // create refs for the two user inputs
    const nameRef = useRef();
    const programRef = useRef();

    function formSubmitHandler(event){
        event.preventDefault();

        const enteredName = nameRef.current.value;
        const chosenProgram = programRef.current.value;

        // display the inputted/chosen information
        console.log("Entered Name: " + enteredName);
        console.log("Chosen Program: " + chosenProgram);
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <div className="name-input">
                <label htmlFor="name">Your name: </label>
                <input type="text" id="name" ref={nameRef}></input>
            </div>
            <div className="program-input">
                <label htmlFor="program">Choose your program: </label>
                <select id="program" ref={programRef}>
                    <option value="basics">The Basics</option>
                    <option value="advanced">Advanced Concepts</option>
                    <option value="mastery">Mastery</option>
                </select>
            </div>
            <button>SUBMIT</button>
        </form>
    )

}

export default Form;