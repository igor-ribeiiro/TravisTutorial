const Parse = require('parse').Parse;

Parse.initialize('BesPSuSggd4ks2PUKfyjbHuH0C5pvRHovzZPGBvs', '8NZQE06iyB91wZiViST4tDh1Ww0LlFakO6FujSfG');



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
