const data = require("../models/dataModel");
const asyncHandler = require("express-async-handler");
const WebSocket = require("ws");

const ws = new WebSocket("ws://192.168.137.251:81/");

// WebSocket data receive
ws.on("open", function () {
  console.log("Connected to ESP8266 WebSocket server");
});

ws.on("message", function (data) {
  const dataString = data.toString();
  const dataObject = JSON.parse(dataString);
  let noise;
  console.log("Received data from ESP8266");
  console.log("Noise: ", dataObject.noise);

  noise = dataObject.noise;

  setInterval(
    asyncHandler(async (req, res) => {
      const updatedData = await data.findByIdAndUpdate({
        _id: process.env.DATA_ID,
      });
    }),
    2000
  );
});

//get data
const getData = asyncHandler(async (req, res) => {
  try {
    const findDataset = await data.findById({
      _id: process.env.DATA_ID,
    });
    res.json(findDataset);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  getData,
};
