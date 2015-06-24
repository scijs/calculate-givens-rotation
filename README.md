# calculate-givens-rotation 

[![Build Status](https://travis-ci.org/scijs/calculate-givens-rotation.svg?branch=1.0.0)](https://travis-ci.org/scijs/calculate-givens-rotation) [![npm version](https://badge.fury.io/js/calculate-givens-rotation.svg)](http://badge.fury.io/js/calculate-givens-rotation)

Compute the components of a Givens rotation matrix in order to zero an element


## Introduction

This module implements Algorithm 5.1.3 of Golub and Van Loan's *Matrix Computations, 4th Edition*.

```
[  c  s  ] T     [ a ]     [ r ]
[        ]    *  [   ]  =  [   ]
[ -s  c  ]       [ b ]     [ 0 ]
```

Note that it also applies to the transposed case,

```
             [  c  s  ]
[ a  b ]  *  [        ]  =  [ r  0 ]
             [ -s  c  ]
```

Sample usage:

```javascript
var givens = require('calculate-givens-rotation')

var cs = givens(1,2)    //  --> cs = [ -0.4472135954999579, 0.8944271909999159 ]

// Alternate form:
var output = []
givens( 1, 2, output )  //  --> output = [ -0.4472135954999579, 0.8944271909999159 ]
```


## Install

```sh
$ npm install calculate-givens-rotation
```


## API

### `require('calculate-givens-rotation')( a, b )`
Given two elements of a vector, compute the rotation matrix that zeros the second element.

* `a`,`b`: the elements of the vector. `b` is the element to be zeroed.

**Returns** a two-element list `[c,s]` containing c and s as defined above.


### `require('calculate-givens-rotation')( a, b, output )`
An alternate form that passes output values through array `output`

* `a`,`b`: as specified previously
* `output`: an array that receives the output values, `output[0] = c` and `output[1] = s`

**Returns** `output`


## Credits

(c) 2015 Ricky Reusser. MIT License
