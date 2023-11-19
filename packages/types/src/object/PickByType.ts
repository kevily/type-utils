/**
 * @example
 * ```ts
 * PickByType<{a: string; b: number; c: string}, string> // {a: string; c: stirng}
 * ```
 */
export type PickByType<Target extends object, Type> = {
    [key in keyof Target as Type extends Target[key] ? key : never]: Target[key]
}
