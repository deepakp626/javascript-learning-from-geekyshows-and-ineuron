////////   ****************  Default export class  ***********
//   class Nokia{
//     volumeUp(){
//         console.log("high volume")
//     }
// }
// export default Nokia;


//  function show(){
//     console.log("Hello pilot")
// }
// export default show;

// const a=10
// export default a


////////   ****************  Named export   ***********
// class Nokia {
    //     volumeUp() {
        //         console.log("high volume")
        //     }
        // }
        // function show(){
            //     console.log("Hello deepak")
            // }
            // export let a =10
            // export {Nokia , show}



////// *******   mix all
         class Nokia {
                volumeUp() {
                    console.log("high volume")
                }
            }
            function show(){
                console.log("Hello deepak")
            }
            export let a =10
            export default Nokia
            export {show}