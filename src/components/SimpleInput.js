import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: nameInput,
    valueIsValid: nameIsValid,
    inputHasError: nameInputIsValid,
    valueInputHandler: nameInputHandler,
    valueBlurHandler: nameBlurHandler,
    resetValue: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: emailInput,
    valueIsValid: emailIsValid,
    inputHasError: emailInputIsValid,
    valueInputHandler: emailInputHandler,
    valueBlurHandler: emailBlurHandler,
    resetValue: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;
  if (nameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (!nameIsValid || !emailIsValid) {
      return;
    }
    console.log(nameInput, emailInput);
    resetNameInput();
    resetEmailInput();
  };

  const nameInvalidClass = nameInputIsValid
    ? "form-control invalid"
    : "form-control";

  const emailInvalidClass = emailInputIsValid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInvalidClass}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputHandler}
          onBlur={nameBlurHandler}
          value={nameInput}
        />
        {nameInputIsValid && <p>Please input valid name</p>}
      </div>
      <div className={emailInvalidClass}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={emailInputHandler}
          onBlur={emailBlurHandler}
          value={emailInput}
        />
        {emailInputIsValid && <p>Please input valid Email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
