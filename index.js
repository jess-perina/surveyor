const express = require('express')
const mongoose = require('mongoose')
const keys = require('./config/keys')
const cookieSession = require('cookie-session')
const passport = require('passport')
const bodyParser = require('body-parser')
const volleyball = require('volleyball')
require('./models/user')
require('./services/passport')

mongoose.connect(keys.mongoURI, { useNewUrlParser: true })

const app = express()

app.use(volleyball)
app.use(bodyParser.json())
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, //30 days
    keys: [keys.cookieKey]
  })
)
app.use(passport.initialize())
app.use(passport.session())

require('./routes/authRoutes')(app)
require('./routes/billingRoutes')(app)

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assests
  app.use(express.static('client/build'))

  // Express will serve index.html to unknown routes
  const path = require('path')
  app.get('*', (req, res) => {
    res.send(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const PORT = process.env.PORT || 5000
app.listen(PORT)
