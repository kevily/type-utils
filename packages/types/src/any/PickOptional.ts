import { Depth } from '../_Internal.ts'

type $Depth = Depth | 'penetrable'

type PickOptionalFlat<T> = {
    [key in keyof T as Omit<T, key> extends T ? key : never]: T[key]
}

type PickOptionalDeep<T> = {
    [key in keyof T as Omit<T, key> extends T ? key : never]: T[key] extends object
        ? PickOptionalDeep<T[key]>
        : T[key]
}
type PickOptionalPenetrable<T> = PickOptionalFlat<T> & {
    [key in keyof T as T[key] extends object ? key : never]: PickOptionalPenetrable<T[key]>
}
/**
 * @example
 * ```ts
 * interface recordType {
 *     c: string
 *     a?: number
 *     b: { a: string; b?: number }
 * }
 *
 * type requiredRecordType = PickOptional<objectType> // { a?: number }
 * type OptionalPenetrableRecordType = PickOptional<objectType, 'deep'> // { a?: string }
 * type OptionalPenetrableRecordType = PickOptional<objectType, 'penetrable'> // { a?: string b: { b?: number } }
 * ```
 */
export type PickOptional<Target, D extends $Depth = 'flat'> = {
    flat: PickOptionalFlat<Target>
    deep: PickOptionalDeep<Target>
    penetrable: PickOptionalPenetrable<Target>
}[D]
