'use strict'

var assert = require('chai').assert,
    almostEqual = require('almost-equal'),
    epsilon = almostEqual.DBL_EPSILON,
    givens = require('../lib')

describe( "compute-givens-rotation", function() {

  it("when provided an output array",function() {
    var out = [undefined, undefined]
    var cs = givens(1,1,out)
    assert( out[0] !== undefined )
    assert( out[1] !== undefined )
  })

  it("when not provided an output array",function() {
    var cs = givens(1,1)
    assert( cs[0] !== undefined )
    assert( cs[1] !== undefined )
  })

  it("when b === 0",function() {
    var cs = givens(5,0)
    assert( almostEqual(cs[0],1) )
    assert( almostEqual(cs[1],0) )
  })

  it("when |a| < |b|",function() {
    var cs = givens(1,2)
    assert( almostEqual(cs[0], -0.4472135954999579, epsilon, epsilon) )
    assert( almostEqual(cs[1],  0.8944271909999159, epsilon, epsilon) )
  })

  it("when |b| < |a|",function() {
    var cs = givens(2,1)
    assert( almostEqual(cs[0],  0.8944271909999159, epsilon, epsilon) )
    assert( almostEqual(cs[1], -0.4472135954999579, epsilon, epsilon) )
  })

})
