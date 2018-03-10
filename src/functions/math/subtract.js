// @flow

import sum from './sum'

export default function subtract(initialValue: number, subtractor: number, ...rest: Array<number>) {
    let value: number = initialValue - subtractor;
    if (rest.length) {
        value -= Function.apply(sum, this, rest);
    }
    return value;
};