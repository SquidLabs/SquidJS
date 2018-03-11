// @flow
import curry from '../curry';

export default function (el: Element, selectors: string) {
  // convert nodelist<element> to a seq of squid elements or their respective types.
  return el.querySelectorAll(selectors);
}
