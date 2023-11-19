import { StringAt } from '../string'
/**
 * @example
 * ```ts
 * const obj = {a: 1}
 * type a = At<obj, 'a'> // number
 *
 * const readonlyObj = {a: 1} as const
 * type readonlyA = At<obj, 'a'> // 1
 *
 * const arr = [1,'2']
 * type el = At<arr, 0> // number | string
 *
 * const readonlyArr = [1,'2'] as const
 * type readonlyEl = At<arr, 0> // 1
 *
 * type stringEl = At<'string', 2> // 'r'
 * ```
 */
export type At<T, K extends keyof T> = K extends keyof T
    ? T extends string
        ? StringAt<T, K>
        : T[K]
    : unknown
