const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (req, res, next) => {
  const auth = req.headers.authorization;

  if (!auth) return res.status(401).send('Token not found');

  const [, token] = auth.split(' ');

  try {
    const payload = jwt.verify(token, process.env.APP_SECRET);
   
    req.userId = payload.userId;

    return next();

  } catch (err) {
    return res.status(401).send('Invalid token');
  }
};
