// @flow

export default function reduce<T>(collection: Array<T>, callback: Function, initialValue: ?T) {
  return collection.reduce(callback, initialValue);
}
