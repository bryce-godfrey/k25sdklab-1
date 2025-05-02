import { BooleanColumn, DateTimeColumn, ReferenceColumn, StringColumn, Table } from "@servicenow/sdk/core"
import { sn_todo_category } from "./category-table.now"

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
        category: ReferenceColumn({
            label: "Category",
            referenceTable: sn_todo_category.name,
            mandatory: true
        }),
        closed_on: DateTimeColumn({
            label: "Closed on"
        })
    }
})