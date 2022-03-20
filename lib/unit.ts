import { MeasurementUnit, MeasurementUnitWithMultiplier } from './types'

export function unit<Initials extends string>(
  initials: Initials,
): MeasurementUnit<Initials>

export function unit<Initials extends string>(
  initials: Initials,
  multiplier: number,
): MeasurementUnitWithMultiplier<Initials>

export function unit<Initials extends string>(
  initials: Initials,
  multiplier?: number,
) {
  return {
    initials,
    multiplier,
  }
}
