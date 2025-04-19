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



////////


// ## ~~~~~~~~~~~~~~~~~ BUNDLER ~~~~~~~~~~~~~~~~~~~~~


// The current code base of mine is not apt for production level. our current code has all react code (react cdn) and all of the reactDOM code (reactDOM cdn), so currently our code base is not optimised etc. 

// just like in case of java, we first change then into bytecode kyuki apparently bytecode runs faster, similarly, we'll do something here. 



// one small optimisation idea : 

// currently, our code base has to hit the react code at cdn, then return back, what if we copy paste all the code from react cdn and inspite of putting reacrtr cdn over there, we paste the entire react code?? 
// this will save some time, it wont need to go to react cdn server each time. right !!!

// but this will increase our code size, also we are not using all of the react functionalities just yet. so bringing all the code base into our code base doesn't suit right. 



// basic idea of optimisation 

// - remove all the comments
// - remove all the extra spaces 
// - remove those lines of code which are n longer being used.
// - use compressed size images 

// meaning of production ready code - 1 ms saved matters a lot. 


// optimised meaning - final file size should be least.

// THAT'S WHERE CONCEPT OF BUNDLER IS USED. 

// BUNDLER - it goes through all of our code, reads it and return us the bundle of it - which we can put into production.


// BUNDLER reads throrugh all of our code base - html, css file, js file or react file etc. Goes through all of the dependencies used in our code base--- returns all of the imp stuffs to us after making them into a bundle.


// it extracts only the necessary parts required for us from the dependencies. 
// it removes the extra spaces, comments, etc
// it optimises our code base.
// it will extract only the essentials from react and reactDOM code base -- pack them - make a bundle - and return to us.




/// we have currently so many bundler available 
// Webpack, vite, parcel


// so understand the difference - react is not doing all the optimisation - bunlder does that. 



//  npm init  - develops a package.json file for us (Use `npm install <pkg>` afterwards to install a package and save it as a dependency in the package.json file. )

// NOTE: npm init -y : it generates a default package.json for us 

// for it to ask info - use npm init 


// npm install parcel

// ~~~~~~~~~~~~~~~~~~~~~~



// npm - node package manager - stores everything related to js.

// npm init - asks us info about our project amd then accordingly creates a package.json file for us. 

// npm init -y : starts a default package.json file for us 

// if we have to use anything out of what is available at npm, just install them as a dependency into our system and start using them - npm install ....

// npm install parcel 

// After installing Parcel, the node_modules folder holds Parcel itself and all its dependencies. This is a standard part of any npm-based project and is essential for Parcel to operate correctly

// key points: -

// node_modules can become quite large, but this is normal for modern JavaScript projects using tools like Parcel.

// The actual list of packages installed is tracked in your package.json (under dependencies and devDependencies), not in the node_modules folder itself.

// If you delete node_modules, you can always restore it by running npm install again, which will reinstall all required packages as specified in your package.json




// Should You Save node_modules to GitHub?
//  --> You should NOT save the node_modules folder to your GitHub repository in almost all cases. This directory is very large, can be easily regenerated, and is not necessary for others to run your project as long as your package.json and package-lock.json (or yarn.lock) files are included. These files specify all the dependencies and their versions, allowing anyone to recreate the node_modules folder by running npm install


// so how should i make sure node_modules are not tracked by git and it doesn't get put up on github??

// ---> create a file names .gitignore in our project 
// put node_modules into .gitignore --> add node_modules inside .gitignore
// this tells git to ignore the entire node_modules directory anywhere in our project.




/// so having npm initialised and parcel installed, there is no need for us to use react cdn -- we can directly install react and reactDOM from npm (npm install react react-dom )

// now we can check package.json - we can find parcel, react  and react-dom as dependencies over there.



// {
//     "dependencies": {
//       "parcel": "^2.14.4",
//       "react": "^19.1.0",
//       "react-dom": "^19.1.0"
//     }
//   }

// "react": "^19.1.0" - ^ is called caret.
// version : 18.2.3 ---> MAJOR.MINOR.PATCH

// major update. minor update. patch 
// whenever a bug comes in our code, we solve/handle them in a patch.

// patch change - no change in any functionality nor any new functionality added -- just handled an existing bug.

// minor update - added some new functionality to our code but the older version is still running.

// therefore, patch or minor update thingy doesn't hamper the original main code base.

// major update - yes, this is a big change. and hence when any major change comes, we need to check once what are the changes being made, and accordingly we should do those changes in our cpde base, else our code base will get hampered.


// caret : ^ - it means it can handle all the minor change and patch changes.  ----> "react": "^19.1.0"


// tilt : ~ - it means it can only handle patches 

// ^ : minor and patches 
// ~ : patches



// 

// difference between package.json vs package.lock.json?

// --> package.json is for defining and describing your project and its dependencies, while package-lock.json is for locking those dependencies to exact versions for reproducibility


// package.json is the main configuration file for your Node.js project. It contains metadata about your project (like name, version, description), scripts, and lists of dependencies with version ranges. It’s essential for defining what your project is and what it needs to run or build.

// package-lock.json is automatically created by npm to record the exact versions of every installed package and its dependencies. This guarantees that anyone who installs your project’s dependencies will get the same dependency tree, avoiding version conflicts and ensuring consistent builds.


// While package.json defines the dependencies and scripts for your project, package-lock.json ensures that installations are consistent across different machines and environments by locking the exact versions of dependencies.​


// It's a best practice to commit both files to version control to maintain consistency and reproducibility in your project builds.
 

// locked exact version of the dependencies thaat we have used, lies in package.lock.json.

// if there is no node_modules --> all we need to do is npm install in the command line 

// it will go to packaage.lock.json and bring back all the important dependencies, etc to our code base. If say, package.lock.json is also not there, it will go to package.json and check for dependencies- and bring them, but this time they might not be able to bring exact versions of dependencies- whatever the current vrsion(including the minor fix or patch), it brings that along.



