const dotenv = require('dotenv');
const fetch = require('node-fetch');
const axios = require('axios');
dotenv.config();

module.exports.upcoming = async (req, res) => {
    let data = await getUpcomingLaunches();
    res.send(data);
}

module.exports.archive = async (req, res) => {
    let data = await getPastLaunches();
    res.send(data);
}

module.exports.launchData = async (req, res) => {
    let data = await getOneLaunch();
    res.send(data);
}

module.exports.getOneLaunch = async (req, res) => {
    const { id } = req.body;
    let data = ''
    if (id) {
        await axios.get(`https://api.spacexdata.com/v4/launches/${id}`)
            .then(response => {
                data = response.data;
                // console.log(data);
                res.send(data);
            })
            .catch(error => {
                console.log(error.response);
            })
    } else return
}

module.exports.getOneRocket = async (req, res) => {
    const { rocketId } = req.body;
    let data = ''
    if (rocketId) {
        await axios.get(`https://api.spacexdata.com/v4/rockets/${rocketId}`)
            .then(response => {
                data = response.data;
                // console.log(data);
                res.send(data);
            })
            .catch(error => {
                console.log(error.response);
            })
    } else return
}

module.exports.getOneCrew = async (req, res) => {
    console.log('Accessing crew')
    const { id } = req.body;
    let data = ''
    if (id) {
        await axios.get(`https://api.spacexdata.com/v4/crew/${id}`)
            .then(response => {
                data = response.data;
                console.log(data);
                res.send(data);
            })
            .catch(error => {
                console.log(error.response);
            })
    } else return
}

module.exports.getOneCapsule = async (req, res) => {
    console.log('Accessing capsule')
    const { id } = req.body;
    let data = ''
    if (id) {
        await axios.get(`https://api.spacexdata.com/v4/capsules/${id}`)
            .then(response => {
                data = response.data;
                console.log(data);
                res.send(data);
            })
            .catch(error => {
                console.log(error.response);
            })
    } else return
}

async function getUpcomingLaunches() {
    const request = 'https://api.spacexdata.com/v4/launches/upcoming';
    const response = await fetch(request);
    const data = await response.json();
    return data;
}

async function getPastLaunches() {
    const request = 'https://api.spacexdata.com/v4/launches/past';
    const response = await fetch(request);
    const data = await response.json();
    return data;
}

