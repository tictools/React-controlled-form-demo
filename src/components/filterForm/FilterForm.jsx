/* 
import { INITIAL_INPUT_VALUE } from "../../hooks";

export const FilterForm = ({ filterValue, updateFilterValue }) => {
  const onFilterChange = (event) => updateFilterValue(event.target.value);

  const resetFilter = () => updateFilterValue(INITIAL_INPUT_VALUE);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
      className="filter-form"
    >
      <input
        className="filter-form__input"
        type="text"
        placeholder="filter list by name..."
        value={filterValue}
        onChange={onFilterChange}
      />
      <button className="filter-form__reset" onClick={resetFilter}>
        ⛌
      </button>
    </form>
  );
}; 
*/

import { useRef } from "react";
import { INITIAL_INPUT_VALUE } from "../../hooks";

export const FilterForm = ({ filterValue, updateFilterValue }) => {
  const inputRef = useRef(null);

  const onFilterChange = (event) => updateFilterValue(event.target.value);

  const resetFilter = () => {
    updateFilterValue(INITIAL_INPUT_VALUE);
    inputRef?.current.focus();
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
      className="filter-form"
    >
      <input
        ref={inputRef}
        className="filter-form__input"
        type="text"
        placeholder="filter list by name..."
        value={filterValue}
        onChange={onFilterChange}
      />
      <input
        className="filter-form__reset"
        type="button"
        value="⛌"
        onClick={resetFilter}
      />
    </form>
  );
};
