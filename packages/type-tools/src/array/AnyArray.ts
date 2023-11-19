/**
 * @example
 * ```ts
 * AnyArray<string> // Array<string> | ReadonlyArray<string>
 * ```
 */
export type AnyArray<T = any> = Array<T> | ReadonlyArray<T>
