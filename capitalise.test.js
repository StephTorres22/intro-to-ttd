//const capitalise = require("./using-jest");
import { capitalise  } from "./using-jest";
test("Capitalise capital", () => {
  expect(capitalise("capital")).toBe("Capital");
});
