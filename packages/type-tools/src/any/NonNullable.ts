/**
 * @example
 * ```ts
 * NonNullable<string | null undefind> // string
 * ```
 */
export type NonNullable<U> = Exclude<U, undefined | null>
