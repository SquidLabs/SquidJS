// @flow
import DiffInjector from './DiffInjector';
import { IDiffWorker } from './IDiffWorker';
import VirtualElement from './VirtualElement';

export default class SquidElement {
  constructor(el: Element) {
    this.element = el;
    this.diffWorker = DiffInjector.inject(this);
  }
  virtualElement: VirtualElement
  element: Element
  diffWorker: IDiffWorker
};