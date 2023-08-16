const db = require('../Database/Database');
const FormModel = require('../Model/FormModel');
const { body, validationResult } = require('express-validator');
const nodemailer = require('nodemailer');

const validateForm = [
    body('phoneNo').notEmpty().withMessage('Phone number is required').isLength({min: 10}).withMessage('Enter a valid number!'),
];

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'rentinggo1@gmail.com', // Your Gmail email
        pass: 'Rent@123' // Your Gmail password
    }
});

const formCont = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const form = new FormModel({
            day: req.body.day,
            amount: req.body.amount,
            phoneNo: req.body.phoneNo,
            proname: req.body.proname
        })

        await form.save();

        // Send email notification
        const emailTemplate = `
            <p>Form Submission:</p>
            <p>Day: ${form.day}</p>
            <p>Amount: ${form.amount}</p>
            <p>Phone Number: ${form.phoneNo}</p>
            <p>Product Name: ${form.proname}</p>
        `;

        const mailOptions = {
            from: 'rentinggo1@gmail.com', // Your Gmail email
            to: 'rentinggo1@gmail.com', // Change this to your email address
            subject: 'Form Submission',
            html: emailTemplate
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });

        res.status(200).json({ success: true });
    } catch (err) {
        console.log('error occured while uploading the form', err);
        res.status(500).json({ success: false });
    }
}

module.exports = {validateForm, formCont};