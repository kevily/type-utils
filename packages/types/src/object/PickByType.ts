import { Depth } from '../_Internal.ts'

type PickByTypeFlat<Target, Type> = {
    [key in keyof Target as Target[key] extends Type ? key : never]: Target[key]
}

type PickByTypeDeep<Target, Type> = PickByTypeFlat<Target, Type> & {
    [key in keyof Target as Target[key] extends object ? key : never]: PickByTypeDeep<
        Target[key],
        Type
    >
}

/**
 * @example
 * ```ts
 * PickByType<{a: string; b: number;  c: {a: string; b: number}}, string> // {a: string;}
 * PickByType<{a: string; b: number; c: {a: string; b: number}}, string> // {a: string; c: { a: string }}
 * ```
 */
export type PickByType<Target extends object, Type, D extends Depth = 'flat'> = {
    flat: PickByTypeFlat<Target, Type>
    deep: PickByTypeDeep<Target, Type>
}[D]
