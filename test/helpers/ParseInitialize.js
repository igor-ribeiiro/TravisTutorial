const path = require('path');
const express = require('express');
const ParseServer = require('parse-server').ParseServer;
const Parse = require('parse/node');
const app = express();
const TestUtils = require('parse-server').TestUtils;

beforeAll((done) => {
  const api = new ParseServer({
    databaseURI: 'mongodb://localhost:27017/integration',
    appId: 'integration',
    masterKey: 'notsosecret',
    serverURL: 'http://localhost:1337/',
    cloud: path.join(__dirname, '../../src/main.js'),
    logLevel: '0'
  });
  app.use('/parse', api);
  app.get('/clear', (req, res) => {
    TestUtils.destroyAllDataPermanently().then(() => {
      res.send('{}');
    });
  });

  Parse.initialize('integration', null, 'notsosecret');
  Parse.CoreManager.set('SERVER_URL', 'http://localhost:1337/parse');
  Parse.Storage._clear();

  app.listen(1337, () => {
    done();
  });
});
