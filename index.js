// 타입스크립트는 컴파일 단계에서 에러를 발생시켜줌.
// const s : string = 3 // Error: Type '3' is not assignable to type 'string'.
var b = true;
// 1. string
var str = 'string';
// 2. number
var num = 1;
var err1 = str + num; // Error: Operator '+' cannot be applied to types 'string' and 'number'.
// 3. array
var strArray = ['a', 'b', 'c'];
var numArray = [1, 2, 3];
var anyArray = [1, 'a', true];
// 4. tuple
var tuple = ['a', 1];
// 5. enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var red = Color.Red;
// 6. object , readonly
var Monster = /** @class */ (function () {
    function Monster(hp) {
        this.name = 'monster';
        this.hp = hp;
    }
    return Monster;
}());
var monster = new Monster(100);
console.log(monster);
var anyThing = 'hello';
// anyThing.hello()
var strThing = anyThing;
var unknownThing = [33, 2];
// 아직 타입이 정해지지 않은 unknown 타입은 다른 타입으로 할당할 수 없음.
// const strThing2: string = unknownThing
var strThing3 = unknownThing;
console.log(strThing3);
strThing3.split(' ');
