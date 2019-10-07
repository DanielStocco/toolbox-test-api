const app = require('../app');
const { assert } = require('chai');
const request = require('supertest');

describe('Testing api', () => {
  const message = 'Este es un mensaje';
  it('Should get a success response', done => {
    request(app)
      .post('/')
      .send({ message })
      .end((err, res) => {
        assert.equal(res.statusCode, 200, "Status should be 200");
        assert.equal(res.body.message, message, "text should be equals");
        done();
      })
  });
  it('Should get an error response. Route not found', done => {
    request(app)
      .get('/no-route')
      .end((err, res) => {
        assert.equal(res.statusCode, 404, "Status should be 404");
        done();
      })
  });
});