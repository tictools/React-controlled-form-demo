import { INITIAL_WARNING_STATE } from "../../hooks";

export const WarningModal = ({ updateWarningStateWith, warningState }) => {
  const { name, isVisible } = warningState;

  if (!isVisible) return null;

  return (
    <div className="modal">
      <div className="modal__content modal__content--danger">
        <button
          className="modal__button bg--danger"
          onClick={() => {
            updateWarningStateWith(INITIAL_WARNING_STATE);
          }}
        >
          ⛌
        </button>
        {`${name} is already added to phonebook`}
      </div>
    </div>
  );
};
