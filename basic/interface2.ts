//interface로 클래스 만들기

interface Car {
  color: string;
  wheels: number;
  start(): void;
}

class Bmw implements Car {
  color;
  wheels = 4;
  constructor(c: string) {
    this.color = c;
  }

  start() {
    console.log('go..');
  }
}

const b = new Bmw('blue');

console.log(b);
