const server = require('./server')

module.exports = {
  createWithArray: (req, res, next) => {
    // 400: this news item (by URL) already exists on the stage
    server.end(req, res, "createWithArray", req.body)
  },
  createNews: (req, res, next) => {
    // 400: this news item (by URL) already exists on the stage
    server.end(req, res, "createNews", req.body)
  },
  readNews: (req, res, next) => {
    server.end(req, res, "readNews", [{lmfao:"hahahahah"}])
  },
  readNewsById: (req, res, next) => {
    /*404: description: "News item (by ID) not found"*/
    server.end(req, res, "readNewsById", {lmfao:"hahahahah"})
  },
  updateNews: (req, res, next) => {
    // 404: description: "News item (by ID) was not found
    server.end(req, res, "updateNews", req.body)
  },
  uploadNewsImage: (req, res, next) => {
    // 404: description: "News item (by ID) was not found
    server.end(req, res, "uploadNewsImage", req.body)
  },
  deleteNews: (req, res, next) => {
    // 404: description: "News item (by ID) was not found
    server.end(req, res, "deleteNews", req.path)
  },
}