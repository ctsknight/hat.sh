// server.js

const { createServer } = require('https')
const { parse } = require('url')
const next = require('next')
const fs = require('fs')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const httpsOptions = {
  key: fs.readFileSync('/etc/letsencrypt/live/test3.ubonex.de/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/test3.ubonex.de/cert.pem'),
};

app.prepare().then(() => {
  createServer(httpsOptions, (req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true)
    handle(req, res, parsedUrl)
  }).listen(3000, (err) => {
    console.log(err, 'err')
    if (err) throw err
    console.log('> Ready on https://test3.ubonex.de:3000')
  })
})
