

function run() {

    var initObject = {
        nama: "Achmadi",
        tempat_lahir: "Surabaya",

    }
    console.log('==== start simple run ====' + "\n")
    console.log('initObject')
    console.log(initObject)
    console.log('Object.keys(initObject)')
    console.log(Object.keys(initObject))
    console.log('Object.values(initObject)')
    console.log(Object.values(initObject))
    console.log('Object.entries(initObject)')
    console.log(Object.entries(initObject), "\n")
    /* not available in node Object.fromEntries, but running well on chrome*/
    // console.log(Object.fromEntries([["nama", "Achmadi"], ["tempat_lahir", "Surabaya"]]))

    console.log("\n" + 'demo iteratble ')
    let range = {
        start: 1,
        to: 10
    };
    /* add iterable  */
    range[Symbol.iterator] = function () {
        return {
            current: this.start,
            last: this.to,
            next() {
                if (this.current <= this.last) {
                    return { done: false, value: "element " + this.current++ }
                } else {
                    return { done: true }
                }
            }
        }
    }

    console.log(range)
    // console.log(range.[0].value)

    for (const iterator of range) {
        console.log('iterable "' + iterator + '"')
    }
    console.log("demo string is iterable ")
    for (const iterator_string of "AbCdE") {
        console.log(iterator_string)
    }
    /* Map and Set */
    console.log(' Map and Set demo  ')
    var ingredience = new Map([
        ['cucumber', 300],
        ['salt', 10],
        ['onion', 20],
    ])
    console.log(ingredience)
    console.log('get onion ' + ingredience.get('onion'))
    ingredience.set("water", "100ml")
    ingredience.set(4, "100ml") // any type key 
    console.log(ingredience)
    ingredience.delete(4) // any type key 
    console.log(ingredience)
    console.log(ingredience.keys())
    console.log(ingredience.values())
    console.log('start iterate')
    for (const iterator of ingredience) {
        console.log(iterator)
    }

    /* Demo Set */

    let mySet = new Set();

    let john = { name: "John" }
    let pete = { name: "Pete" }
    let mary = { name: "Mary" }


    mySet.add(john)
    mySet.add(pete)
    mySet.add(mary)
    console.log(mySet)

    console.log('==== end simple run ====' + "\n")

    var insDisctionary = new myDictionary();
    insDisctionary.add('book', 'buku', 'en-id')
    insDisctionary.add('tangan', 'hand', 'id-en')
    insDisctionary.add('hair', 'rambut', 'en-id')
    insDisctionary.add('leg', 'kaki', 'en-id')
    insDisctionary.add('hidung', 'noose', 'en-id')
    insDisctionary.add('kotak', 'box', 'id-en')
    console.log(insDisctionary.dictionaries)
    // console.log(insDisctionary.get('tangan'))
    // console.log(insDisctionary.get('kucing'))
    // console.log(insDisctionary.get('kaki'))
    // console.log(insDisctionary.get('leg', 'en-id'))
    // console.log(insDisctionary.get('leg', 'id-en'))
    // console.log(insDisctionary.get('kaki', 'id-en'))
    // console.log(insDisctionary.get('tangan'))
    // console.log(insDisctionary.get('tangan'))
    // console.log(insDisctionary.get('hair'))
    console.log(insDisctionary.get('kotak', 'en-id'))
    // console.log(insDisctionary.get('box', 'id-en'))
    console.log(insDisctionary.get('box', 'id-en'))
    // console.log(insDisctionary.get('kaki', 'id-en'))

}

$CalculateMatrix = function (param1, param2) {
    console.log('start calculate matrix ....');
    return `${param1}, ${param2}`
}

class myDictionary {

    constructor() {
        // this.flow_dic = 'en-id';
        this.flow_dic = null;
        this.dictionaries = new Map([
            ["kucing", "cat-eng"],
            ["cat", "kucing-id"]
        ]
        );
    }
    add(word1, word2, flow_dic) {
        var current_flow_disc = (flow_dic || this.flow_dic).split('-');
        this.dictionaries.set(word1, word2 + '-' + current_flow_disc[1])
        this.dictionaries.set(word2, word1 + '-' + current_flow_disc[0])
    }

    get(yourWord, flow_dic) {
        var result = 'Silahkan Input kata yang akan anda cari';
        if (yourWord) {
            var current_flow_disc = flow_dic || this.flow_dic;
            if (current_flow_disc == 'id-en') {
                result = 'Kata tidak di temukan '
                if (this.dictionaries.has(yourWord)) {
                    console.log('Menterjemahkan kata :' + yourWord);
                    var found_word = this.dictionaries.get(yourWord).split('-');
                    if (found_word[1]=='id') {
                        var keyword_result = found_word[0];
                        return 'Hasil :' + keyword_result;
                    }
                    return result + ' dalam Bahasa Inggris' 
                }
                return result;
            }else if (current_flow_disc == 'en-id') {
                result = 'uknown word'
                if (this.dictionaries.has(yourWord)) {
                    console.log('Translating word :' + yourWord);
                    // var keyword_result = this.dictionaries.get(yourWord).split('-')[0]
                    // return 'hasil :' + keyword_result;
                    var found_word = this.dictionaries.get(yourWord).split('-');
                    if (found_word[1] == 'en') {
                        var keyword_result = found_word[0];
                        return 'result :' + keyword_result;
                    }
                    return result + ' in Bahasa' 

                }
                return result;
            } else {
                result = 'kata tidk di kenali ';
                // console.log(this.dictionaries)
                if (this.dictionaries.has(yourWord)) {
                    console.log('Automatic detect lang : ' + yourWord);
                    var keyword_result = this.dictionaries.get(yourWord).split('-')[0]
                    return 'hasil :' + keyword_result;
                }
                return result;
            }
        }
        return result;

    }


}


var result = {
    getDisc: function () {
        // var insDisctionary = new myDictionary();
        // insDisctionary.add('book', 'buku', 'en-id')
        // insDisctionary.add('tangan', 'hand', 'id-en')
        // insDisctionary.add('hair', 'rambut', 'en-id')
        // insDisctionary.add('leg', 'kaki', 'en-id')
        // insDisctionary.add('hidung', 'noose', 'en-id')
        // console.log(insDisctionary.get('tangan'))
        // console.log(insDisctionary.get('kucing'))
        // console.log(insDisctionary.get('kaki'))
        // console.log(insDisctionary.get('buku', 'id-en'))
        // return (insDisctionary.get('kucing'))
        return true;
    }()
};
// console.log(result)


// const readline = require('readline');

// const rl = readline.createInterface({
// 	input: process.stdin,
// 	output: process.stdout
// });


// rl.question('What do you think of Node.js? ', (answer) => {
// 	// TODO: Log the answer in a database
// 	console.log(`Thank you for your valuable feedback: ${answer}`);

// 	rl.close();
// });

module.exports = {
    run
}

