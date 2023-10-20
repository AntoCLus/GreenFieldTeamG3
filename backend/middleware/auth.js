const jwt = require("jsonwebtoken")
require("dotenv").config()

const verifyToken =(req, res, next) =>{
    try {
        let clientToken = req.headers.authorization.split(' ')[1];
        console.log(clientToken);

      
        jwt.verify(clientToken, process.env.PRIVATE_KEY, (err, clientToken) => {
            if (err) {
                return res.status(401).json({ message: 'Invalid token' });
            } else {
                req.user = clientToken;
                next();
            }
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = verifyToken