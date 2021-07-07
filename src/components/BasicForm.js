import useInput from "../Hooks/useInput";

const BasicForm = () => {

   const {
     value: fName, 
     isValid: fNameIsValid, 
     valueBlurHandler: fNameBlurhandler, 
     valueChangeHandler: fNameHandler, 
     hasError: fNameError, reset: resetfName 
    } = useInput(fName =>   fName.trim() !== '');

    const {
      value:lName,
      isValid: lnameIsValid,
      valueBlurHandler:lnameBlurhandler,
      valueChangeHandler: lnameHandler,
      hasError: lNameError, reset: resetlName 
    } = useInput(lName => lName.trim() !== '');

    const {value: email, isValid: emailIsValid, valueChangeHandler: emailHandler, valueBlurHandler: emailBlurhandler, hasError: emailError, reset: emailReset } = useInput(email => email.trim() !== '' && email.includes('@'));


  let formIsValid = false;
  if(fNameIsValid && lnameIsValid && emailIsValid) {
    formIsValid = true;
  }

  let nameInputClass = fNameError ? 'form-control invalid'  : 'form-control';
  let lnameInputClass = lNameError ? 'form-control invalid'  : 'form-control';
  let emailInputClass = emailError ? 'form-control invalid'  : 'form-control';


  const submitHandler = (event) => {
    event.preventDefault();
    console.log({firstName: fName, lastName: lName, email: email})
    resetfName();
    resetlName();
    emailReset();

  }

  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={nameInputClass}>
          <label htmlFor='name'>First Name</label>
          <input type='text' name="firstName" id='name' value={fName} onChange={fNameHandler} onBlur={fNameBlurhandler}/>
          {fNameError && <span className="error-text">First Name Should Not Be Empty</span>}
        </div>
        <div className={lnameInputClass}>
          <label htmlFor='lName'>Last Name</label>
          <input type='text' name="lastName" id='lName' value={lName} onChange={lnameHandler} onBlur={lnameBlurhandler}/>
          {lNameError && <div> <span className="error-text">Last Name Should Not Be Empty</span> </div>}
        </div>

      <div className={emailInputClass}>
        <label htmlFor='email'>E-Mail Address</label>
        <input type='text' id='email' name="email" value={email} onChange={emailHandler} onBlur={emailBlurhandler}/>
        {emailError && <div> <span className="error-text">Please Enter A Valid Email</span> </div>}
      </div>
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
