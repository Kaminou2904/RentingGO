const db = require('../Database/Database');
const FormModel = require('../Model/FormModel');

const formCont = async (req, res)=>{
    try {
        const form = new FormModel({
            day: req.body.day,
            amount: req.body.amount,
            phoneNo: req.body.phoneNo,
            proname: req.body.proname
        })

        await form.save();
        res.status(200).json({success: true});
    } catch (err) {
        console.log('error occured while uploading the form', err);
        res.status(500).json({success: false});
    }
}

module.exports = formCont;