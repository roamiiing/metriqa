export type MeasurementUnit<Initials extends string> = {
  initials: Initials
}

export type MeasurementUnitWithMultiplier<Initials extends string> =
  MeasurementUnit<Initials> & {
    multiplier: number
  }

export type Quantity<Initials extends string> = {
  initial: number
  initialUnit: Initials

  in(unit: Initials): number
  toString(unit?: Initials): string
}
