import { ApplicationMenu, Record } from "@servicenow/sdk/core"
import { sn_todo_list } from "./list-table.now"
import { sn_todo_task } from "./task-table.now"

const menu = ApplicationMenu({
    $id: Now.ID['todo-app-menu'],
    title: "Todo's app",
    description: "Todo's application to track lists, tasks, and subtasks",
    active: true
})

// Create Lists menu module
Record({
    table: "sys_app_module",
    $id: Now.ID['lists-module'],
    data: {
        title: 'Lists',
        active: true,
        application: menu.$id,
        link_type: 'LIST',
        name: sn_todo_list.name,
        order: 200,
        override_menu_roles: false,
        require_confirmation: false,
        uncancelable: false
    }
})

// Create Tasks menu module
Record({
    table: "sys_app_module",
    $id: Now.ID['tasks-module'],
    data: {
        title: 'Tasks',
        active: true,
        application: menu.$id,
        link_type: 'LIST',
        name: sn_todo_task.name,
        order: 200,
        override_menu_roles: false,
        require_confirmation: false,
        uncancelable: false
    }
})