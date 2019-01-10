function type(thing) {
  const typeOf = typeof thing;
  if (thing === null)
    return 'null';
  if (typeOf === 'string' || thing instanceof String)
    return 'string';
  if (typeOf === 'number' || thing instanceof Number)
    return 'number';
  if (typeOf === 'undefined')
    return 'undefined';
  if (typeOf === 'function')
    return 'function';
  if (Array.isArray(thing))
    return 'array';
  return 'object';
}

function objectLike(thing) {
  const thingType = type(thing);
  if (thingType === 'object' || thingType === 'function')
    return true;
  return false;
}

function has(obj, path) {
  if (!obj) return false;

  const pathType = type(path);
  if (pathType === 'string') {
    path = path.split('.');
  }
  else if (pathType !== 'array') {
    path = [String(path)];
  }

  let curObj = obj;
  for (let p of path) {
    if (curObj != null && Object.prototype.hasOwnProperty.call(curObj, p))
      curObj = curObj[p];
    else
      return false;
  }

  return true;
}

function get(obj, path) {
  if (!obj) return false;

  const pathType = type(path);
  if (pathType === 'string') {
    path = path.split('.');
  }
  else if (pathType !== 'array') {
    path = [String(path)];
  }

  let curObj = obj;
  for (let p of path) {
    if (curObj != null && Object.prototype.hasOwnProperty.call(curObj, p))
      curObj = curObj[p];
    else
      return undefined;
  }

  return curObj;
}

function set(obj, path, value) {
  const pathType = type(path);

  if (pathType === 'string') {
    path = path.split('.');
  }
  else if (pathType !== 'array') {
    path = [String(path)];
  }

  if (objectLike(obj)) {
    let curObj = obj;
    for (let i = 0; i < path.length - 1; i++) {
      if (objectLike(curObj[path[i]])) {
        curObj = curObj[path[i]];
      }
      else {
        curObj = curObj[path[i]] = {};
      }
    }

    curObj[path[path.length-1]] = value;
  }

  return obj;
}

module.exports = {
  type,
  objectLike,
  has,
  get,
  set,
};
