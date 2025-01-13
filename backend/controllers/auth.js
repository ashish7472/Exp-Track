const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//login handler
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        //data validation
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            })
        }

        //check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "User does not exist"
            })
        }

        const payload = {
            id : user.id,
            email : user.email,
            phone : user.phone,
        }

        //password verification
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: "Invalid credentials"
            })
        }

        //jwt token generation
        const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn : "2d"});

        // user = user.toObject(); ----> isme ye kaam nhi kr rha h ??????????
        user.token = token;
        user.password = undefined;

        //cookie creation
        const options = {
            maxAge : 2*24*60*60*1000,
            httpOnly : true,
        }

        res.cookie("token", token, options).status(200).json({
            success: true,
            token,
            user,
            message: "User login successfull"
        })

    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Error in login"
        })
    }
}


//signup handler
exports.signup = async (req, res) => {
    try {
        const { name, email, password, phone } = req.body;

        //data validation
        if (!name || !email || !password || !phone) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            })
        }

        //check if user already exists
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({
                success: false,
                message: "User already exists"
            })
        }

        //otp generation and verification mail

        //password hashing
        const securePassword = await bcrypt.hash(password, 10);

        //save user to db
        const newUser = new User({
            name,
            email,
            password: securePassword,
            phone,
        })
        await newUser.save();

        return res.status(200).json({
            success:true,
            message:'User registered successfully',
        });

    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Error in signup"
        })
    }
}
