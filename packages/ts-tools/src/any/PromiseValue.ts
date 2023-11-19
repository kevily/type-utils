/**
 * @example
 * ```ts
 * PromiseValue<Promise<string>> // string
 * ```
 */
export type PromiseValue<T> = T extends Promise<infer U> ? U : unknown
