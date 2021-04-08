const { addTask } = require('../common/utils/index')

module.exports = (req, res, redirection, data) => {
    addTask(req, data)
    res.redirect(redirection)
}