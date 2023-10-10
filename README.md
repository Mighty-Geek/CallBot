# CallBot
Web Application to facilitate automated call functionality using Twilio API.

# Follow the steps given below to make an Outbound Call
1. Fork the repo
2. Clone the fork on local
3. ```cd forkedRepo```
4. ```npm install```
5. Create a .env file and add TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, FROM (phone number from where the call needs to be made), TO (phone number)
6. You can use this link to get the sid and token: https://www.twilio.com/login (this will take you to the twilio console dashboard, from where you can copy the values)
7. You can use this link to validate the phone numbers (alternatively, you can also buy the phone number from Twilio): https://console.twilio.com/us1/develop/phone-numbers/manage/verified
8. After adding the values in .env, run ```node make-call.js``` in terminal.
9. Kudos, you were able to route a outbound call.
