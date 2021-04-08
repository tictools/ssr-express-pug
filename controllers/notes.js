module.exports = (req, res, view) => {
    req.session.tasks = req.session.tasks || new Array()
    res.render(view, {
        tasks: req.session.tasks
    }
)}