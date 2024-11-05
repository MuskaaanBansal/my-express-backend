const request = require('supertest');
const app = require('../app');

describe('User Routes', () => {
  it('should get all users', async () => {
    const res = await request(app).get('/users');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('length');
  });

  // Add more tests as needed
});
