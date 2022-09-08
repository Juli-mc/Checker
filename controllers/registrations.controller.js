const { request, response } = require("express");
const { Register, exitRegister } = require("../models/registrations.model");

//Define Dates
const today = new Date();

//Define endpoints
const getRegistrations = async (request, response) => {
  try {
    const register = await Register.findAll();

    response.status(206).json({
      data: { register },
    });
  } catch (error) {
    console.log(error);
  }
};

const postRegistrations = async (request, response) => {
  try {
    const { username } = request.body;

    const register = await Register.create({
      username: username,
      entraceTime: today.toISOString(),
    });

    response.status(201).json({
      data: { register },
    });
  } catch (error) {
    console.log(error);
  }
};

const outRegistration = async (request, response) => {
  try {
    const { id } = request.params;

    const register = await Register.findOne({ where: { id } });
    if (!register) {
      return response.status(404).json({
        message: "User not found (404)",
      });
    }

    await register.update({ status: "Out" });

    response.status(201).json({
      register,
      exitRegister: today.toISOString(),
      //   status: "Out",
    });
  } catch (error) {
    console.log(error);
  }
};

const finishRegistrations = async (request, response) => {
  try {
    const { id } = request.params;

    const register = await Register.findOne({ where: { id } });
    if (!register) {
      return response.status(404).json({
        message: "User not found (404)",
      });
    }

    await register.update({ status: "Cancelled" });

    response.status(201).json({
      data: { register },
    });
  } catch (error) {
    console.log(error);
  }
};

const getRegistrationsId = async (request, response) => {
  try {
    const { id } = request.params;

    const register = await Register.findOne({ where: { id } });
    if (!register) {
      return response.status(404).json({
        message: "User not found (404)",
      });
    }

    response.status(201).json({
      register,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getRegistrations,
  postRegistrations,
  finishRegistrations,
  outRegistration,
  getRegistrationsId,
};
