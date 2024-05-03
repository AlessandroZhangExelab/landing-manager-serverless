const axios = require("axios");

exports.main = async (context = {}) => {
  const baseURL = process.env["BASE_URL"];
  const API_KEY = process.env["API_KEY"];
  const endpoint = "hubspot/landing/data";
  const body = context.body;
  /*test*/
  try {
    const config = {
      method: "POST",
      url: `${baseURL}${endpoint}`,
      headers: {
        "Content-Type": "application/json",
        API_KEY,
      },
      data: body,
    };
    const response = await axios(config);
    return {
      body: {
        response: {
          ok: true,
        },
      },
      statusCode: 200,
    };
  } catch (error) {
    return {
      body: {
        message: error.message,
      },
      statusCode: 400,
    };
  }
};
