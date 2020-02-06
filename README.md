# replaceReviver
 Applies string replacement to each value in a JSON datastructure

# Introduction
Imagine we've got the JSON below. 
```javascript
{
  "a": "kitten",
  "b": [
    "kitten",
    "alpaca"
  ]
}
```

For each string value in this JSON, we'd like to replace kitten by pupppy 
and alpaca by unicorn. The result of these transformations looks like this.
```javascript
{
  "a": "puppy",
  "b": [
    "puppy",
    "unicorn"
  ]
}
```
replaceReviver makes it easy to apply such transformations.

# How to use
replaceReviver.js contains the code, while replaceReviver_test.html contains a demo and test.

## replaceReviver(transformations)
Returns a function that can serve as reviver in JSON.parse. Pattern to replace are written as regular expressions.

## easyRevive(jsonString, transformations)
Applies a set of transformations in which each patterns to replace is used 
as a literal string that is globally matched.

