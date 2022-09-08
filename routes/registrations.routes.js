const express = require("express");
const {
  getRegistrations,
  postRegistrations,
  finishRegistrations,
  outRegistration,
  getRegistrationsId,
} = require("../controllers/registrations.controller");
const { Register } = require("../models/registrations.model");

const registerRouter = express.Router();

registerRouter.get("/", getRegistrations);

registerRouter.get("/:id", getRegistrationsId);

registerRouter.post("/", postRegistrations);

registerRouter.patch("/:id", outRegistration);

registerRouter.delete("/:id", finishRegistrations);

module.exports = { registerRouter };
