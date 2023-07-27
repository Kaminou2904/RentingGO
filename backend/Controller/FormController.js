const db = require('../Database/Database');
const FormModel = require('../Model/FormModel');

const formCont = async (req, res)=>{
    try {
        const form = new FormModel({
            day: {type: String, required: true},
            amount: {type: String, required: true},
            phoneNo: {type: String, required: true},
            proname: {type: String, required: true}
        })

        await form.save();
        res.status(200).json({success: true});
    } catch (err) {
        console.log('error occured while uploading the form', err);
        res.status(500).json({success: false});
    }
}

module.exports = formCont;