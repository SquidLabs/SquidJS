// @flow
import divide from './divide';
import reduce from './reduce';
import sum from './sum';

export default function gt(a: Array<number>) {
    return divide(reduce(a, sum), a.length);
;}