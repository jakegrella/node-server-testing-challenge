const request = require('supertest');
const server = require('./server');

test('sanity', () => {
	expect(2 + 2).toBe(4);
});

describe('server.js', () => {
	describe('index route', () => {
		it('should return OK status code (200)', async () => {
			const expectedStatusCode = 200;

			const response = await request(server).get('/');
			expect(response.status).toEqual(expectedStatusCode);
		});
		it('should return JSON object', async () => {
			const expectedBody = { api: 'running' };

			const response = await request(server).get('/');
			expect(response.body).toEqual(expectedBody);
		});
	});
});
