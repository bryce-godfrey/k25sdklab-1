import { Acl } from "@servicenow/sdk/core"
import { isCreatedByCurrentUser } from "../server/acl-utilities"
import { todoUserRole } from "./role.now"

//Create acl to only read your own records
Acl({
    $id: Now.ID["sn_todo_list_read"],
    name: "List Read Users Only",
    active: true,
    type: "record",
    operation: "read",
    roles: [todoUserRole],
    table: "sn_todo_list",
    script: isCreatedByCurrentUser
})

//Create acl to require role to write and only current users records
Acl({
    $id: Now.ID["sn_todo_list_write"],
    name: "List Write Users Only",
    active: true,
    type: "record",
    operation: "read",
    roles: [todoUserRole],
    table: "sn_todo_list",
    script: isCreatedByCurrentUser
})

//Create acl to require role to create
Acl({
    $id: Now.ID["sn_todo_list_create"],
    name: "List Read Users Only",
    active: true,
    type: "record",
    operation: "create",
    roles: [todoUserRole],
    table: "sn_todo_list",
})