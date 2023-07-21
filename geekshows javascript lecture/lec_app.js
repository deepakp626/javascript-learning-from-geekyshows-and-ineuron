////default import class
// import Nokia from './mobile.js'
// const n = new Nokia()
// n.volumeUp()

// import show from "./mobile.js";
// show()

// import a from "./mobile.js";
// console.log(a)



////////   ****************  import named  ***********
// import {Nokia , show,a} from "./mobile.js";
// const n = new Nokia();
// n.volumeUp()
// show()
// console.log(a)



////////   ****************  import all  ***********
// import * as devices from "./mobile.js";
// let n = new  devices.Nokia()
// n.volumeUp()
// devices.show()
// console.log(devices.a)




////// *******   mix all
import Nokia, {show ,a} from "./mobile.js";
let n = new Nokia();
n.volumeUp()
show()
console.log(a)
