// create element through JS 

const header1 = document.createElement("h1")
header1.innerHTML = "hello, from NAMAN"

// styled this h1 element  
header1.style.backgroundColor = "blue"
header1.style.fontSize= "30px"
header1.style.color = "white"


// say we wan to create another element - header2 

const header2 = document.createElement("h2")
header2.innerHTML = "hello, from REACT"

header2.style.color = "blue"
header2.style.backgroundColor = "yellow"
header2.style.fontSize = "15px"




// to insert header1 or header2 into div elem with id "root"

// step1 ; select that div elem with id = root 
// const root = document.getElementById("root")
// root.append(header1) // now it can be seen on the html page 



// // similarly to have header2 shown on the DOM, we need to insert it into div element with id = root 
// root.append(header2)



// -- -- ---------------------
// -- -- ---------------------
// -- -- ---------------------
// -- -- ---------------------




// ## next if someone wants to add another header into the page, again all this code will have to be written 
// ## so how do we automate things? we can use function 



// ~~~~~~~~ REACT replica - using JS ~~~~~~~~~~~~~~~ //

// const React = {
//     createElement: function(tag, styles, text){
//         const newElement = document.createElement(tag)


//         // styles = {fontSize:"50px", color:"red", backgroundColor:"pink"}
//         // so how do we add these to our new element at once 
//         // styles is an object- which holds diff style property
//         // to iterate on an object, we can use for-in loop 


//         // newElement.style.fontSize = ...
//         // newElement.style.color = ....
//         for(let key in styles ){
//             newElement.style[key] = styles[key]
//             // newElement.fontSize = 30px
//             // newElement.style[key] is equivalent to newElement.style.key

//         }

        

//         newElement.innerText = text



//         return newElement 
//     }
// }

// here React is an object. 
// and createElement is its one of the property 
// since createElement holds a function, it can be called as a method.
// to access object property or method we use dot or [] property



// say we also want to handle the appending of new element into the root by a function 

// const ReactDOM = {
//     render : function(element, root){
//         // element is something we want to append into dom 
//         // root is the div eleme with id = root in which we want to append this new element.
//         root.append(element)
//     }
// }



// // created new elements using React replica 
// const header3 = React.createElement("h1", {}, "hello naman")
// const header4 = React.createElement("h3", {}, "react- 101 studying")

// // // const root = document.getElementById("root")
// // root.append(header3)
// // root.append(header4)



// // or we could use ReactDOM object for that 

// ReactDOM.render(header3, document.getElementById("root"))
// ReactDOM.render(header4, document.getElementById("root"))


// // // newElement with style added 
// const header5 = React.createElement("h1", {fontSize:"50px", color:"red", backgroundColor:"pink"}, "hi from REACT")
// ReactDOM.render(header5, document.getElementById("root"))

// root.append(header5)



// React - object 
// ReactDOM - object 





// ~~~~~~~~~~~~~~ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// How do we handle or create unordered list this way??

// unordered list 
// HTML 
// CSS
// JS 



const React = {
    createElement: function(tag, styles, text){
        const newElement = document.createElement(tag)

        // styles = {fontSize:"50px", color:"red", backgroundColor:"pink"}
        // so how do we add these to our new element at once 
        // styles is an object- which holds diff style property
        // to iterate on an object, we can use for-in loop 

        for(let key in styles ){
            newElement.style[key] = styles[key]
            // newElement.fontSize = 30px
            // newElement.style[key] is equivalent to newElement.style.key

        }

        // add this extra thing so that we can develop things like undordered list where we'll need to send multiple texts 
        if (typeof text === "object"){
            // typeOf(arr) = object in js 
            for (let val of text){
                newElement.append(val)
            }


        }
        else{
            newElement.innerText = text
        }


        return newElement 
    }
}

const ReactDOM = {
    render : function(element, root){
        // element is something we want to append into dom 
        // root is the div eleme with id = root in which we want to append this new element.
        root.append(element)
    }
}






const li1 = React.createElement("h1", {}, "HTMl")
const li2 = React.createElement("h1", {}, "CSS")
const li3 = React.createElement("h1", {}, "JS")


const unorderedList = React.createElement("ul",{fontSize:"10px", color:"red", backgroundColor:"pink"}, [li1,li2,li3] )
// React accepts text as single, so we sent all three as an array - we'll extract them using loops 
ReactDOM.render(unorderedList, document.getElementById("root"))