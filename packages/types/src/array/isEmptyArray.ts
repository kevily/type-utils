import { AnyArray } from './AnyArray'

export type isEmptyArray<T extends AnyArray> = T extends [] ? true : false
