import useInput from "../Hooks/useInput";

const SimpleInput = () => {

  const { value: enteredName, 
    isValid: enteredNameIsValid , 
    hasError: nameInputHasError, 
    valueChangeHandler: nameChangehandler, 
    valueBlurHandler: nameBlurHandler, 
    reset: nameReset } = useInput(name => name.trim() !== '');

  const { value: enteredEmail, 
    isValid: enteredEmailIsValid, 
    hasError: emailInputhasError, 
    valueChangeHandler: emailChangehandler, 
    valueBlurHandler: emailBlurHandler, 
    reset: emailReset } = useInput(email => email.trim() !== '' && email.includes('@'));

  let formIsValid = false;
  if(enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();
    if(!enteredNameIsValid) {
      return;
    }
    nameReset();
    emailReset();
  }

  let nameInputClasses =  nameInputHasError ? 'form-control invalid': 'form-control';
  let emailInputClasses = emailInputhasError ? 'form-control invalid' : 'form-control';
  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClasses}>
          <label htmlFor='name'>Your Name</label>
          <input type='text' id='name' onChange={nameChangehandler} value={enteredName} onBlur={nameBlurHandler}/>
          {nameInputHasError && <div><span className="error-text">Name should not be empty.</span> </div>}
      </div>
      <div className={emailInputClasses}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' value={enteredEmail} onChange={emailChangehandler} onBlur={emailBlurHandler}/>
          {emailInputhasError && <div><span className="error-text">Please enter a valid email</span> </div>}
      </div>
      <div className="form-actions">
          <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
