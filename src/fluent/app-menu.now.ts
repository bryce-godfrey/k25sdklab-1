import { ApplicationMenu, Record } from "@servicenow/sdk/core"
import { sn_todo_task } from "./task-table.now"

const todoAppMenu = ApplicationMenu({
    $id: Now.ID["todo-menu"],
    title: "K25 Todo list",
    active: true
})

Record({
    $id: Now.ID["task-menu-module"],
    table: "sys_app_module",
    data: {
        active: true,
        title: "Tasks",
        link_type: "LIST",
        filter: sn_todo_task.name,
        order: 100,
        application: todoAppMenu.$id
    }
})



