const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {
  // GET TEST
  it('return plain text "hi"', async () => {
    const response = await request(app).get('/');
    expect(response.text).toEqual('hi');
  });

  // POST TEST
  it('return a status code 200 in plain texts with request body ', async () => {
    const response = await request(app).post('/echo').send('hello you');
    expect(response.text).toEqual('hello you');
  });

  // GET TEST
  it('return html with an h1 and the word red', async () => {
    const response = await request(app).get('/red');
    expect(response.text).toEqual('<h1>red</h1>');
  });

  // GET TEST
  it('return html with an h1 and the word green', async () => {
    const response = await request(app).get('/green');
    expect(response.text).toEqual('<h1>green</h1>');
  });

  // GET TEST
  it('return html with an h1 and the word blue', async () => {
    const response = await request(app).get('/blue');
    expect(response.text).toEqual('<h1>blue</h1>');
  });
});
