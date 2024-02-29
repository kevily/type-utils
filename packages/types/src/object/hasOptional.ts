import { AnyObject } from './AnyObject'
import { PickOptional } from './PickOptional'
import { isEmptyObject } from './isEmptyObject'

export type hasOptional<T extends AnyObject> = isEmptyObject<PickOptional<T>> extends true
    ? false
    : true
