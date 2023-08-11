const { log } = require("console")

function from(str){
  const newArr = []
  for(let i = 0; i < str.length; i++){
    newArr.push(str[i])
  }
  return newArr
  //return str.split('')
}
//console.log(from('Array'))
function of(){
  const newArr = []
  for(let i = 0; i < arguments.length; i++){
    newArr.push(arguments[i])
  }
  return newArr    
}
//console.log(of('ghk', [], {}, 1))
function concat(){
  const newArr = []
  
  for(let i = 0; i < arguments.length; i++){
    if(!Array.isArray(arguments[i])){
        return 'We have a parametr that is not array'
    }
    newArr.push(...arguments[i])
  }
     return newArr
  
}
// console.log(concat([1], ['sd']))
function at(arr, index){
  if(index >= 0){
      return arr[index]
  }else{
    return arr[arr.length + index]
  }
}
//console.log(at([1, 2, 3, 4], -5))
function copyWithin(arr, target, start = 0, end = arr.length){
  for(let i = start; i < end; i++){
    arr[target] = arr[i]
    target++
  }
  return arr
}

//console.log(copyWithin([1,2,3,4,5], 1, 2, 4))
function every(arr, cb) {
  if(!Array.isArray(arr) || !typeof(cb) === 'function'){
    console.log('something wrong')
    return
  }
  for(let i = 0; i < arr.length; i++){
    if(!cb(arr[i], i)){
      return false
    }
  }
  return true
}
//console.log(every([2, 4, 6, 8, 16], (a) => a % 2 === 0))

function fill(arr, item, start = 0, end = arr.length){
  if(start < 0 || end < 0 || typeof(start) !== 'number' || typeof(end) !== 'number'){
      console.log('something wrong')
    return
  }
  for(; start < end; start++){
    arr[start] = item
  }
  return arr
}
//console.log(fill([1, 2, 3, 4] , -1, -1, 3))
function filter(arr, cb){
  const newArr = []
  if(!Array.isArray(arr) || !typeof(cb) === 'function'){
        console.log('something wrong')
        return
      }
  for(let i = 0; i < arr.length; i++){
      if(cb(arr[i], i)){
        newArr.push(arr[i])
      }
  }
  return newArr
}
//console.log(filter([1, 2, 3, 4], (item) => item % 2 === 0))
function find(arr, cb){
  if(!Array.isArray(arr) || !typeof(cb) === 'function'){
        console.log('something wrong')
        return
      }
  for(let i = 0; i < arr.length; i++){
      if(cb(arr[i], i)){
        return arr[i]
      }
  }
  
}
//console.log(find([1, 2, 3, 4], (item) => item % 2 === 0))
function findIndex(arr, cb){
  if(!Array.isArray(arr) || !typeof(cb) === 'function'){
        console.log('something wrong')
        return
    }
  for(let i = 0; i < arr.length; i++){
      if(cb(arr[i], i)){
        return i
      }
  }
  return -1
  
}
// console.log(findIndex([1, 2, 3, 4], (item) => item % 2 === 0))

function indexOf(arr, param, s = 0){
  if(!Array.isArray(arr) || typeof(s) !== 'number' ){
        console.log('something wrong')
        return
  }
  s = Math.abs(s)
  for(; s < arr.length; s++){
    if(arr[s] === param){
      return s
    }
  }
  return -1
}
// console.log(indexOf([1,2,3], 3, -2))
function lastIndexOf(arr, param, s = arr.length){
  if(!Array.isArray(arr) || typeof(s) !== 'number' ){
        console.log('something wrong')
        return
  }
  s = Math.abs(s)
  for(; s => 0; s--){
    if(arr[s] === param){
      return s
    }
  }
  return -1
}
//console.log(lastIndexOf([1,0,1,1], 1, 3))
function forEach(arr, fn){
  for(let i = 0; i < arr.length; i++){
    fn(arr[i] , i)
  }
}
//forEach([1,2], (item, index) => console.log(item + index))
  
