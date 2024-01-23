// myEach
function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i]);
      }
    } else if (typeof collection === 'object') {
      for (let key in collection) {
        callback(collection[key]);
      }
    }
    return collection;
  }
  
  // myMap
  function myMap(collection, callback) {
    const result = [];
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        result.push(callback(collection[i]));
      }
    } else if (typeof collection === 'object') {
      for (let key in collection) {
        result.push(callback(collection[key], key));
      }
    }
    return result;
  }
  
  // myReduce
 // myReduce
function myReduce(collection, callback, acc) {
    let startIdx = acc !== undefined ? 0 : 1;
    let result = acc !== undefined ? acc : collection[Object.keys(collection)[0]];
  
    for (let i = startIdx; i < Object.keys(collection).length; i++) {
      const key = Object.keys(collection)[i];
      result = callback(result, collection[key], collection);
    }
  
    return result;
  }
  
  // myFind
  function myFind(collection, predicate) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i])) {
        return collection[i];
      }
    }
  }
  
  // myFilter
  function myFilter(collection, predicate) {
    const result = [];
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i])) {
        result.push(collection[i]);
      }
    }
    return result;
  }
  
  // mySize
  function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else if (typeof collection === 'object') {
      return Object.keys(collection).length;
    }
  }
  
  // myFirst
  function myFirst(array, n) {
    if (n === undefined) {
      return array[0];
    } else {
      return array.slice(0, n);
    }
  }
  // myKeys
function myKeys(obj) {
    return Object.keys(obj);
  }
// myValues
function myValues(obj) {
    return Object.values(obj);
  }
    
  
  // myLast
  function myLast(array, n) {
    if (n === undefined) {
      return array[array.length - 1];
    } else {
      return array.slice(-n);
    }
  }
  
  // Bonus: mySortBy
  function mySortBy(array, callback) {
    return array.slice().sort((a, b) => callback(a) - callback(b));
  }
  