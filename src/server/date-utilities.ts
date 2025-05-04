import { gs, GlideRecord, GlideDateTime } from "@servicenow/glide"
import { format, addDays } from "date-fns"

export function checkRecordSateUpdateClosedOn(current: GlideRecord): void {
    gs.info(`updating closed_on for record: ${current.getLink()}`);
    current.setValue("closed_on", formatSN(new Date()));
    current.setValue("active", false)
}

export function autoSetDueOn(current: GlideRecord): void {
    gs.info('setting due on date');

    const dueAt = addDays(new Date(), 1);

    current.setValue("due_on", formatSN(dueAt))
}

function formatSN(date: Date): GlideDateTime {
    return new GlideDateTime(format(date, "yyyy-MM-dd HH:mm:ss"))
}