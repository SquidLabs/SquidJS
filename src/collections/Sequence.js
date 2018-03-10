//@flow
import ICollection from './ICollection';
import isNullOrUndefined from '../functions/isNullOrUndefined'


export class Seq implements ICollection {
    constructor(value: any) {
        return isNullOrUndefined(value) ? emptySequence() : createSequence(value);
    }
}