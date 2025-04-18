// // create new element in react

// // how do we add id, className, style to this new element?! 


// // React.createElement("tag", {attributes like id, className, style as obj, etc}, "text")

// const element = React.createElement("h1", {id: "first", className: "rahul", style:{backgroundColor: "blue"}}, "hello there")
// // note: in js- class name is reserved - so we use className whenever we need to define some class 
// // style - add them as an object 


// // give div elem with id root - access to reactRooot
// const Reactroot = ReactDOM.createRoot(document.getElementById("root"))
// Reactroot.render(element) // render that element on the page - having add them into div elem with id root 


////// 


// const element1 = React.createElement("h1", {id:"first", className:"abc", style:{backgroundColor:"black", fontSize:"30px", color:"white"}}, "this is element-one")


// const element2 = React.createElement("h1", {id:"second", className:"abcdef", style:{backgroundColor:"blue", fontSize:"30px", color:"white"}}, "this is element-two")


// const Reactroot = ReactDOM.createRoot(document.getElementById("root"))
// Reactroot.render(element1)
// Reactroot.render(element2)

// when we tried to add second element into the root element, the first element got removed firstly.

// infact, we added some pre written content inside root element in div (index.html).
// it is shown on the page only until we dont use react render. 

// once we use react render, it removes all that is pre written and showcase its own content on the page

// React render only showcase current content on the page, it removes all pre exiting content from root. 


// RENDER - meaning of render is to remove all the previous data and put the new data that it is trying to render now.



// SO how do we show both the element1 and element2 together on the page? 

// one thing is clear - render thing in react only can out one thing at a time on the page. So rather than trying to send element1 and element2 separately, why not send them together as one final div element. 

// <div>
//      <h1>element1</h1>
//       <h1>element2</h1>
// </div>



// send this into render now, render will now add this into root div and we will have our both element1 and element2 shown on the page


// we can only render a single element once. so when we want to render multiple elements at once, we can add them inside another div and now will try to render this new div element. 

//

// creating React elements using React.createElement() and attempting to render them using ReactDOM.createRoot().render()



const element1 = React.createElement("h1", {id:"first", className:"abc", style:{backgroundColor:"black", fontSize:"30px", color:"white"}}, "this is element-one")


const element2 = React.createElement("h1", {id:"second", className:"abcdef", style:{backgroundColor:"blue", fontSize:"30px", color:"white"}}, "this is element-two")


// created a new div and added those two elements inside this as children (text) - since they werre more than one, we sent them using an array 
const div1 = React.createElement("div", {}, [element1, element2])


// next work is to assign the root access to react using creatRoot
const Reactroot = ReactDOM.createRoot(document.getElementById("root"))


// next thing- we put this new div element into root and render 

Reactroot.render(div1)






//// ~~~~~~~~~~~~~ 


//next we want to create more complex, - say we want to add many more things together 

// {/* <div>
//     <div>
//         <h1>
//             <p>
                
//             </p>
//         </h1>
//     </div>
// </div> */}

// life would be much easier if we start writing html code inside js code only.

// the above code - those divs, h1 tags, etc are not understood by react. as react is under the hood part os js.

// here comes the concept of JSX 
// JSX - it understands the html as well.


// JSX - write html code or whatever, it understands it and finally it will convert that code into react element codes.
