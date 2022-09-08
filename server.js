const { start } = require("repl");
const { app } = require("./app");

//Importing utils

const { db } = require("./utils/databases.util");

const startServer = async () => {
  try {
    db.authenticate();
    db.sync();

    //seting server to launch
    const PORT = 4001;
    app.listen(PORT, () => {
      console.log("Express app is now conected and launched");
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
