import { BooleanColumn, ChoiceColumn, DateTimeColumn, IntegerColumn, ReferenceColumn, StringColumn, Table } from "@servicenow/sdk/core"
import { sn_todo_list } from "./list-table.now"

export const sn_todo_task = Table({
    name: 'sn_todo_task',
    label: "Task",
    schema: {
        title: StringColumn({
            label: "Title",
            maxLength: 255,
            mandatory: true
        }),
        description: StringColumn({
            label: "Description",
            maxLength: 4000
        }),
        order: IntegerColumn({
            label: "Order",
            default: 0
        }),
        closed_on: DateTimeColumn({
            label: "Closed on"
        }),
        active: BooleanColumn({
            label: "Active",
            default: true
        }),
        state: ChoiceColumn({
            label: "State",
            mandatory: true,
            default: "todo",
            choices: {
                todo: {
                    label: "Todo",
                    sequence: 1
                },
                in_progress: {
                    label: "In Progress",
                    sequence: 2
                },
                done: {
                    label: "Done",
                    sequence: 3
                },
                canceled: {
                    label: "Canceled",
                    sequence: 4
                }
            }
        }),
        list: ReferenceColumn({
            label: "List",
            referenceTable: sn_todo_list.name,
            mandatory: true
        })
    }
})