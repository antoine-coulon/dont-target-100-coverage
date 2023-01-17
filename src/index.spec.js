import assert from "node:assert";
import { add } from "./index.js";

it("should return 1", function () {
  assert.equal(add(1, 0), 1);
});
