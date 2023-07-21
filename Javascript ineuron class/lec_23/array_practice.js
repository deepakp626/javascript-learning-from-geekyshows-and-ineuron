let characters = [
    {
        name : 'Tarak Mehta',
        height : '172',
        mass : '77',
        eye_color : 'brown',
        gender : 'male'
    },
    {
        name : 'jethalal',
        height : '145',
        mass : '136',
        eye_color : 'black',
        gender : 'male'
    },
    {
        name : 'Babitha ji',
        height : '150',
        mass : '49',
        eye_color : 'grey',
        gender : 'female'
    },
    {
        name : 'Krishnan Iyar',
        height : '168',
        mass : '84',
        eye_color : 'black',
        gender : 'male'
    },
]


// /////  1
// const name = characters.map((obj)=>  return obj.name )
// console.log(name)


///  2
// let arrayObj = []
// arrayObj=  characters.map((obj)=>{
//      return {
//         name : obj.name,
//         height : obj.height
//      }
// })
// console.log(arrayObj)


//////  3
// let total_height =  characters.reduce((sum,current)=>{
     
//          return  sum + Number(current.height)
// },0)
// console.log(total_height)




//// 4
// let arraymass = characters.filter((obj)=>{
//      return Number(obj.mass) > 100
// })
// console.log(arraymass)


////// 5
// let mallch= characters.filter((obj)=>{
//     return obj.gender === 'male'
// })
// console.log(mallch)