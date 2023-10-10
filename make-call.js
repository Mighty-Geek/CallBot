var accountSID = process.env.TWILIO_ACCOUNT_SID;
var authToken = process.env.TWILIO_AUTH_TOKEN;

var client = require("twilio")(accountSID, authToken);

client.calls
  .create(
    {
      twiml: `<Response>
            <Gather input="speech dtmf" timeout="3" numDigits="1">
              <Say>
                Hi, We are here to help you during your trip, press 1. If you do
                not need assistance, press 2. If you need assistance
              </Say>
            </Gather>
          </Response>
        `,
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
  )
  .then(console.log("WHATSAPP MSG INITIATED"));
