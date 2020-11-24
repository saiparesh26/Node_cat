const path = require('path');
const { createLogger } = require('bunyan');
const level = process.env.NODE_LOGGING_LEVEL || 'info';

const log = createLogger({
  name: 'node_app',
  streams: [
    {
      level,
      stream: process.stdout,
    },
    {
      level,
      path: path.resolve(__dirname, '..', 'logs', 'logs.json'),
    },
  ],
});

module.exports = log;
