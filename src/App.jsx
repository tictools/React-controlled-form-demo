// import { useState } from "react";

import { FilterForm } from "./components/filterForm";
import { WarningModal } from "./components/modal";
import { PhoneBook } from "./components/phonebook";
import { PhonebookForm } from "./components/phonebookForm";
import { MainHeader, Section, SectionHeader } from "./components/shared";
import { useFilterForm, useForm, usePersons } from "./hooks";

const App = () => {
  const { filterValue, handleChangeFilter } = useFilterForm();
  const { persons, handleUpdatePersons, warningState, updateWarningStateWith } =
    usePersons({ filterValue });
  const { newPerson, newPhone, handlePersonChange, handlePhoneChange } =
    useForm();

  return (
    <div className="main">
      <MainHeader textContent="React controlled form" />
      <div className="wrapper">
        <Section>
          <SectionHeader textContent="New register" />
          <PhonebookForm
            nameValue={newPerson}
            phoneValue={newPhone}
            updatePersonChange={handlePersonChange}
            updatePhoneChange={handlePhoneChange}
            updatePersons={handleUpdatePersons}
          />
        </Section>
        <Section>
          <SectionHeader textContent="Phonebook" />
          <FilterForm
            filterValue={filterValue}
            updateFilterValue={handleChangeFilter}
          />
          <PhoneBook persons={persons} />
        </Section>
      </div>
      <WarningModal
        updateWarningStateWith={updateWarningStateWith}
        warningState={warningState}
      />
    </div>
  );
};

export default App;
