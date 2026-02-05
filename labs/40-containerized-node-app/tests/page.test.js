import test from 'node:test';
import assert from 'node:assert';
import { buildApp } from '../app/app.js';

test('GET / responds with a page', async () => {
  const app = await buildApp();

  const response = await app.inject({
    method: 'GET',
    url: '/'
  });

  assert.strictEqual(response.statusCode, 200);

  // TODO:
  // - inspect response.body
  // - assert on returned content
  // - add more tests for other routes
});
