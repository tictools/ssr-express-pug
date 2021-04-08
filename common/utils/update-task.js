const Task = require('../../models/task')

const updateTask = (req) => {
    const {params:{id}} = req
    const [task] = req.session.tasks.filter(task => task.id === Number(id))
 
    task.index = req.params.id
    task.title =  req.body.task_name
    task.description = req.body.task_description
    task.category = req.body.task_category
    task.status = !!req.body.task_status
}

module.exports = updateTask