/**
 * @example
 * ```ts
 * AddValueType<{a: string, b: string}, number> // {a: string | number, b: string | number}
 * ```
 */
export type AddValueType<T, Type> = {
    [K in keyof T]: T[K] | Type
}
