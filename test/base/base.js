'use strict';

const
  request = require('supertest'),
  app = require('../../index');

describe('Can CRUD data in "base" format', () => {

  describe('Can CRUD schema', () => {

    it('should GET all schemas in json format', done => {
      request(app.listen())
      .get('/base/schemas')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(done);
    });

    it('should POST new valid schemas', done => {
      request(app.listen())
      .post('/base/schemas')
      .send({
        name: 'Test',
        data: {
          foo: {},
          bar: {},
          baz: {}
        }
      })
      .expect('Content-Type', /json/)
      .expect(200)
      .end(done);
    });

    // it('should GET specific key from schema in json format', done => {
    //   request(app.listen())
    //   .get('/base/schema')
    //   .expect('Content-Type', /json/)
    //   .expect(200)
    //   .end(done);
    // });

  });
});
