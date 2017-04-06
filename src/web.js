require('dotenv').config({ silent: true });

const { app } = require('dexpress');
const rp = require('request-promise').defaults({ json: true, url: process.env.AI_WEBHOOK_URL });
require('dcontrollers')(app, [
  require('./controller')({
    applications: process.env.AI_APPLICATIONS ? process.env.AI_APPLICATIONS.split(', ') : null,
    rp,
    secret: process.env.AI_WEBHOOK_SECRET,
  }),
]);
