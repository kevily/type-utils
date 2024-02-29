import { Depth } from '../_Internal.ts'

type $Depth = Depth | 'penetrable'
type PickRequiredFlat<T> = {
    [key in keyof T as Omit<T, key> extends T ? never : key]: T[key]
}
type PickRequiredDeep<T> = {
    [key in keyof T as Omit<T, key> extends T ? never : key]: T[key] extends object
        ? PickRequiredDeep<T[key]>
        : T[key]
}
type PickRequiredPenetrable<T> = PickRequiredFlat<T> & {
    [key in keyof T as T[key] extends object ? key : never]: PickRequiredPenetrable<T[key]>
}

/**
 * @example
 * ```ts
 * interface recordType {
 *     c: string
 *     a?: number
 *     b: { a: string; b?: number }
 *     d?:{ a: string; b?: number }
 * }
 *
 * type requiredRecordType = PickRequired<objectType> // { c: string; b: { a: string; b?: number } }
 * type requiredDeepRecordType = PickRequired<objectType, 'deep'> // { c: string b: { a: stringr } }
 * type requiredDeepRecordType = PickRequired<objectType, 'penetrable'> // { c: string b: { a: string; b?: number }, d?: { a: string } }
 * ```
 */
export type PickRequired<Target extends object, D extends $Depth = 'flat'> = {
    flat: PickRequiredFlat<Target>
    deep: PickRequiredDeep<Target>
    penetrable: PickRequiredPenetrable<Target>
}[D]
