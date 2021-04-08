const updateTask = require('../common/utils/update-task')

module.exports = (req, res, redirection) => {
    updateTask(req)
    redirectionWithId = `${redirection}/${req.params.id}`
    res.redirect(redirectionWithId)
}