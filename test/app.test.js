// test/app.test.js
const request = require('supertest');
const app = require('../app'); // Assuming your Express app is in app.js

describe('GET /', () => {
  it('should return a 200 status code', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
  });
});
