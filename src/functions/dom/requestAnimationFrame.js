// @flow

export default function requestAnimationFrame(cb: Function) {
    return window.requestAnimationFrame(cb);
}