const { expect, describe } = require("@jest/globals");

const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

describe('Test uppercase function', () => {
  it('return string "era uma vez" to uppercase', (done) => {
    uppercase('era uma vez', (result) => {
      expect(result).toBe('ERA UMA VEZ');
      done();
    });
  });
})