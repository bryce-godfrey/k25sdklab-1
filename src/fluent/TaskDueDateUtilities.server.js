const TaskDueDateUtilities = Class.create();
TaskDueDateUtilities.prototype = Object.extendsObject(global.AbstractAjaxProcessor, {
  type: "TaskDueDateUtilities",

  addDays: (sysId, numberOfDays) => {
	//This is a new comment
    const record = new GlideRecord('sn_todo_task');
    if(!record.get(sysId)){
      throw new Error(`${sysId} was not found`)
    }

    const { addDaysToDueOn } = require('src/server/date-utilities.ts')
    addDaysToDueOn(record, numberOfDays)
  }
})