// @flow

import reduce from './reduce';

export default function equals(left: any, right: any, ...args?: any): boolean {
  // faster way is find any that are not equal.
  let equality: boolean = left === right;
  if (args.length) {
    equality = reduce(args, equals, equality);
  }

  return equality;
}
