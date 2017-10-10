'use strict';

const Parse = require('parse/node');

describe('Parse', () => {
  it('should have a hello world function', done => {
    Parse.Cloud.run('hello')
      .then((res) => {
        expect(res).not.toBeNull();
        expect(res.random).not.toBeNaN();
        expect(res.hello).toBe('world');
        done();
      });
  });
});