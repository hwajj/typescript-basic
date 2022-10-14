{
  type Score = 'A' | 'B' | 'C' | 'F';

  interface User {
    name: string;
    age: number;
    gender?: string;
    readonly birthYear: number;
    [grade: number]: Score;
    //[key: number] : Score;
    // 키는 number로 받고 value를 Score로 받는 프로퍼티 여러개 받는다는 뜻
  }

  let user: User = {
    name: 'xx',
    age: 30,
    birthYear: 2000,
    1: 'A',
    2: 'B',
  };
}

{
  interface Add {
    (num1: number, num2: number): number;
  }

  const add: Add = function (x, y) {
    return x + y;
  };

  add(10, 20); //30

  interface IsAdult {
    (age: number): boolean;
    //숫자를 받아 boolean 리턴
  }

  const a: IsAdult = (age) => {
    return age > 19;
  };

  a(33); //true
}
