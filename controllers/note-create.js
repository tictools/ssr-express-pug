module.exports = (_, res, view, categories) => {
    res.render(view, {
        categories
    })
}