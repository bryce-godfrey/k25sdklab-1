import { Record } from "@servicenow/sdk/core";

Record({
  $id: Now.ID["taskduedateutilities"],
  table: "sys_script_include",
  data: {
    name: "TaskDueDateUtilities",
    api_name: "sn_todo.TaskDueDateUtilities",
    script: Now.include("./TaskDueDateUtilities.server.js"),
    client_callable: true,
    active: true,
      access: "public",
      mobile_callable: false,
      sandbox_callable: true,
      description: "This is my description"
},
});