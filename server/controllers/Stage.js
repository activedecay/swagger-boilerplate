const server = require('./server')

module.exports = {
  readStage: (req, res, next) => {
    // 400: this news item (by URL) already exists on the stage
    server.end(req, res, "readStage", [{news:"items"}])
  },
  pushHistoryNode: (req, res, next) => {
    // 400: this news item (by URL) already exists on the stage
    server.end(req, res, "pushHistoryNode")
  },
}