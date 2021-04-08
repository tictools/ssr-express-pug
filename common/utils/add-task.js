const Task = require('../../models/task')

const addTask = (req) => {
    req.session.index = (req.session.index || 0)
    
    let index = req.session.index
    let name =  req.body.task_name
    let description = req.body.task_description
    let category = req.body.task_category
    let status = !!req.body.task_status
    let task = new Task(index, name, description, category, status)
    
    req.session.index = req.session.index + 1 
    req.session.tasks.push(task)
}

module.exports = addTask