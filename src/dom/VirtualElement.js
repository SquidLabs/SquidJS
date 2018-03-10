// take a dom element
// create a tree for the element to what level?
// current element for time being, if select on element parse tree down


export default class{
    constructor(el: Element) {
        //make deep copies?
        this.attributes = el.attributes;
        this.classList = el.classList;
        this.id = el.id;
        this.tagName = el.tagName;
    }

    // check global tree for element
    attributes: NamedNodeMap,
    classList: DOMTokenList,
    id: string,
    tagName: string
}

