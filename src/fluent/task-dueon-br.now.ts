import { BusinessRule } from "@servicenow/sdk/core"
import { autoSetDueOn } from "../server/date-utilities"

BusinessRule({
    $id: Now.ID["todo-task-dueon-set"],
    name: "Set due on to 1 day from now on insert",
    table: "sn_todo_task",
    when: "before",
    action: ["insert"],
    active: true,
    filter_condition: `state=todo^due_onISEMPTY`,
    script: autoSetDueOn,
    abort_action: false
})