const axios = require('axios').default;

const eiaGasoline = async (req, res) => {
    try {
        const response = await axios.get('https://api.eia.gov/series/?api_key=786c01b629a63f50e568ee184c49eaf4&series_id=PET.EMM_EPMR_PTE_YBOS_DPG.A');
        const { series } = response.data
        res.status(200).json({
            message: 'Data eia',
            dataPrices: series
        }); 
    } catch (error) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}

module.exports = {
    eiaGasoline
}