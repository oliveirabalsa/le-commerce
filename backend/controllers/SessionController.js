require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const connection = require('../src/database/connection');

module.exports = {
  async login(req, res) {
    try {
      const { email, password } = req.body;

      const user = await connection('users')
        .where('email', email)
        .select('*')
        .first();

      const passwordCorrect = await bcrypt.compare(password, user.password);

      passwordCorrect ? '' : res.status(401).send('Wrong password');
      
      return res.json({
        token: jwt.sign({ userId: user.id }, process.env.APP_SECRET, {
          expiresIn: '7d',
        }),
      });

    } catch (err) {
      res.status(400).send(`An error as ocurred ${err}`);
    }
  },
};
