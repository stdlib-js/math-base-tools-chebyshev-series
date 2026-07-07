"use strict";var b=function(t,r){return function(){try{return r||t((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var s=b(function(p,v){
function c(t,r){var e,n,i,a,u;if(a=r.length,a===0)return 0;if(a===1)return .5*r[0];for(e=r[0],n=0,u=1;u<a;u++)i=n,n=e,e=t*n-i+r[u];return .5*(e-i)}v.exports=c
});var o=b(function(R,f){
var y=require('@stdlib/function-ctor/dist'),l=s();function q(t){var r,e,n;if(t.length>500)return i;if(e=t.length,r="return function chebyshevSeries(x){",r+="var b0;",r+="var b1;",r+="var b2;",e===0)r+="return 0.0;";else if(e===1)r+="return "+.5*t[0]+";";else{for(r+="b0 = "+t[0]+";",r+="b1 = 0.0;",n=1;n<e;n++)r+="b2 = b1;",r+="b1 = b0;",r+="b0 = (x*b1) - b2 + "+t[n]+";";r+="return 0.5 * (b0 - b2);"}return r+="};",r+="//# sourceURL=chebyshevSeries.factory.js",new y(r)();function i(a){return l(a,t)}}f.exports=q
});var x=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),h=s(),S=o();x(h,"factory",S);module.exports=h;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
