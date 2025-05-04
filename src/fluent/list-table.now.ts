import { BooleanColumn, DateTimeColumn, StringColumn, Table } from "@servicenow/sdk/core"

export const sn_todo_list = Table({
    name: 'sn_todo_list',
    label: "List",
    schema: {
        name: StringColumn({
            label: "Name",
            maxLength: 255,
            mandatory: true
        }),
        active: BooleanColumn({
            label: "Active",
            default: true
        }),
        description: StringColumn({
            label: "Description",
            maxLength: 4000
        }),
        closed_on: DateTimeColumn({
            label: "Closed on"
        })
    }
})