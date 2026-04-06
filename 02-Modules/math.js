function add(a,b){
  return a+b;
}
function sub(a,b){
  return a-b;
}

// if we want to use the above functions in other files we need to export those module

// // way 1 for using this way make sure that in package.json "type":"commonjs"
// module.exports = {
//   addFn: add,
//   subFn: sub,

//   // in this we can write a arrow function like
//   // add: (a,b)=>a+b;
// }

//way 2 package.json  "type":"module"
export default function greet(){
  console.log("hello");
}

//way 3
export const mul = (a,b)=>a*b;
export const div = (a,b)=>a/b;

