const { db, DataTypes } = require("../utils/databases.util");

//Define model

const Register = db.define("register", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },

  username: { type: DataTypes.STRING, allowNull: false, unique: true },

  entraceTime: { type: DataTypes.DATE, allowNull: true },

  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "working",
  },
});

const exitRegister = db.define("exitRegister", {
  exitTime: { type: DataTypes.DATE, allowNull: false },
});

module.exports = { Register, exitRegister };
