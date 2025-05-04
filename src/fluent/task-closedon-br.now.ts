import { BusinessRule } from "@servicenow/sdk/core"
import { checkRecordSateUpdateClosedOn } from "../server/date-utilities"

BusinessRule({
    $id: Now.ID["todo-task-closedon-state"],
    name: "Set closed on when state closed",
    table: "sn_todo_task",
    when: "before",
    action: ["update","insert"],
    active: true,
    filter_condition: `state=done^closed_onISEMPTY`,
    script: checkRecordSateUpdateClosedOn,
    abort_action: false
})