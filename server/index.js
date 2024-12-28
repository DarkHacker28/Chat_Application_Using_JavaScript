const express = require('express');
const cors = require('cors');
const socketIo = require('socket.io');

const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

const server = app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

const io = socketIo(server);
