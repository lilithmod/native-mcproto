import test from 'ava'

import { multiply } from '../index.js'

test('multiply from native', (t) => {
  t.is(multiply(3, 2), 6)
})
