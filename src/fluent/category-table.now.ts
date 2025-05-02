import { StringColumn, Table } from "@servicenow/sdk/core"

export const sn_todo_category = Table({
    name: 'sn_todo_category',
    schema: {
        name: StringColumn({
            label: "Name",
            maxLength: 40,
            mandatory: true
        })
    }
})