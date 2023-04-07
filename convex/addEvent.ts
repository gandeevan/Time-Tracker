export {}

import { mutation } from "./_generated/server";

export default mutation(async ({ db }, { category, startTime, endTime }) => {
    return await db.insert("events", {category: category, startTime: startTime, endTime: endTime});
});