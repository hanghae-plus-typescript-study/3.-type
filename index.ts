// 타입스크립트는 컴파일 단계에서 에러를 발생시켜줌.
// const s : string = 3 // Error: Type '3' is not assignable to type 'string'.


const b : boolean = true
// 1. string
const str: string = 'string'
// 2. number
const num: number = 1

const err1 = str + num // Error: Operator '+' cannot be applied to types 'string' and 'number'.


// 3. array
const strArray: string[] = ['a', 'b', 'c']

const numArray: number[] = [1, 2, 3]

const anyArray: any[] = [1, 'a', true]

// 4. tuple
const tuple: [string, number] = ['a', 1]

// 5. enum
enum Color { Red, Green, Blue }

const red: Color = Color.Red

// 6. object , readonly
class Monster {
    readonly name: string = 'monster'
    public hp: number

    constructor(hp: number) {
      this.hp = hp
  }
}

const monster: Monster = new Monster(100)
console.log(monster)


const anyThing: any = 'hello'

// anyThing.hello()

const strThing: string = anyThing

const unknownThing: unknown = [33,2]

// 아직 타입이 정해지지 않은 unknown 타입은 다른 타입으로 할당할 수 없음.
// const strThing2: string = unknownThing

const strThing3: string = unknownThing as string

console.log(strThing3)
strThing3.split(' ')


