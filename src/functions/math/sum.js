// @flow
import reduce from './reduce';

export default function (...rest: Array<number>) {
    return reduce(rest, function (value, memo) {
        memo += value;
    }, 0);
};