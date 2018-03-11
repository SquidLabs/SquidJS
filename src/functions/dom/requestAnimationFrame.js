// @flow

export default function requestAnimationFrame(cb: Function) {
  // we will want to change this to work in conjuction with our dom objects.
  return window.requestAnimationFrame(cb);
}
