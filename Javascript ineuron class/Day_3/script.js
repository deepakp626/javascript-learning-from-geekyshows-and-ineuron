// let mobile = ["mob1","mob2","mob3"]
// let phone = []
// for (let i = 0; i < mobile.length; i++) {
//     phone.push(mobile[i].toUpperCase())
// }
// console.log(phone)



// function sumOfAll() {
//     console.log(arguments)
//     let sum = 0
//     console.log(sum)
//     for (let i = 0; i <= arguments.length-1; i++) {
//         sum = sum + arguments[i]
//         // console.log(sum)
//     }
//     return sum;
// }
// console.log(sumOfAll(10, 20, 30))


// (function(){
//     let x= "deepak"
//     console.log(x)
// })()


// (function(a,b){
//        console.log(a+b)
// })(2,3)


// let add = function(num1,num2)
//             {
//                 return num1 + num2;
//             }
// let sum =add
// let result = add(3,3)
// console.log(result)
// console.log(add)
// console.log(sum)



// let disp = function(){
//     console.log("deepak")
// }
// disp()


// function disp(a){
//     return function(b){
//         return a+b;
//     }
// }
// let DP = disp(10)
// console.log(DP(20))
// console.log(DP)
// console.log(disp)


let userDetailCourse ={
    firstName :"Deepak",
    lastName : "prajapat",
    role : "student",
    loginCount: 35,
    courseList :[],
    byCourse : function(courseName){
        this.courseList.push(courseName)
    },
    getCourseCount : function(){
        return `${this.firstName} Count is ${this.courseList.length}`
    },
}
userDetailCourse.byCourse("DSA")
userDetailCourse.getCourseCount()
console.log(userDetailCourse)
console.log(userDetailCourse.getCourseCount())
console.log(userDetailCourse.courseList)