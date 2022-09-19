const bcrypt = require("bcrypt");
module.exports.hashString = (data) => {
  const salt = bcrypt.genSaltSync(12);
  const hashedString = bcrypt.hashSync(data, salt);
  return hashedString;
};


module.exports.compareDataWithHashedPassword = (clientPassword , hashedPassword) => {
    return bcrypt.compareSync(clientPassword , hashedPassword);
  };