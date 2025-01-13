const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.auth = (req, res, next) => {
    const token = req.body.token || req.cookies.token || req.header("Authorization").replace("Bearer ", "");
    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Token Missing"
        })
    }
    try {
        const decoded = jwt.verify(token, process.env.SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Something went wrong"
        })
    }
}