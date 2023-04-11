export { }
import { query } from "./_generated/server";

export default query(async ({ db }, { startTime, endTime }) => {
    const events = await db.query("events")
        .filter(q =>  q.and(q.gte(q.field("startTime"), startTime), q.lte(q.field("endTime"), endTime)))
        .collect();
    
    return events
});