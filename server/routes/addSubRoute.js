const Subject = require("../models/subjectData");
const express = require('express');
const router = express.Router();

router.post('/', async(req, res)=>{
    try {
        const subject = await Subject.create({
            subjectName: req.body.subjectName,
            courseName : req.body.courseName,
            courseYear : req.body.courseYear,
            driveLink : req.body.driveLink
        });

        res.json({status: "subject added"});
    } catch (error) {
        res.json({status : "Error with data", err: error});
    }
})

router.get('/', async(req, res)=>{
    try {
        const subjects_data = await Subject.find();
        res.json({status:"fetched", data : subjects_data});
    } catch (error) {
        res.json({status : "Error with data", err: error});
    }
})

module.exports = router;