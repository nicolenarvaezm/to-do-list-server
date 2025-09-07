const User = require("../models/User"); //modelo del usuario
const GlobalDAO = require("./GlobalDAO");

class UserDAO extends GlobalDAO{ //herencia 
  constructor() {
    super(User);
  }
}

module.exports = new UserDAO();