function includes(arr, item){
  for(let i = 0; i< arr.length; i++){
    if(arr[i] === item)
      return true 
  }
  return false
}
//console.log(includes([1,2,3], 1))
function map (arr, fn){
    if(!Array.isArray(arr) || !typeof(cb) === 'function'){
        console.log('something wrong')
        return
    }
  for(let i = 0; i < arr.length; i++){
    arr[i] = fn(arr[i], i)
  }
  return arr
}
//console.log(map([1, 2, 3], (item, index) => item + index))
 function reduce(arr, fn, initialValue){
   let acc = initialValue === undefined ? arr[0] : initialValue
   let i = initialValue === undefined ? 1 : 0
   for(; i < arr.length; i++){
     acc = fn(acc, arr[i], i, arr)
   }
   return acc
 }
// console.log(reduce([1, 2, 3], (acc, item, index) => acc  + item ** index), 0)
 function reduceRight(arr, fn, initialValue){
   let acc = initialValue === undefined ? arr[arr.length - 1] : initialValue
   let i = initialValue === undefined ? arr.length - 2 : arr.length - 1
   for(; i > 0; i--){
     acc = fn(acc, arr[i], i, arr)
   }
   return acc
 }
 //console.log(reduce([1, 2, 3], (acc, item, index) => acc  + item ** index, 0))
function reverse(arr) {
  let newArr = []
  for(let i = arr.length - 1; i >= 0; i--){
    newArr.push(arr[i])
  }
  return newArr
}
//console.log(reverse([1, 2, 3]))
function slice(arr, a = 0, b = arr.length){
  let newArr = []
  if(!Array.isArray(arr) || a < 0 || b < 0){
        console.log('something wrong')
        return
    }
  for(; a < b; a++){
    newArr.push(arr[a])
  }
  return newArr
}
//console.log(slice([1,2,3,4,5,6]))
function some(arr, cb){
  for(let i = 0; i < arr.length; i++){
    if(cb(arr[i], i)){
      return true
    }
  }
  return false
}
//console.log(some([1, 3], (item) => item % 2 === 0))
// funkcian petqa hamemati andamnery enqan minchev achman kam nvazman hamar chlini xochyndot
//ete arajin parametric hanac e ekrordy 
//1 stugel arajin andamy mec e ekrordic te che 
//1ini y mec linelu depqum ekrordi poxaren dnel arajiny 
//3arajini texy dnel ekrordy
//havasar kam arajini mec linelu depqum  krknel gorcoxutyuny hajor andami hamar aynqan minchev havasarutyuny xaxdox chlini
//
function sort(arr, cb){
  let isRigth = true
  let how = cb(1, 0) > 0 ? 'incremet' : 'decrement'
     for(let k = 0; k < arr.length; k++){
       for(let i = 0; i < arr.length - 1; i++){
          if(how === 'incremet' ){
              if(  arr[i] > arr[i + 1]){
               isRigth = false
               let curItem = arr[i]
               arr[i] = arr[i + 1]
               arr[i + 1] = curItem
             }else{
               continue
             }
          }else{
              if(arr[i] < arr[i + 1]){
               isRigth = false
               let curItem = arr[i]
               arr[i] = arr[i + 1]
               arr[i + 1] = curItem
              }else{
               continue
             }
          }
      }
     if(isRigth){
       return arr
     }
   }
  return arr
}
// console.log(sort([1,2,3], (a, b) => a - b ))
function flat(arr, count){
  let newArr = []
  let isRigth = true
  if(count === 0){
    return arr 
  }
  for(let i = 0; i < arr.length; i++){
    if(Array.isArray(arr[i])){
      newArr.push(...arr[i])
      isRigth = false
    }else{
      newArr.push(arr[i])
    }
  }
  if(isRigth) {return newArr} 
  count -= 1
  return flat(newArr, count)
}
//console.log(flat([1, [2, 3], [4, [5, [6, []]]]], 3))