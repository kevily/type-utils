/**
 * @example
 * ```ts
 * AnyObject // Record<string | number | symbol, any>
 * ```
 */
export type AnyObject<V = any> = Record<PropertyKey, V>
