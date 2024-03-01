/**
 * @typedef {Object} Person
 * @property {number} id - The unique identifier for the person.
 * @property {string} name - The name of the person.
 */

/**
 * Given a collection of registered persons and a name checks whether person is registered or not
 * @param {Person[]} persons collection of reigstered persons
 * @param {string} name name of person to be registered
 * @returns true if person is already registered or false if not
 */

export const isPersonRegistered = (persons, name) => {
  const matchIndex = persons.findIndex((person) => person.name === name.trim());
  return matchIndex >= 0;
};
