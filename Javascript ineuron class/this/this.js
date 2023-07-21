// let counter = createCounter()
// let counter1 = createCounter()
// function createCounter(){
//     return {
//         count : 0,
//         increment : function(){
//              counter.count++
//         }
//     }
// }
// counter.increment()
// counter.increment()
// counter.increment()
// counter.increment()
// console.log(counter)



// let counter = createCounter()
// let counter1 = createCounter()

// function createCounter(){
//     return {
//         count : 0,
//         increment : function(){
//              counter.count++
//         }
//     }
// }
// counter1.increment()
// counter1.increment()
// counter1.increment()
// counter1.increment()
// console.log(counter1)




// //// this in function
// var count =0;
// function incrementCounter(){
//     this.count++;
//     // console.log(this)
// }
// incrementCounter()
// incrementCounter()
// console.log(count)



// console.log(this)




////this in constructor
// function Car(name){
//     this.name = name;
//     this.start =  function(){
//         console.log(this.name+' started')
//         console.log(this)
//     }
// }
// let swift = new  Car('swift');
// swift.start()
// console.log(swift.name)
// console.log(swift)




function Car(name){
    this.name = name;
    this.start =  function(){
        console.log(this.name+' started')
        console.log(this)
    }
}
let swift = Car('swift');
console.log(swift)
console.log(name)