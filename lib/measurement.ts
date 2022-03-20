import {
  MeasurementUnit,
  MeasurementUnitWithMultiplier,
  Quantity,
} from './types'

export const measurement =
  <Initials extends string>(
    ...units: [
      MeasurementUnit<Initials>,
      ...MeasurementUnitWithMultiplier<Initials>[],
    ]
  ) =>
  (initial: number, initialUnit: Initials): Quantity<Initials> => ({
    initial,
    initialUnit,
    in(unit) {
      const currentUnitIndex = units.findIndex(
        x => x.initials === this.initialUnit,
      )
      const nextUnitIndex = units.findIndex(x => x.initials === unit)

      if (currentUnitIndex === nextUnitIndex) {
        return this.initial
      }

      if (nextUnitIndex > currentUnitIndex) {
        return (
          units.slice(
            currentUnitIndex + 1,
            nextUnitIndex + 1,
          ) as MeasurementUnitWithMultiplier<Initials>[]
        ).reduce(
          (acc: number, { multiplier }) => acc / multiplier,
          this.initial,
        )
      }

      return (
        units.slice(
          nextUnitIndex + 1,
          currentUnitIndex + 1,
        ) as MeasurementUnitWithMultiplier<Initials>[]
      ).reduce((acc: number, { multiplier }) => acc * multiplier, this.initial)
    },
    toString(unit) {
      if (!unit) {
        unit = this.initialUnit
      }

      return `${this.in(unit)} ${unit}`
    },
  })
