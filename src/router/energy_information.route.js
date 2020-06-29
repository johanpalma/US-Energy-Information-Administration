const { Router } = require('express');
const router = Router();

const { eiaGasoline } = require('../controller/energy_information.controller');

router.get('/get_prices', eiaGasoline);

module.exports = router;