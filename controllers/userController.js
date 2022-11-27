const emailSend = require("../utility/sendMail");
const sendSms = require("../utility/sendSMS");



const userContoller = (req, res)=>{

    res.render('user/index')
}


const userDataStore = (req, res)=>{

    emailSend(req.body.email, 'Account Confirmation');

    sendSms(req.body.cell, `Hi ${req.body.name}, You are most welcome, Your email is ${req.body.email}, Thank you`)

    res.json(req.body);


}

module.exports = {
    userContoller,
    userDataStore
}