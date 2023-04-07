export {}

import { query } from "./_generated/server";

export default query(async ({ db }) => {
  const categories =  await db.query("categories").collect();
  return categories.map(category => category.name ? category.name : "");
});