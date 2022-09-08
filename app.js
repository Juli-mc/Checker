const express = require("express");
const { request, response } = require("express");

//Importing models
const { Register } = require("./models/registrations.model");

//Routers
const { registerRouter } = require("./routes/registrations.routes");

//Starting app with Express
const app = express();

//Enable exrpess app to receive JSON data
app.use(express.json());

//Endpoint with router
app.use("/workers", registerRouter);

//Endpoint not existent
app.all("*", (request, response) => {
  response.status(404).json({
    status: "error",
    message: `The method *${request.method}* or endpoint *${request.url}* is not existent in our server `,
  });
});

module.exports = { app };
