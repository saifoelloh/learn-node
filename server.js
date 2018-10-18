const express = require('express');
const jwt = require('jsonwebtoken');
const users = require('./routes/users.js');
const auth = require('./routes/auth.js');

const app = express();

app.use('/api/auth', auth);
app.use('/api/user', users);
// app.get('/api', (req, res) => {
//     res.json({
//         message: 'Welcome to the API'
//     });
// });

// app.post('/api/post', verifyToken, (req, res) => {
//     jwt.verify(req.token, 'secretkey', (err, authData) => {
//         if(err) {
//             res.sendStatus(err);
//         } else {
//             res.json({
//                 message: 'Post created...',
//                 authData
//             })
//         }
//     })
// });

// app.post('/api/login', (req, res) => {
//     // Mock user
//     const user = {
//         id: 1,
//         username: 'saifoelloh',
//         email: 'saifoelloh@gmail.com'
//     };
//     jwt.sign({user}, 'secretkey', (err, token) => {
//         res.json({
//             token
//         });
//     });
// });

// app.get('/*', (req, res) => {
//     res.json({
//         message: '404 page not found'
//     })
// })

// /// FORMAT OF TOKEN
// //  Authorization: Bearer <access_token>

// /// Verify Token
// function verifyToken(req, res, next) {
//     // Get auth header value
//     const bearerHeader = req.headers['authorization'];
//     // Check if bearer is undefined
//     if(typeof bearerHeader !== 'undefined') {
//         // Split at the space
//         const bearer = bearerHeader.split(' ');
//         // Get token from array
//         const bearerToken = bearer[1];
//         // Set the token
//         req.token = bearerToken;
//         next();
//     } else {
//         res.sendStatus(403);
//     }
// }


const port = process.env.PORT || 3030;
app.listen(port, () => {
    console.log(`Server start on port ${port}`);
})
