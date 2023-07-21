// let lang = new Set()
// console.log(lang)


// let lang = ['html','css','js','react']
// console.log(lang)
// let newlang = new Set(lang)
// console.log(newlang)


// let lang = new Set()
// console.log(lang)
// lang.add('html')
// lang.add('css')
// console.log(lang)
// console.log(lang.size)



// let yes = new Map();
// console.log(yes)
// console.log(typeof yes)



// let yes = new Map();
// console.log(yes)
// yes.set("1","vijay")
// yes.set(1,"veera")
// yes.set(true,"OK")
// yes.set({name:"deepak"},"OK")
// console.log(yes)
// console.log(yes.size)


/////////////////////// scope chaning
// function outer() {
//         const names = "ineuron"
//         function inner() {
//             let sername = 'prajapat'
//             console.log(names)
//         }
//         inner()
// }
// outer()






// function outer() {
//     const names = "ineuron"
//     function inner() {
//         console.log(names)
//     }
//     return inner
// }
// let kywd = outer()
// console.log(kywd)
// console.log(kywd())
// kywd()





// console.log("start")
// setTimeout(()=>{
//     console.log("call back")
// },5000)
// console.log("end")




// const userOne = ()=>{
//     console.log("user one")
// }

// const userTwo = ()=>{
//     setTimeout(() => {
//         console.log("user two")
//     }, 3000);
// }

// const userThree = ()=>{
//     console.log('user Three')
// }
// userOne()
// userTwo()
// userThree()



// const userOne  = ()=>{
//     console.log("user one")
// }
//   const userTwo = async () => {
//     setTimeout(() => {
//       await  console.log("user two")
//     }, 3000);
// }
// const userThree = ()=>{
//     console.log("user three")
// }
// userOne()
// userTwo()
// userThree()




////////////////  promise
// let makePromise = new Promise( (resolve, reject) => {
//     const lang = ['html','css','js','react js','bootstrap','material UI','tailwind']

//     setTimeout(() => {
//         if (lang.length >= 7) {
//             resolve("completed")
//         }
//         else{
//             reject("not completed")
//         }
//     })
// })
// makePromise.then((result)=>{
//     console.log(result)
// }).catch((result)=>{
//     console.log(result)
// })




// const userOne = ()=> {
//     console.log("userOne")
// }

// const userTwo =  ()=> {
//    return new Promise( (resolve, reject) => {
//     setTimeout(() => {
//         resolve("login  completed")
//     })
//    })
// }

// const userThree = ()=>{
//     console.log("user three")
// }

// const callme  = ()=>{
//     let valOne = userOne()
//     console.log(valOne)

//     let valTwo =  userTwo()
//     console.log(valTwo)

//     let valThree = userThree()
//     console.log(valThree)
// }
// callme()






////////////////////  syncronos
// function myFun(){
//     console.log("Inside Function")
// }
// console.log("start")
// myFun()
// console.log("end")




////////////////////  Asyncronos
// console.log("start")
// setTimeout(()=>{
//     console.log("Indide function")
// },2000)

// console.log("end")




////////////////////// promis
// const promisObj = new Promise((resolve, reject) =>{
//     resolve(value)
//     // reject(Error)
// })
// promisObj.then((value) =>{
//     console.log("value")
// },(error) =>{
//     console.log("error")
// })
















