const crypto = require('crypto');
const secret = 'random';
const algorithm = 'sha256'; // Why 256?;

const HmacGen = (data) => {
  let hmac = crypto.createHmac(algorithm, secret)
  hmac.write(data);
  hmac.end();
  let hash = hmac.read().toString('hex');
  let token = data + '&Signature=' + hash;
  return token;
}

module.exports = HmacGen;