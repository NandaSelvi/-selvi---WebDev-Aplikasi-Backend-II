const { urlServices } = require('../services');
const { responseHelper } = require('../helper');

const getUrls = async (req, res) => {
    try {

        const urls = await urlServices.getUrls();
        if(urls instanceof Error) {
            throw new Error(urls);
        } 
        res.status(responseHelper.status.success).json(urls);
        
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}
const getUrlByName = async (req, res) => {
    try {
        const { nama } = req.params;
        const url = await urlServices.getUrlByName(nama);
        res.status(responseHelper.status.success).json(url);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}
const getUrlByEmailTelepon = async (req, res) => {
    try {
        const { email, telepon } = req.params;
        const url = await urlServices.getUrlByEmailTelepon(email, telepon);
        res.status(responseHelper.status.success).json(url);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}
const insertUrl = async (req, res) => {
    try {

        const { nama, jenis_kelamin, angkatan, email, telepon, deskripsi } = req.body;
        const result = await urlServices.insertUrl(nama, jenis_kelamin, angkatan, email, telepon, deskripsi);
        if(result instanceof Error) {
            throw new Error(result);
        }
        res.status(responseHelper.status.success).json(result);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}
const bulkinsertUrl = async (req, res) => {
    try {
        const result = await urlServices.bulkinsertUrl(JSON.stringify(req.body));
        
        if(result instanceof Error) {
            throw new Error(result);
        }

        res.status(responseHelper.status.success).json(result);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}
const deleteUrl = async (req, res) => {
    try {
        const { email } = req.body;
        const result = await urlServices.deleteUrl(email);
        if(result instanceof Error) {
            throw new Error(result);
        }
        res.status(responseHelper.status.success).json(result);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}
const updateUrl = async (req, res) => {
    try {
        const { nama, deskripsi } = req.body;
        const result = await urlServices.updateUrl(nama, deskripsi);
        if(result instanceof Error) {
            throw new Error(result);
        }
        res.status(responseHelper.status.success).json(result);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}

module.exports = {
    getUrls,
    getUrlByName,
    getUrlByEmailTelepon,
    insertUrl,
    bulkinsertUrl,
    deleteUrl,
    updateUrl
}