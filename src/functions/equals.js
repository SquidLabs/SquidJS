// @flow

import reduce from './reduce'

export default function equals(left: any, right: any, ...rest?: any) {
    let equality = left === right;
    if (rest.length) {
        equality = reduce(rest, equals, equality);
    }

    return equality;
}