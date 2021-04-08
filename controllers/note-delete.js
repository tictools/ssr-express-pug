const { deleteTask } = require('../common/utils/index')

module.exports = (req, res, redirection) => {
    deleteTask(req)
    res.status(200).json({redirection})
}