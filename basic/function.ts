{
  function jsAdd(num1: number, num2: number): number {
    return num1 + num2;
  }

  console.log(jsAdd(2, 3));
}

{
  function jsFetchNum(num: number): Promise<number> {
    //code ...
    return new Promise((res, rej) => {
      res(num);
    });
  }

  jsFetchNum(200)
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
}

{
  //Optional parameter
  function printName(firstname: string, lastname?: string) {
    console.log(firstname);
    console.log(lastname);
  }
  // printName('강', '윤민')
  // printName('지연')

  //Default parameter
  function printMessage(message: string = 'default message') {
    console.log(message);
  }

  printMessage();
  printMessage('Hello Typescript!');
}

{
  //Rest parameter
  function addNumbers(...numbers: number[]): number {
    //전개 연산자 사용 -  인자를 받아서 number타입의 배열로 받음
    return numbers.reduce((a, b) => a + b);
  }

  console.log(addNumbers(3, 6, 9, 10));
}

{
  function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
  }

  addAndHandle(10, 20, (result) => {
    console.log(result);
    return result; // 가능함
  });
}
