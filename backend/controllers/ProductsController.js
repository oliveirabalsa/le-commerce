const connection = require('../src/database/connection');

module.exports = {
  async index(req, res) {
    const products = await connection('produtos').select('*');

    return res.json(products);
  },

  async indexId(req, res){
    try {
      const product = await connection('produtos').where('id', req.params.id)

      if(!product.length){
        res.json({error: `no product with that id: ${req.params.id}`})
      }

      res.json({product, statuscode: "200"})

       } catch(err) {
      res.json({error: `an error has ocurred: ${err}`})
   }
},

  async create(req, res) {

    const created = await connection('produtos').insert(req.body);

    const onCreated = await connection('produtos').where('id', created[0])

    return res.json(onCreated);
  },
};
