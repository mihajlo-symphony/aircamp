const express = require('express');
const http = require('http');

const PORT = 3000;
const app = express();
const server = http.createServer(app)

app.set('json spaces', 2)

app.get('/', (req, res) => {
  res.status(200).json(req.headers)
});

app.get('*', (req, res) => {
  res.status(404).json({message: "404 Not Found"});
});

server.listen(PORT, () => {
  console.log(`App started on http://localhost:${PORT}`);
});
