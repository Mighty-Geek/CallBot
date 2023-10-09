require("dotenv").config();

var accountSID = process.env.TWILIO_ACCOUNT_SID;
var authToken = process.env.TWILIO_AUTH_TOKEN;

var client = require("twilio")(accountSID, authToken);

client.calls.create(
  {
    url: "http://demo.twilio.com/docs/voice.xml",
    to: process.env.MY_PHONE_NUMBER,
    from: process.env.YOUR_PHONE_NUMBER,
  },
  function (err, call) {
    if (err) {
      console.log(err);
    } else {
      console.log(call.sid);
    }
  }
);
