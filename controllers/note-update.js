module.exports = (req, res, view, categories) => {
    const {params:{id}} = req
    const [task] = req.session.tasks.filter(task => task.id === Number(id))
    res.render(view, {
        id: id,
        task,
        categories
    })
}