const request = require('supertest');

const server = require('./server.js');

describe('server.js', () => {
    describe('GET /', () => {
        it('returns 200 OK', () => {
            return request(server)
                .get('/')
                .then(res => {
                    // expect(res.status).toBe(500)
                    expect(res.status).toBe(200)
                })
        })
    })
})