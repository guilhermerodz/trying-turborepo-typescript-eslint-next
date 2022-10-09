import { describe, it, expect } from 'vitest'
import { subtract, sum } from '.'

describe('Custom Math library', () => {
  it('should sum correctly', () => {
    expect(sum(1, 3)).toBe(4)
    expect(sum(1, -3)).toBe(-2)
    expect(sum(-3, -3)).toBe(-6)
  })
  it('should subtract correctly', () => {
    expect(subtract(3, 3)).toBe(0)
    expect(subtract(-3, -3)).toBe(0)
    expect(subtract(3, -3)).toBe(6)
  })
})
