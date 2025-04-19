import React from "react"
import ReactDOM from "react-dom/client"


const element1 = React.createElement("h1", {id:"first", className:"abc", style:{backgroundColor:"black", fontSize:"30px", color:"white"}}, "this is element-one")

const element2 = React.createElement("h2", {id:"second", className:"abcdef", style:{backgroundColor:"blue", fontSize:"30px", color:"white"}}, "this is element-two")


// created a new div and added those two elements inside this as children (text) - since they werre more than one, we sent them using an array 
const div1 = React.createElement("div", {}, [element1, element2])


// next work is to assign the root access to react using creatRoot
const Reactroot = ReactDOM.createRoot(document.getElementById("root"))


// next thing- we put this new div element into root and render 

Reactroot.render(div1)

// the above code to showcase element1 and element2 into our html page wont show anything yet. 
// this is because we are no more using cdn - and we are bringing react/reacdom from npm 
// so currently, they resides in node_modules, in order to use them, we need to first import them here at the top.

