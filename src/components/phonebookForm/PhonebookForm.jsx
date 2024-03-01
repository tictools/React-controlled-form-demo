import { INITIAL_INPUT_VALUE } from "../../hooks";
import { Button, ButtonSet } from "../shared";

export const PhonebookForm = ({
  nameValue,
  phoneValue,
  updatePersonChange,
  updatePhoneChange,
  updatePersons,
}) => {
  const onPersonChange = (event) => updatePersonChange(event?.target?.value);
  const onPhoneChange = (event) => updatePhoneChange(event?.target?.value);

  const resetInputValues = () => {
    updatePersonChange(INITIAL_INPUT_VALUE);
    updatePhoneChange(INITIAL_INPUT_VALUE);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    updatePersons({ name: nameValue, phone: phoneValue });
    resetInputValues();
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input
        id="name"
        className="form__input"
        type="text"
        placeholder="Insert a name..."
        value={nameValue}
        onChange={onPersonChange}
        required
      />
      <input
        id="phone"
        className="form__input"
        type="text"
        placeholder="Insert a phone number..."
        value={phoneValue}
        onChange={onPhoneChange}
        required
      />
      <ButtonSet>
        <Button textContent="Add to phonebook" />
      </ButtonSet>
    </form>
  );
};
