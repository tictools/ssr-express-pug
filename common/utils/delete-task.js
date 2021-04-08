const deleteTask = (req) => {
    const currentId = Number(req.params.id)
    req.session.tasks = req.session.tasks.filter(task => task.id !== currentId)
}

module.exports = deleteTask