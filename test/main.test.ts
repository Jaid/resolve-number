import {expect, test} from 'bun:test'

const {default: resolveNumber} = await import('#src/main.ts')

test('should run', () => {
  const result = resolveNumber()
  expect(result).toBe('resolve-number') // TODO Test actual functionality
})
