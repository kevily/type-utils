import { Depth } from '../_Internal.ts'

type OptionalFlat<T extends Record<PropertyKey, any>, K extends PropertyKey> = Omit<T, K> & {
    [key in K]?: T[key]
}

type OptionalDeep<T extends Record<PropertyKey, any>, K extends PropertyKey> = {
    [key in keyof Omit<T, K>]: T[key] extends object ? OptionalDeep<T[key], K> : T[key]
} & {
    [key in K]?: T[key] extends object ? OptionalDeep<T[key], K> : T[key]
}

/**
 * @example
 * ```ts
 * interface test {
 *     a: string
 *     b: { a: string }
 *     c: number
 * }
 *
 * Optional<test, 'a'> => { a?: string, b: { a: string }, c: number }
 * Optional<test, 'a', 'deep'> => { a?: string, b: { a?: string }, c: number }
 * ```
 */
export type Optional<T extends object, K extends keyof T, D extends Depth = 'flat'> = {
    flat: OptionalFlat<T, K>
    deep: OptionalDeep<T, K>
}[D]
