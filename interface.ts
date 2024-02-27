// 인터페이스는 객체를 위한 타입을 지정할 때 사용하고, 특이하게 확장이 가능하다.
interface User {
    name: string;
    id: number
}

interface User {
    age: number
}

const user: User = {
    name: 'player',
    id: 1,
    age: 100
}

type User2 = {
    name: string;
    id: number
}

// 식별자 중복으로 에러
// type User2 = {
//     age: number
// }

// type도 확장은 가능하지만 인터페이스처럼 중복은 불가능하다.
type User3 = User & {
    age: number
}

type Subject = 'math' | 'science' | 'music'

// type은 아래와 같은 문법을 이용해 객체를 정의할 수 있다.
type Grades = {
    [subject in Subject]: number
}

const grades: Grades = {
    math: 100,
    science: 90,
    music: 80
}