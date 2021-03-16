class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}

Vec.prototype.plus = function (v1) {
  let x = this.x + v1.x;
  let y = this.y + v1.y;
  return new Vec(x, y);
};

Vec.prototype.minus = function (v1) {
  let x = this.x - v1.x;
  let y = this.y - v1.y;
  return new Vec(x, y);
};
