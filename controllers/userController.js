const jwt = require('jsonwebtoken');
const User = require('../models/user.js');

module.exports = {
    index: function(req, res, next) {
        User.find({}, (err, data) => {
            if(err) return res.send(500).json(err);
            res.status(200).send(data);
        })
        next();
    },
    show: function(req, res, next) {
        User.findById(req.params.id, (err, data) => {
            if(err) return res.send(500).json(err);
            res.status(200).send(data);
        })
        next();
    },
    update: function(req, res, next) {
        User.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, datum) => {
            if(err) return res.status(500).json(err);
            res.status(200).json('Your data has updated');
        })
        next();
    },
    delete: function(req, res, next) {
        User.findByIdAndRemove(req.params.id, (err, data) => {
            if(err) return res.status(500).json(err);
            res.status(200).json('Your acount has deleted').redirect('/');
        })
        next();
    }
}
