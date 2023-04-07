export {}

import { mutation } from "./_generated/server";

export default mutation(async ({ db }, { name }) => {
  return await db.insert("categories", {name: name});
});