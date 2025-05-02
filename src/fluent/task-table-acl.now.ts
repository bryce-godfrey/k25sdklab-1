import { Acl } from "@servicenow/sdk/core"
import { isCreatedByCurrentUser } from "../server/acl-utilities"
import { todoUserRole } from "./role.now"

//Create acl to only read your own records
Acl({
    $id: Now.ID["sn_todo_task_read"],
    name: "Task Read Users Only",
    active: true,
    type: "record",
    operation: "read",
    roles: [todoUserRole],
    table: "sn_todo_task",
    script: isCreatedByCurrentUser
})

//Create acl to require role to write and only current users records
Acl({
    $id: Now.ID["sn_todo_task_write"],
    name: "Task Write Users Only",
    active: true,
    type: "record",
    operation: "read",
    roles: [todoUserRole],
    table: "sn_todo_task",
    script: isCreatedByCurrentUser
})

//Create acl to require role to create
Acl({
    $id: Now.ID["sn_todo_task_create"],
    name: "Task Read Users Only",
    active: true,
    type: "record",
    operation: "create",
    roles: [todoUserRole],
    table: "sn_todo_task",
})