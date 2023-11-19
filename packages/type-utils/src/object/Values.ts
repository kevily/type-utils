/**
 * @example
 * ```ts
 * ObjectValues<{a: string; b: number; c: string}> // string | number
 * ```
 */
export type ObjectValues<T extends object> = T extends Record<any, infer V> ? V : unknown
