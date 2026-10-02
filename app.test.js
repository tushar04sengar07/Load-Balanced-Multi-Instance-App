const request = require('supertest');
const app = require('./app');

// 1. Homepage loads successfully (status 200)
test('GET / should return 200', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
});

// 2. Homepage contains a greeting message
test('GET / should contain greeting message', async () => {
    const res = await request(app).get('/');
    expect(res.text).toContain('Hello from');
});

// 3. Health check endpoint responds correctly
test('GET /health should return 200 and healthy status', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toEqual(200);
    expect(res.body.status).toEqual('healthy');
});

// 4. Unknown routes correctly return a 404
test('GET /unknown should return 404', async () => {
    const res = await request(app).get('/unknown-route');
    expect(res.statusCode).toEqual(404);
});