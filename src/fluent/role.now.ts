import { Role } from "@servicenow/sdk/core"

export const todoUserRole = Role({
    $id: Now.ID["todo-user"],
    name: "todo-user",
})