const connection = require('../src/database/connection')

module.exports = {

    async create (req, res) {
        try {
            await connection('categories').insert(req.body)
            res.json({categories, data})

        } catch (err) {
            res.json({error: `an error has ocurred: ${err}`})
        }
    },

    async index (req, res) {
        try {
        const categories =  await connection('categories').select('*')    
        res.json(categories)

        } catch(err) {
            res.json({error:`An error has ocurred ${err}`})
        }
    }
};