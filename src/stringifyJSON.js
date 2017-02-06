// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here

  // array case
  if (Array.isArray(obj)) {
    if (obj.length === 0) {
      return '[]';
    } else {
      var results = [];
      for (var i = 0; i < obj.length; i++) {
        results.push(stringifyJSON(obj[i]));
      }
      return '[' + results.join(',') + ']';
    }
  }
  
//object case
  if ( obj && typeof obj === 'object') {
    var results = [];
    for (var key in obj) {
      if (obj[key] === undefined || obj[key] === function () {}) { 
        return '{}';
      } else {
        results.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
      }
    }
    return '{' + results.join(',') + '}';
  }

  // string base case
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }

  return '' + obj;

};
