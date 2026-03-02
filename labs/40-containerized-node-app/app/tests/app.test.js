import test from 'node:test'
import assert from 'node:assert'
import { buildApp } from '../app.js'

test('GET /health returns ok', async () => {
  const app = await buildApp()
  const response = await app.inject({
    method: 'GET',
    url: '/health'
  })
  assert.strictEqual(response.statusCode, 200)
  assert.match(response.headers['content-type'], /application\/json/)
  assert.deepStrictEqual(JSON.parse(response.body), { ok: true })
})
