'use strict'

function computeGivensRotation(a,b,cs) {
    if( cs===undefined ) cs = new Array(2)
    var tau,tmp
    if( b === 0 ) {
        cs[0] = 1
        cs[1] = 0
    } else {
        if( Math.abs(b) > Math.abs(a) ) {
            tau = -a/b
            tmp = 1/Math.sqrt(1+tau*tau)
            cs[1] = tmp
            cs[0] = tmp*tau
        } else {
            tau = -b/a
            tmp = 1/Math.sqrt(1+tau*tau)
            cs[0] = tmp
            cs[1] = tmp*tau
        }
    }
    return cs

}


module.exports = computeGivensRotation
