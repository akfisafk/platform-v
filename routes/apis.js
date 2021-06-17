// import express from 'express';

// const router = express.Router();

// import { upcoming, archive, getOneLaunch, getOneRocket, getOneCrew, getOneCapsule } from "../controllers/apis.js";

const express = require('express');
const router = express.Router();
const { upcoming, archive, getOneLaunch, getOneRocket, getOneCrew, getOneCapsule } = require('../controllers/apis');

router.get("/upcoming", upcoming);
router.get("/archive", archive)
router.post("/launchdata", getOneLaunch);
router.post("/rocket", getOneRocket)
router.post("/crew", getOneCrew)
router.post("/capsule", getOneCapsule)

// export default router;
module.exports = router;