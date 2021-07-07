import { useReducer } from "react";


const initalInputState = {
    value: "",
    isTouched: false
}

const inputStateReducer = (state, action) => {

    if(action.type === "INPUT") {
        return {
            value: action.value, isTouched: state.isTouched
        }

    }
    if(action.type === "BLUR") {
        return {
            value: state.value, isTouched : true
        }
    }
    if(action.type === "RESET") {
        return {
            value:"",
            isTouched: false
        }

    }
    return initalInputState;
}


const useInput = (validate) => {

    const [inputState, dispathInputValueFn] = useReducer(inputStateReducer, initalInputState)
    
    const valueIsValid = validate(inputState.value);
    const hasError =  !valueIsValid && inputState.isTouched;

    const valueChangeHandler = (event) => {
      dispathInputValueFn({type: "INPUT", value: event.target.value})
      
    }
    const valueBlurHandler = () => {
        dispathInputValueFn({type:"BLUR"})
       
    }
    const reset = () => {
     dispathInputValueFn({type:"RESET"})
    }

    return {
        value: inputState.value,
        hasError,
        valueChangeHandler,
        valueBlurHandler,
        isValid: valueIsValid,
        reset
    }

}

export default useInput;