require('dotenv').config()
const express = require('express')
const coockieSession = require('cookie-session')

const VIEWS = require('./common/constants/views')
const ROUTES = require('./common/constants/routes')
const TIME = require('./common/constants/time')
const CATEGORIES = require('./common/constants/categories')

const notes = require('./controllers/notes')
const noteDetail = require('./controllers/note-detail')
const noteCreate = require('./controllers/note-create')
const noteAdd = require('./controllers/note-add')
const noteUpdate = require('./controllers/note-update')
const noteUpdatePost = require('./controllers/note-update-post')
const noteDelete = require('./controllers/note-delete')


const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(coockieSession({
   secret: process.env.COOKIE_SECRET,
   maxAge: TIME.DAY_IN_MILLISECONDS 
}))

app.set('view engine', 'pug')
app.set('views', 'views')

app.get(ROUTES.LANDING, (_, res) => res.render(VIEWS.LANDING))

app.get(ROUTES.NOTES_LIST, (req, res) => notes(req, res, VIEWS.NOTES_LIST))
app.post(ROUTES.NOTES_LIST, (req, res) => noteAdd(req, res, ROUTES.NOTES_LIST))

app.get(ROUTES.NOTE_DETAIL_ID, (req, res) => noteDetail(req, res, VIEWS.NOTE_DETAIL))
app.post(ROUTES.NOTE_DETAIL_ID, (req, res) => noteUpdatePost(req, res, ROUTES.NOTE_DETAIL))

app.get(ROUTES.NOTE_UPDATE_ID, (req, res) => noteUpdate(req, res, VIEWS.NOTE_UPDATE, CATEGORIES))

app.get(ROUTES.NOTE_CREATE, (req, res) => noteCreate(req, res, VIEWS.NOTE_CREATE, CATEGORIES))

app.delete(ROUTES.NOTE_DELETE_ID, (req, res) => noteDelete(req, res, ROUTES.NOTES_LIST))


const { env : { PORT }} = process
app.listen(PORT, () => {
    console.log(`Server up and listening port ${PORT}...`)
})

