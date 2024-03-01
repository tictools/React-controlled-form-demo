import { PhoneBookItem } from "./PhoneBookItem";

export const PhoneBook = ({ persons }) => {
  if (!persons.length) {
    return <div>No register matching with filter</div>;
  }

  return (
    <ul className="phonebook__list">
      {persons.map((person) => (
        <PhoneBookItem
          key={person.id}
          name={person.name}
          phone={person.phone}
        />
      ))}
    </ul>
  );
};
