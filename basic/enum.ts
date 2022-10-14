{
  // javascript
  //   const MON = 0;
  //   const TUE = 1;
  //   const WED = 2;
  const DAYS_ENUM = Object.freeze({ MON: 0, TUE: 1, WED: 2 });
  //console.log(DAYS_ENUM.MON);

  enum Days {
    MON = 2, //0   값안넣으면 자동으로 0..
    TUE,
    WED,
    THU,
    FRI,
    SAT,
    SUN,
  }
  console.log(Days.FRI);
  let friday: Days = Days.FRI;
  friday = 22; //이렇게 바꿔버릴수있음
  console.log(friday);

  //enum 보다
  //enum 대신 union type
  type DaysOfWeek = 'MON' | 'TUE' | 'WED' | 'THU' | 'FRI' | 'SAT' | 'SUN';
  let 쉬는날: DaysOfWeek = 'MON';
  //  쉬는날 = '솨요일' //이상한걸 넣을 수 없음

  쉬는날 = 'WED'; // union 타입중에 하나만 사용할 수 있다.
}
