module.exports = (req, res, view) => {
    const { params : { id } } = req
    const data = req.session.tasks
    const [task] = data.filter(item => Number(item.id) === Number(id))
    
    res.render(view, {
        task
    })
}