import { useState } from "react";

const useInput = (validatedValue) => {
  const [valueInput, setValueInput] = useState("");
  const [isInputTuched, setIsInputTuched] = useState(false);

  const valueIsValid = validatedValue(valueInput);
  const inputHasError = !valueIsValid && isInputTuched;

  const valueInputHandler = (e) => {
    setValueInput(e.target.value);
  };

  const valueBlurHandler = () => {
    setIsInputTuched(true);
  };

  const resetValue = () => {
    setValueInput("");
    setIsInputTuched(false);
  };

  return {
    value: valueInput,
    valueIsValid,
    inputHasError,
    valueInputHandler,
    valueBlurHandler,
    resetValue,
  };
};
export default useInput;
