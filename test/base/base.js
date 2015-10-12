'use strict';

const
  request = require('supertest'),
  app = require('../../index');

describe('Can CRUD data in "base" format', () => {

  describe('Responds as expected', () => {
    const
      path = `/base/test-${Date.now()}/`,
      postData = {
        name: 'Test',
        data: {
          foo: {},
          bar: {},
          baz: {}
        }
      },
      replaceVal = {
        test: {},
        thing: {},
        foobar: {}
      };

    it('should not GET all data for invalid routes', done => {
      request(app.listen())
      .get(path)
      .expect(404)
      .end(done);
    });

    it('should POST new data', done => {
      request(app.listen())
      .post(path)
      .send(postData)
      .expect('Content-Type', /json/)
      .expect(200)
      .end(done);
    });

    it('should GET all data in json format for a valid route', done => {
      request(app.listen())
      .get(path)
      .expect('Content-Type', /json/)
      .expect(200, postData)
      .end(done);
    });

    it('should GET nested data in json format for a valid route', done => {
      const
        expKey = Object.keys(postData)[1],
        expVal = postData[expKey];

      request(app.listen())
      .get(`${path}/${expKey}/`)
      .expect('Content-Type', /json/)
      .expect(200, expVal)
      .end(done);
    });

    it('should POST nested data in json format for a valid route', done => {
      const expKey = Object.keys(postData)[1];

      request(app.listen())
      .post(`${path}/${expKey}/`)
      .send(replaceVal)
      .expect('Content-Type', /json/)
      .expect(200, replaceVal)
      .end(done);
    });

    it('should GET nested modified data in json format and return the modified value', done => {
      const expKey = Object.keys(postData)[1];

      request(app.listen())
      .get(`${path}/${expKey}/`)
      .expect('Content-Type', /json/)
      .expect(200, replaceVal)
      .end(done);
    });
  });
});
