import { describe, expect, test } from "vitest";
import { isPersonRegistered } from "./isPersonRegistered";

describe("isPersonRegistered", () => {
  describe("Given a collection of persons", () => {
    const persons = [{ name: "John Doe" }, { name: "Ada Lovelace" }];

    test("When provide name is registered Then true should be returned", () => {
      const result = isPersonRegistered(persons, "John Doe");
      expect(result).toBe(true);
    });

    test.only("When provided name with many white spaces is registered Then true should be returned", () => {
      const result = isPersonRegistered(persons, "  John Doe  ");
      expect(result).toBe(true);
    });

    test("When name is not registered Then false should be returned", () => {
      const result = isPersonRegistered(persons, "Alan Turing");
      expect(result).toBe(false);
    });
  });
});
