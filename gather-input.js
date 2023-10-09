const express = require("express");
const VoiceResponse = require("twilio").twiml.VoiceResponse;
const urlencoded = require("body-parser").urlencoded;

const app = express();

app.use(urlencoded({ extended: false }));

app.post("/voice", (req, res) => {
  const twiml = new VoiceResponse();
  const gatherNode = twiml.gather({
    numDigits: 1,
    action: "/gather",
  });
  gatherNode.say(
    "Hi, We are here to help you during your trip, press 1. If you do not need assistance, press 2. If you need assistance"
  );

  twiml.redirect("/voice");

  response.type("text/xml");
  response.send(twiml.toString());
});

app.post("/gather", (req, res) => {
  const twiml = new VoiceResponse();
  if (request.body.Digits) {
    switch (request.body.Digits) {
      case "1":
        twiml.say(
          "You don't need support! We are sending a feedback form via whatsapp/mail anyways."
        );
        console.log("SEND WHATSAPP FEEDBACK");
        break;
      case "2":
        twiml.say("You need support. We will help!");
        console.log("SEND WHATSAPP FEEDBACK");
        break;
      default:
        twiml.say("Sorry, I don't understand that choice.");
        twiml.pause();
        twiml.redirect("/voice");
        break;
    }
  } else {
    twiml.redirect("/voice");
  }
  response.type("text/xml");
  response.send(twiml.toString());
});

app.listen(3000);
