/**
 * @license serial
 * (c) 2019 tom
 * License: MIT
*/
function range(n,s){let r = []; for(let i = 0; i < n; i++){r.push(i+(s?s:0));} return r;}
function c_chars(a){
  return function(n,s){
    return range(n,s).map(function(i){return String.fromCharCode(a.charCodeAt(0)+(i % 26));});
  };
}

export default {number:range, char:{lower:c_chars("a"), upper:c_chars("A")}};
