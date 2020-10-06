const http = require('http');

const app = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain' })
    res.end('Hello World!')
})


const port = 3002
app.listen(port)
console.log('App is running on port', port)