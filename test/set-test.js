const { set } = require('..');

function log(thing) {
  console.log(JSON.stringify(thing, null, 2));
}

const obj1 = 42;
const obj2 = null;
const obj3 = undefined;
const obj4 = {};
const obj5 = {a: 42};
const obj6 = {a: {b: 42}};
const obj7 = {a: 42, b: {c: 'hello'}};

log(set(obj1, 'a.b.c.d.e', 1234));
log(set(obj2, 'a.b.c.d.e', 1234));
log(set(obj3, 'a.b.c.d.e', 1234));
log(set(obj4, 'a.b.c.d.e', 1234));
log(set(obj5, 'a.b.c.d.e', 1234));
log(set(obj6, 'a.b.c.d.e', 1234));
log(set(obj7, 'a.b.c.d.e', 1234));
log('---');
log(obj1);
log(obj2);
log(obj3);
log(obj4);
log(obj5);
log(obj6);
log(obj7);
