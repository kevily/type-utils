import { StringSplit } from './Split'

/**
 * @example
 * ```ts
 * StringAt<'string', 2> // r
 * ```
 */
export type StringAt<T extends string, K> = K extends number ? StringSplit<T, ''>[K] : unknown
