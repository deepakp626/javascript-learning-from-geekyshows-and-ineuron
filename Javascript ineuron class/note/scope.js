// var name = "deepak";

// function sayName() {
//     var marks = 10;
//     console.log(name);
// }
// sayName()
// console.log(marks)



//// laxical scope
function Dada() {
    var name = 'amlask humar';

    function papa() {
        console.log(name)

        // console.log(liks)

        function child() {
            var liks = "food"
        }
        child()
    }
    papa()
}
Dada()