// Returns a function that applies transformations on it's value argument
// and returns the result
// If the value is a string...
// For each transformation in transformations...
// Replace pattern (transformation[0]) by replacement (transformation[1])
replaceReviver = function (transformations) {
  return (function (key, value) {
    if (typeof value === 'string' || value instanceof String) {
      for (var i = 0; i < transformations.length; i++) {
        value = value.replace(
          transformations[i][0], 
          transformations[i][1]
        );
      }
    }
    return value;  
  });
};

// Escape characters that have a special meaning in regular expressions
// https://stackoverflow.com/questions/3115150/how-to-escape-regular-expression-special-characters-using-javascript#9310752
escapeRegExp = function (text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
};

// Wrapper for replaceReviver in which each replacement is treated like a string 
// that should be literally and globally be matched in String.replace
easyRevive = function (jsonString, transformations) {
  // Turn each from into a regex
  for (var i = 0; i < transformations.length; i++) {
    transformations[i][0] = new RegExp(escapeRegExp(transformations[i][0]), "g");
  }
  return (JSON.parse(
    jsonString,
    replaceReviver(transformations)
  ));  
};