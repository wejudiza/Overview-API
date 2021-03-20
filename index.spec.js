const server = require('./mockServer.js');
const supertest = require('supertest');
const request = supertest(server);

it('test getProductInfo route', async done => {
  const res = await request
    .get('/products/1')
  expect(res.status).toBe(200);
  expect(res.body.id).toBe(1);
  expect(typeof res.body).toBe('object');
  done()
});

it('test getStyles route', async done => {
  const res = await request
    .get('/products/3/styles')
  expect(res.status).toBe(200);
  expect(res.body.results[0].style_id).toBe(11);
  expect(typeof res.body).toBe('object');
  done()
});

it('test getRelatedProducts route', async done => {
  const res = await request
    .get('/products/24908/related')
  expect(res.status).toBe(200);
  expect(res.body).toStrictEqual([
    19057,
    18721,
    21134
  ]);
  expect(Array.isArray(res.body)).toBe(true);
  done()
});