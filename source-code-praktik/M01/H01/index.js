
function triangleLooping() {
    console.log(' ======= triangleLooping ======= '+ "\n")
    var k = '#';
    var output = '';
    for (var i = 1; i <= 7; i++) {
        for (var j = 1; j <= i; j++) {
            output += k;
        }
        console.log(output);
        output = '';
    }
}
function fizzbuzz() {
    console.log(' ======= fizzbuzz ======= ' + "\n")
    for (var i = 1; i <= 100; i++) {
        if (i % 3 == 0) {
            console.log("fizz");
        } else if (i % 5 == 0) {
            console.log("buzz");
        } else {
            console.log(i);
        }
    }
}

function chessboard() {
    console.log(' ======= chessboard ======= ' + "\n")
    var output = '';
    for (var i = 1; i <= 8; i++) {
        for (var j = 1; j <= 8; j++) {
            if (i % 2 == 0) {
                if (j % 2 == 0) {
                    output += ' P ';
                } else {
                    output += ' H ';
                }
            } else {
                if (j % 2 == 0) {
                    output += ' H ';
                } else {
                    output += ' P ';
                }
            }
        }
        console.log(output);
        output = '';
    }
}


function run(){
    
    triangleLooping();
    fizzbuzz();
    chessboard();


}

module.exports = {
    run
}