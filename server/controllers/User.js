const server = require('./server')

module.exports = {
  createUser: (req, res, next) => {
    server.end(req, res, "createUser", req.body)
  },
  createUsersWithArrayInput: (req, res, next) => {
    server.end(req, res, "createUsersWithArrayInput", req.body)
  },
  createUsersWithListInput: (req, res, next) => {
    server.end(req, res, "createUsersWithListInput", req.body)
  },
  deleteUser: (req, res, next) => {
    server.end(req, res, "deleteUser", req.body)
  },
  getUserByName: (req, res, next) => {
    server.end(req, res, "getUserByName", {
      "firstName": "aeiou",
      "lastName": "aeiou",
      "password": "aeiou",
      "userStatus": 123,
      "phone": "aeiou",
      "id": 123456789,
      "email": "aeiou",
      "username": "aeiou"
    })
  },
  loginUser: (req, res, next) => {
    server.end(req, res, "loginUser", {})
  },
  logoutUser: (req, res, next) => {
    server.end(req, res, "logoutUser", req.body)
  },
  updateUser: (req, res, next) => {
    server.end(req, res, "updateUser", req.body)
  },
}