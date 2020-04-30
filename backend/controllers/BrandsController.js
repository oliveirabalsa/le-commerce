const connection = require('../src/database/connection');

module.exports = {
  async create(req, res) {
    try {
      const data = req.body;
      const response = await connection('brands').insert(data);

      res.status(200).json({
        message: 'Brand created sucessfully',
        brand: {
          brand_id: response[0],
          brand_name: data['brand_name'],
        },
      });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },
  async index(req, res) {
    try {
      const response = await connection('brands').select('*');
      res.status(200).json(response);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      await connection('brands').where('brand_id', id).delete();

      res.status(204).json({message: "brand has been deleted"});
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },
};
