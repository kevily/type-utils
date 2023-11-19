import { AnyArray } from './AnyArray'

/**
 * @example
 * ```ts
 * const arr = [1,2,3]
 * ArrayValues<typeof arr> // number
 *
 * const readonlyArr = [1,2,3] as const
 * ArrayValues<typeof readonlyArr> // 1 | 2 | 3
 * ```
 */
export type ArrayValues<T extends AnyArray> = T extends Array<infer V> | ReadonlyArray<infer V>
    ? V
    : unknown
