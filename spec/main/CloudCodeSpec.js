'use strict';

const Parse = require('parse/node');

describe('Parse', function() {
  it('should have a hello world function', function(done) {
    Parse.Cloud.run('hello')
      .then(function(res) {
        expect(res).not.toBeNull();
        expect(res.random).not.toBeNaN();
        expect(res.hello).toBe('world');
        done();
      });
  });
});