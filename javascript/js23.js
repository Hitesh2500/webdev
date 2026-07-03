// Array
// let a=[34,56,877,5,65]
// console.log(a[3])
// a.push(66)
// a.pop( )
// a.unshift(2)
// a.shift()
// console.log(a.toString())
// console.log(a)


// function
// eg1

// function show(){
//     console.log("Hitesh Kumar Prajapati")
// }

// show()

// eg2 add
// function add(a,b){
//      console.log(a+b)
// }
// add(4,7)

// eg3  find maximum
// function max(x,y){
//     if(x>y){
//         console.log(`max = ${x}`)
//     }
//     else{
//         console.log(`max = ${y}`)
//     }
// }
// max(4,33)

// eg4 vowel and consonent
function show(s){
    v=0
    c=0
    for(let i of s){
        if((i=="a")||(i=="e")||(i=="i")||(i=="o")||(i=="u")){
            v++;
        }
        else{
            c++;
        }

    }
    console.log("vowel",v)
    console.log("consonent",c)
}
show("hiteshkumar")