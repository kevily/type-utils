import { Depth } from '../_Internal.ts'
import { AnyObject } from './AnyObject.js'
import { hasOptional } from './hasOptional.js'

type $Depth = Depth | 'penetrable'

type PickOptionalFlat<T> = {
    [key in keyof T as Omit<T, key> extends T ? key : never]: T[key]
}

type PickOptionalDeep<T> = {
    [key in keyof T as Omit<T, key> extends T ? key : never]: T[key] extends object
        ? PickOptionalDeep<T[key]>
        : T[key]
}
type PickOptionalPenetrable<T> = PickOptionalDeep<T> & {
    [key in keyof T as Omit<T, key> extends T
        ? never
        : T[key] extends object
        ? hasOptional<T[key]> extends true
            ? key
            : never
        : never]: PickOptionalPenetrable<T[key]>
}
/**
 * @example
 * ```ts
 * interface recordType {
 *     a?: string
 *     b: { a: string; b?: number }
 *     c: string
 *     d?: { a: string; b?: number }
 *     e?: { a: string }
 * }
 *
 * PickOptional<objectType> => { a?: string, d?: { a: string; b?: number }  }
 * PickOptional<objectType, 'deep'> => { a?: string; d?: { b?: number }  }
 * PickOptional<objectType, 'penetrable'> => { a?: string; b: { b?: number }; d?: { b?: number }; e?:{} }
 * ```
 */
export type PickOptional<Target extends AnyObject, D extends $Depth = 'flat'> = {
    flat: PickOptionalFlat<Target>
    deep: PickOptionalDeep<Target>
    penetrable: PickOptionalPenetrable<Target>
}[D]
