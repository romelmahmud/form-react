import useBasicInput from "../hooks/use-basicInput";

const BasicForm = (props) => {
  const {
    value: fristNameInput,
    valueIsVaild: fristNameIsVaild,
    reset: fristNameReset,
    inputValueChangeHandler: fristNameInputChangeHandler,
    blurHandler: fristNameBlurHandler,
    inputValueIsValid: fristNameInputIsValid,
  } = useBasicInput((value) => value.trim() !== "");

  const {
    value: lastNameInput,
    valueIsVaild: lastNameIsVaild,
    reset: lastNameReset,
    inputValueChangeHandler: lastNameInputChangeHandler,
    blurHandler: lastNameBlurHandler,
    inputValueIsValid: lastNameInputIsValid,
  } = useBasicInput((value) => value.trim() !== "");

  const {
    value: emailInput,
    valueIsVaild: emailIsVaild,
    reset: emailReset,
    inputValueChangeHandler: emailInputChangeHandler,
    blurHandler: emailBlurHandler,
    inputValueIsValid: emailInputIsValid,
  } = useBasicInput((value) => value.includes("@"));

  const formSubmitHandler = (e) => {
    e.preventDefault();

    console.log(fristNameIsVaild, lastNameInput);
    fristNameReset();
    lastNameReset();
    emailReset();
  };

  const validNameInputClasss = fristNameInputIsValid
    ? "form-control invalid"
    : "form-control";

  const validLastNameInputClasss = lastNameInputIsValid
    ? "form-control invalid"
    : "form-control";

  const validEmailClasss = emailInputIsValid
    ? "form-control invalid"
    : "form-control";

  let formValid = false;
  if (fristNameIsVaild && lastNameIsVaild && emailIsVaild) {
    formValid = true;
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={validNameInputClasss}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={fristNameInput}
            onChange={fristNameInputChangeHandler}
            onBlur={fristNameBlurHandler}
          />
          {fristNameInputIsValid && <p>Name can't be empty</p>}
        </div>
        <div className={validLastNameInputClasss}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={lastNameInput}
            onChange={lastNameInputChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameInputIsValid && <p>Name can't be empty</p>}
        </div>
      </div>
      <div className={validEmailClasss}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          value={emailInput}
          onChange={emailInputChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailInputIsValid && <p>Enter Valid email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
