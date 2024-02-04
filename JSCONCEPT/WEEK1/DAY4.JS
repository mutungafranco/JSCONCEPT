/**
 * Object / DICTIONARIES
 */

let object = {
    name : "francis",
    age :30,
    school:"zindua school",
    personalities :{"kind" ,"humble" ,"hardworking"},
    sturbborn : false,
    hobbies: {
        indoors : ["reading" ,"cooking"],
        outdoors : ["swimming" ,"hiking"]
    },
    sound :function () {
        console.log("i am a human being")
    }

}

// console.table(object.keys(person))


let people = [
    {
        name:"Alice"
        age: 23,
        city: "chicago"
    },
    {
        name: "dave"
        age: 26
        city: "london"
    }
]

function printpeople() {
    for (let i =0; I < people.length; i++){
        console.log(people[i].name)

    }
}
 function findperson(name) {
    for (let i =0; i < people.length; i++{
        if  (people[i].name ===name){
            console.log(name,"found at position", i+1)
        }
    } )
 }

 function groupby(arry,property) {
    let grouped ={}
    for (let i = 0; i<people .length; i++){
        let person =arr[i]
        let key =person{property}
        
        if (!grouped[key]) {
            grouped[key] = [person]

        }
    }
    return grouped
 }
const person ="dan"