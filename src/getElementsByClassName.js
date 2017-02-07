// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node) {
  // create storage results 
  var results = [];
  node = node || document.body; 

  // develop base case conditional flag - parent
  if (node.classList) { //checks if ClassList exists
    if (node.classList.contains(className)) { //if classList has className
      results.push(node); // if matched, push to storage results
    }
  }

  // recursively call on children
  for (var i = 0; i < node.children.length; i++) {
    var childList = getElementsByClassName(className, node.children[i]);
    results = results.concat(childList);
  }

// return results 
  return results;

};
