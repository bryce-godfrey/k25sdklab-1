import { gs, GlideRecord, GlideDateTime } from "@servicenow/glide"
import { format, addDays, fromUnixTime } from "date-fns"

export function checkRecordSateUpdateClosedOn(current: GlideRecord): void {
    gs.info(`updating closed_on for record: ${current.getLink()}`);
    current.setValue("closed_on", formatSN(new Date()));
    current.setValue("active", false)
}

export function autoSetDueOn(current: GlideRecord): void {
    gs.info(`setting due on date for ${current.getValue('sys_id')}`);

    addDaysToDueOn(current, 1)
}

export function addDaysToDueOn(current: GlideRecord, daysToAdd: number = 1): void {
    const currentDueOn = current.getValue("due_on")
    
    const jsDateDueAt = currentDueOn ? fromUnixTime(new GlideDateTime(currentDueOn).getNumericValue()) : new Date();

    const dueAt = addDays(jsDateDueAt, daysToAdd);

    current.setValue("due_on", formatSN(dueAt))
}

function formatSN(date: Date): GlideDateTime {
    return new GlideDateTime(format(date, "yyyy-MM-dd HH:mm:ss"))
}