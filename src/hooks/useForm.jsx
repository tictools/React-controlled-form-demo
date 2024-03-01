import { useState } from "react";
import { INITIAL_INPUT_VALUE } from "./constants";

export const useForm = () => {
  const [newPerson, setNewPerson] = useState(INITIAL_INPUT_VALUE);
  const [newPhone, setNewPhone] = useState(INITIAL_INPUT_VALUE);

  const handlePersonChange = (value) => {
    setNewPerson(value);
  };

  const handlePhoneChange = (value) => {
    setNewPhone(value);
  };

  return {
    newPerson,
    newPhone,
    handlePersonChange,
    handlePhoneChange,
  };
};
