const request = require('supertest');
const app = require('./app');

// Test 1: App is defined
test('App should be defined', () => {
    expect(app).toBeDefined();
});

// Test 2: Health check returns 200
test('GET /health should return 200 and healthy status', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toEqual(200);
    expect(res.body.status).toEqual('healthy');
});

// Test 3: Root route returns 200
test('GET / should return 200', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
});

// Test 4: Root route contains "Hello from Instance"
test('GET / should return the correct message', async () => {
    const res = await request(app).get('/');
    expect(res.text).toContain('Hello from Instance');
});