## function

- name?string // Optional parameter
- name:string = 'Jane Doe' // Default parameter

## 유니온 타입

- 유니온 타입 사용할 때 공통적인 프로퍼티 갖게함으로써
  각 타입을 구분하기 쉽게 만든다.

## 인터섹션 타입

## 인터페이스

```
let user: object;

user = {

    name : 'xx',
    age : 30
}

console.log(user.name);
```

이렇게 하면 user에 name을 찾을수 없다고 한다.
프로퍼티 정의해서 오브젝트 사용할 때 interface 사용하여 프로퍼티의 타입을 정해준다.

---

## lib

- sourMap : js.map 파일 생성~ 브라우저 Source탭에서 ts파일에 중단점 가능
- outDir : 컴파일한 src의 폴더구조가 복사되는 위치
- rootDir :컴파일될 루트폴더
- removeComments : 코멘트 모두 삭제
- noEmit :자바스크립트파일 생성 안할때 true
- downlevelIteration : 버전다운시 for 루프 안 되는 경우에 사용
- noEmitOnError :에러있으면 js파일생성 안함

- strict
  - strictNullChecks : null
  - strictBindCallApply : bind, call, apply 사용시 인수 제대로 전달하게함
