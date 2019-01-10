const { get } = require('..');

let obj = {
  a: {
    b: 42,
    c: {
      d: 'lol'
    }
  }
};

console.log(get(obj, 'a.b.c.d'));
console.log(get(obj, 'a.b.d'));
console.log(get(obj, 'a.c.d'));
console.log(get(obj, 'a.c'));
console.log(get(obj, 'a.b'));
console.log(get(obj, 'a'));

console.log(get(obj, ['a', 'b', 'c', 'd']));
console.log(get(obj, ['a', 'b', 'd']));
console.log(get(obj, ['a', 'c', 'd']));
console.log(get(obj, ['a', 'c']));
console.log(get(obj, ['a', 'b']));
console.log(get(obj, ['a']));
