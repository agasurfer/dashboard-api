const mongoose = require('mongoose');
const User = require("../models/User");
const Container = require('../models/Container');
const Footprint = require('../models/Footprint');
const Bucket = require('../models/Bucket');
const Volume = require('../models/Volume');
const Alert = require('../models/Alert');


// Get all users
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get user by Id
const getUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findById(id);
        if (!user) {
        return res.status(404).json({ message: `User ${id} not found` });
    }
    res.status(200).json(user);
    } catch (err) {
    res.status(500).json({ message: err.message });
    }
};

//Get user containers
const getUserContainers = async (req, res) => {
    try {
        const user = req.params.id
        const userExists = await User.findById(user);
        if (!userExists) {
        return res.status(404).json({ message: `User ${id} not found` });
        }

        const containers = await Container.find({ userId: user}).populate("footprintId");

        if (!containers.length) {
        return res.status(404).json({ message: `No containers found` });
        }
        res.status(200).json(containers);
    } catch (err) {
        res.status(500).json({ message: err.message})
    }
}

//Get user footprints
const getUserFootprints = async (req, res) => {
    try {
        const user = req.params.id;
        const userExists = await User.findById(user);
        if (!userExists) {
            return res.status(404).json({ message: `User ${user} not found` });
        }

        
        const footprint = await Footprint.aggregate([
            { $match: { userId: mongoose.Types.ObjectId(user) } }, 
            { $unwind: "$services" }, // unwinds services
            {
                $group: {
                    _id: "$userId",
                    total_energy_consumed_kWh: { $sum: "$services.energy_consumed_kWh" },
                    total_carbon_emitted_gCO2e: { $sum: "$services.carbon_emitted_gCO2e" },
                    services: { $push: "$services" } // regroup
                }
            }
        ]);

        
        if (!footprint.length) {
            return res.status(404).json({ message: "Footprint not found" });
        }

        
        const footprintData = footprint[0]; //Aggregate always renders an array

        res.status(200).json(footprintData);

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


//Get user buckets
const getUserBuckets = async (req, res) => {
    try {
        const user = req.params.id;
        const userExists = await User.findById(user);

        if (!userExists) {
            return res.status(404).json({ message: `User ${user} not found` });
        }

            const buckets = await Bucket.find({ userId: user}).populate("volumes")
            if (!buckets) {
                return res.status(404).json({ message: "No buckets found" });
            }
            res.status(200).json(buckets);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

//Get user volumes

const getUserVolumes = async (req, res) => {
    try {
        const user = req.params.id;
        const userExists = await User.findById(user);

        if (!userExists) {
            return res.status(404).json({ message: `User ${user} not found` });
        }

            const volumes = await Volume.find({ userId: user}).populate("bucketId containerId");
            if (!volumes) {
                return res.status(404).json({ message: "No volumes found" });
            }
            res.status(200).json(volumes);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const getUserAlerts = async (req, res) => {
    try {
        const user = req.params.id;
        const userExists = await User.findById(user);

        if (!userExists) {
            return res.status(404).json({ message: `User ${user} not found` });
        }

            const alerts = await Alert.find({ userId: user}).populate("containerId");
            if (!alerts) {
                return res.status(404).json({ message: "No alerts found" });
            }
            res.status(200).json(alerts);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}
module.exports = {
    getAllUsers,
    getUserById,
    getUserContainers,
    getUserFootprints,
    getUserBuckets,
    getUserVolumes,
    getUserAlerts
}