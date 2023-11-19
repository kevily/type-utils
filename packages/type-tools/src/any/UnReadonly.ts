import { Depth } from '../_Internal.ts.js'

type UnReadonlyFlat<R> = {
    -readonly [K in keyof R]: R[K]
}
type UnReadonlyDeep<R> = {
    -readonly [K in keyof R]: UnReadonlyDeep<R[K]>
}

/**
 * @example
 * ```ts
 * type readonluObj = { readonly a: string; readonly b: { readonly a: string } }
 * UnReadonly<readonluObj> // { a: string; b: { readonly a: string } }
 * UnReadonly<readonluObj, 'deep'> // { a: string; b: { a: string } }
 * ```
 */
export type UnReadonly<R, depth extends Depth = 'flat'> = {
    flat: UnReadonlyFlat<R>
    deep: UnReadonlyDeep<R>
}[depth]
