const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

const User = require('../models/user.js');
const {createObj} = require('../modules/index.js');

module.exports = {
    regis: function(req, res, next) {
        let user = createObj(req.body);
        user.save(function(err) {
            if(err) return res.status(500).send(err);
            res.status(200).json('You\'re data has been saved');
        })
        next();
    },
    login: function(req, res, next) {
        jwt.sign({user}, 'secretkey', (err, token) => {
            if(err) return res.status(500).send(err);
            res.status(200).json({token});
        })
        next();
    },
    forgot: function(req, res, next) {
        let mail = {
                admin: 'saifoelloh@gmail.com',
                user: req.body.mail
            },
            transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: mail.admin,
                    pass: ''
                }
            }),
            mailOptions = {
                from: mail.admin,
                to: mail.user,
                subject: 'Reset your password',
                text: `Click this link to change your password`
            };
        transporter.sendMail(mailOptions, function(err, info) {
            if(err) return res.status(500).json(err);
            res.status(200).json(info.response);
        })
    },
}
