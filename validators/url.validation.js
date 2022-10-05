const { param, body } = require('express-validator');
const { validator } = require('./validator');


const getUrlByName  = [
    param('nama').isLength({min: 8}),
    validator
]

const getUrlByEmailTelepon  = [
    param('email').isLength({min: 8}),
    param('telepon').isLength(12),
    validator
]
const insertUrl =  [
    body('nama').isLength({min: 8}),
    body('jenis_kelamin').isIn(['P','L']),
    body('angkatan').isNumeric({gt : 2018}),
    body('email').isEmail(),
    body('telepon').isLength(12),
    body('deskripsi').not().isEmpty(),
    validator
]

const bulkinsertUrl  = [
    body('*.nama').isLength({min: 8}),
    body('*.jenis_kelamin').isIn(['P','L']),
    body('*.angkatan').isNumeric({gt : 2018}),
    body('*.email').isEmail(),
    body('*.telepon').isLength(12),
    body('*.deskripsi').not().isEmpty(),
    validator
]
   
const deleteUrl = [
    body('email').isEmail(),
    validator
]

const updateUrl = [
    body('nama').isLength({min: 8}),
    body('deskripsi').not().isEmpty(),
    validator
]

module.exports = {
    getUrlByName,
    getUrlByEmailTelepon,
    insertUrl,
    bulkinsertUrl,
    deleteUrl,
    updateUrl
}