const { has } = require('..');

let obj = {
  a: {
    b: 42,
    c: {
      d: 'lol'
    }
  }
};

console.log(has(obj, 'a.b.c.d'));
console.log(has(obj, 'a.b.d'));
console.log(has(obj, 'a.c.d'));
console.log(has(obj, 'a.b'));
console.log(has(obj, 'a'));

console.log(has(obj, ['a', 'b', 'c', 'd']));
console.log(has(obj, ['a', 'b', 'd']));
console.log(has(obj, ['a', 'c', 'd']));
console.log(has(obj, ['a', 'b']));
console.log(has(obj, ['a']));
