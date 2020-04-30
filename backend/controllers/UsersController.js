const connection = require('../src/database/connection');
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);

module.exports = {
  async create(req, res) {
    try {
      const { name, whatsapp, email } = req.body;
      let { password } = req.body;

      password ? (password = bcrypt.hashSync(password, salt)) : '';

      const user = await connection('users').insert({
        name,
        whatsapp,
        email,
        password,
      });

      res.status(201).json({
        user: {
          name,
          email,
        },
      });
    } catch (err) {
      res.status(400).json({ error: `an error as ocurred: ${err}` });
    }
  },
  async index(req, res) {
    
    try {
      const users = await connection('users').select('*');
      res.status(200).json(users);
    
    } catch (err) {
      res.status(400).json({ error: `an error as ocurred ${err}` });
    }
  },
};
