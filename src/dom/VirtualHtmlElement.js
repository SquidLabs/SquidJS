import virtualElement from "./virtualElement";

// take a dom element
// create a tree for the element to what level?
// current element for time being, if select on element parse tree down


export default class extends virtualElement {
  constructor(el: HTMLElement) {
    base(el);
  }
  hidden: boolean,
  dataset: DOMStringMap,
  nonce: string,
  style: CSSStyleDeclaration,
  title: string
}

