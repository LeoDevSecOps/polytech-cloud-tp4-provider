const express = require('express')
const bodyParser = require('body-parser')
var cors = require('cors');
const config = require('./config')
const axios = require('axios')
const morgan = require('morgan');

const app = express()
app.use(bodyParser.json())
app.use(cors());
app.use(morgan("combined"))

require('./routes')(app)

app.listen(config.port)
console.log(`Server started on port ${config.port}`)

// register
const supportedType = ['verb', 'subject', 'adjective']
supportedType.forEach(async type => {
  try {
    return await axios.put(config.register_url, {url: `${config.host}:${config.port}`, type: type}).then(response => console.log(response))
  } catch (error) {
    console.error(error)
  }
});
