import { useState } from "react";

const useBasicInput = (validatedValue) => {
  const [inputValue, setInputValue] = useState("");
  const [isInputTouched, setIsInputTouched] = useState(false);

  const valueIsVaild = validatedValue(inputValue);
  const inputValueIsValid = !valueIsVaild && isInputTouched;

  const inputValueChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const blurHandler = () => {
    setIsInputTouched(true);
  };

  const reset = () => {
    setInputValue("");
    setIsInputTouched(false);
  };

  return {
    value: inputValue,
    valueIsVaild,
    inputValueChangeHandler,
    blurHandler,
    reset,
    inputValueIsValid,
  };
};

export default useBasicInput;
