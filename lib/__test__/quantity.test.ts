import { describe, expect, it } from 'vitest'
import { measurement } from '../measurement'
import { unit } from '../unit'

describe('quantity', () => {
  const information = measurement(
    unit('bit'),
    unit('byte', 8),
    unit('kibibyte', 1024),
    unit('gibibyte', 1024 * 1024),
  )

  const fiveHundredBytes = information(500, 'byte')

  describe('object api', () => {
    describe('convert', () => {
      it('should return initial value for initial unit', () => {
        expect(fiveHundredBytes.in('byte')).toStrictEqual(500)
      })

      it('should return proper value for greater unit', () => {
        expect(fiveHundredBytes.in('kibibyte')).toStrictEqual(500 / 1024)
        expect(fiveHundredBytes.in('gibibyte')).toStrictEqual(
          500 / 1024 / 1024 / 1024,
        )
      })

      it('should return proper value for lower unit', () => {
        expect(fiveHundredBytes.in('bit')).toStrictEqual(500 * 8)
      })
    })

    describe('toString', () => {
      it('should return initial value for initial unit', () => {
        expect(fiveHundredBytes.toString('byte')).toStrictEqual('500 byte')
      })

      it('should return proper value for greater unit', () => {
        expect(fiveHundredBytes.toString('kibibyte')).toStrictEqual(
          `${500 / 1024} kibibyte`,
        )
        expect(fiveHundredBytes.toString('gibibyte')).toStrictEqual(
          `${500 / 1024 / 1024 / 1024} gibibyte`,
        )
      })

      it('should return proper value for lower unit', () => {
        expect(fiveHundredBytes.toString('bit')).toStrictEqual(`${500 * 8} bit`)
      })
    })
  })
})
