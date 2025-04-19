import React from "react"
import ReactDOM from "react-dom/client"


const element1 = React.createElement("h1", {key: "1", id: "one", className:"class-one", style:{fontSize:"30px", color:"white", backgroundColor:"blue"}}, "hello element2")
const element2 = React.createElement("h1", {key:"2", id: "two", className:"class-two", style:{fontSize:"30px", color:"white", backgroundColor:"black"}}, "hello element2")


const div1 = React.createElement("div", {}, [element1, element2])


const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render([element1, element2])

root.render(div1)

// React will completely replace everything inside #root in index.html file, including the <h3> you wrote manually - and replace it with whatever you're rendering from React 
