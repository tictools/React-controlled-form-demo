import { INITIAL_INPUT_VALUE } from "../../hooks";

export const FilterForm = ({ filterValue, updateFilterValue }) => {
  const onFilterChange = (event) =>
    updateFilterValue(event?.target?.value.trim());

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
