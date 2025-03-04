const mongoose = require('mongoose');
const Bucket = require('../models/Bucket');
const ObjectModel = require('../models/Object'); 

//Get user objects
const getBucketObjects = async (req, res) => {
    try {
        const bucket = req.params.id
        const bucketExists = await Bucket.findById(bucket);
        if (!bucketExists) {
        return res.status(404).json({ message: `Bucket ${id} not found` });
        }

        const objects = await ObjectModel.find({ bucketId: bucket})

        if (!objects.length) {
        return res.status(404).json({ message: `No objects found` });
        }
        res.status(200).json(objects);
    } catch (err) {
        res.status(500).json({ message: err.message})
    }
}

module.exports = { 
    getBucketObjects
}