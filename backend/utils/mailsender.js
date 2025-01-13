const nodeMailer = require('nodemailer');
require('dotenv').config();

const verificationMail = async (email, otp) => {
    try {
        const transporter = nodeMailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS
            }
        });

        const mailOptions = {
            from: process.env.EMAIL,
            to: email,
            subject: 'OTP for verification',
            text: `Your otp is ${otp}`
        }

        await transporter.sendMail(mailOptions);
        return true;
    }
    catch (error) {
        console.log(error);
        return false;
    }
}

module.exports = verificationMail;