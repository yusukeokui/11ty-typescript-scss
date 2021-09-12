export class TopPage {
  private _elTarget: Element;

  constructor(elTarget: Element) {
    this._elTarget = elTarget;

    this._hello();
  }

  private _hello() {
    this._elTarget.append("Hello TypeScript!");
  }
}
