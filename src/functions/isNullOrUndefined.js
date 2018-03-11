//@flow
import isUndefined from './isUndefined';
import isNull from './isNull';

export default function isNullOrUndefined(value: any): boolean {
  return isNull(value) || isUndefined(value);
}
