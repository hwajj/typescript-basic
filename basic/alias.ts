{
  type Student = {
    name: string;
    age: number;
  };

  const Kim: Student = {
    name: 'minji',
    age: 14,
  };

  //console.log(Kim);

  type Boal = true;

  // const isCat: Boal = false; //error
  const isCat: Boal = true;

  //console.log(isCat);
}

{
  type Direction = 'left' | 'right' | 'up' | 'down';
  function move(direction: Direction) {
    console.log(direction);
  }

  //move('down');

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16; // TileSize 이외의 값 ~ 에러

  type SuccessState = {
    response: {
      body: string;
    };
  };

  type FailState = {
    reason: string;
  };

  type LoginState = SuccessState | FailState;
  function login(id: string, password: string): LoginState {
    return {
      response: {
        body: 'logged in',
      },
    };
  }

  //printLoginState(state)
  //state => body
  function printLoginState(state: LoginState) {
    //좋지 못한 코드
    if ('response' in state) console.log(state.response.body);
    else console.log(state.reason);
  }

  printLoginState({ response: { body: 'hello' } });
  printLoginState({ reason: '404' });
}
