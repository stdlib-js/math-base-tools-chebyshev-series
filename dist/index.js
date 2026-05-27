"use strict";var b=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=b(function(p,v){
function c(e,r){var t,n,i,a,u;if(a=r.length,a===0)return 0;if(a===1)return .5*r[0];for(t=r[0],n=0,u=1;u<a;u++)i=n,n=t,t=e*n-i+r[u];return .5*(t-i)}v.exports=c
});var o=b(function(R,f){
var y=require('@stdlib/function-ctor/dist'),l=s();function q(e){var r,t,n;if(e.length>500)return i;if(t=e.length,r="return function chebyshevSeries(x){",r+="var b0;",r+="var b1;",r+="var b2;",t===0)r+="return 0.0;";else if(t===1)r+="return "+.5*e[0]+";";else{for(r+="b0 = "+e[0]+";",r+="b1 = 0.0;",n=1;n<t;n++)r+="b2 = b1;",r+="b1 = b0;",r+="b0 = (x*b1) - b2 + "+e[n]+";";r+="return 0.5 * (b0 - b2);"}return r+="};",r+="//# sourceURL=chebyshevSeries.factory.js",new y(r)();function i(a){return l(a,e)}}f.exports=q
});var x=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),h=s(),S=o();x(h,"factory",S);module.exports=h;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
