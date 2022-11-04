#   Array.asyncMap 
Array.map with sequential processing async/await

##  Installation:
Install the dependency
```js
npm i array-async-map --save
```

### Usage:
You need only import package and use `Array` like `.map`
```js
import 'array-async-map';

const results = await [1,2,3].asyncMap(async (item, index)=> {
    console.log("sleep 1s")
    await sleep(1000);  // or fetch/timer/any
    console.log(item)
    return `#${item}`;
});
console.log(results);

//  Results
//
//  sleep 1s
//  1
//
//  sleep 1s
//  2
//
//  sleep 1s
//  3
//
//  ["#1","#2","#3"]
```