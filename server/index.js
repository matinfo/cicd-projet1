const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const port = process.env.PORT || '3000';
const router = require('./routes');

console.info(
  `🚀 Server running on port ${port} and env is ${process.env.NODE_ENV} 🚀`
);

require('./database');

const app = express();
app.use(express.static('../client/dist'));
app.use(express.json());
app.use(cookieParser());

app.use(router);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.listen(port);
