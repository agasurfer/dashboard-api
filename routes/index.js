const express = require("express");
const router = express.Router();

// Import subroutes
const containersRoutes = require('./containersRoutes');
const footprintsRoutes = require('./footprintsRoutes');
const bucketsRoutes = require('./bucketsRoutes');
const volumesRoutes = require('./volumesRoutes');
const alertsRoutes = require('./alertsRoutes');
const usersRoutes = require('./usersRoutes');

//Prefix definition

// Définir les préfixes pour chaque groupe de routes
const basePath = {
    users: "/users",
    containers: "/containers",
    footprints: '/footprints',
    buckets: "/buckets",
    volumes: '/volumes',
    alerts: '/alerts',
    
};

router.use(basePath.users, usersRoutes);
router.use(basePath.containers, containersRoutes);
router.use(basePath.footprints, footprintsRoutes);
router.use(basePath.volumes, volumesRoutes);
router.use(basePath.buckets, bucketsRoutes);
router.use(basePath.alerts, alertsRoutes);

module.exports = router;