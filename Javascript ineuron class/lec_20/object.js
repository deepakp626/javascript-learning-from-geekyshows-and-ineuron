// const course ={
//     lecture : 10,
//     session : 3,
//     tital : 'JS',
//     notes :{
//         introduction : "you are here"
//     },
//     ecroll(){
//         console.log("sussfully enroll")
//     },
// }
// console.log(course)
// console.log(typeof course.notes)
// console.log(course.ecroll())


///// fuctry function 
// function createCourse(){
//     return {
//         lecture : 10,
//         session : 3,
//         tital : 'JS',
//         notes :{
//             introduction : "you are here"
//         },
//         ecroll(){
//             console.log("sussfully enroll")
//         },
//     }

// }
// const course  = createCourse()
// console.log(course.ecroll())



// function createCourse(tital){
//     return {
     
//         tital : tital,
//         notes :{
//             introduction : "you are here"
//         },
       
//     }

// }
// const course  = createCourse("js")
// console.log(course)




///// constructor function
// function Course(tital){
//     this.tital = tital,
//     this.enroll = function(){
//         console.log("you are enroll")
//     }
// }
// const course = new Course("js")
// console.log(course)
// course.enroll()




// function Course(tital){
//     this.tital = tital,
//     this.enroll = function(){
//         console.log("you are enroll")
//     }
// }
// const course = new Course("js")
// delete course.enroll
// course.checkEnrolled = function(){
//     console.log('30 enrolled')
// }
// console.log(course)






// function Course(tital){
//         this.tital = tital,
//         this.enroll = function(){
//             console.log("you are enroll")
//         }
//     }
// const course = new Course('js')
// console.log(course.constructor)




// // ///primitive datatype
// let number = 10
// // ///pass by value
// let number_2 = number
// number = 15
// console.log(number)
// console.log(number_2)




// /// ///reference datatype 
// let obj = {number:10}
// ///// pass by reference 
// let obj_2 = obj
// obj.number = 2
// console.log(obj)
// console.log(obj_2)



//// 
// const course ={
//     tital : 'javascript',
//     enroll(){
//         console.log("sicesfully enroll")
//     }
// }
// const course_2 = {...course}
// course.tital= 'c++'

// console.log(course)
// console.log(course_2)



// const course ={
//     tital : 'javascript',
//     enroll(){
//         console.log("sicesfully enroll")
//     }
// }
// const copyObject = Object.assign({},course)
// copyObject.tital = 'c++'
// console.log(course)
// console.log(copyObject)
