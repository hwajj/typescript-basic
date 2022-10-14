{
  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    employeeId: number;
    work: () => void;
  };

  //Student 이면서 Worker인 매개변수 받도록 함
  function internWork(person: Student & Worker) {
    console.log(person.name, person.employeeId, person.work());
  }

  const Ann = {
    name: 'Ann',
    score: 1,
    employeeId: 1111,
    work: function () {
      console.log(`Working ${this.name}`);
    },
  };
  //Student 와 Worker의 속성 다 넣어줘야함
  internWork(Ann);
}
