// so how do we create element in react? 

const element = React.createElement("h1", {}, "hello there")

// to add this into dom - first select the div elem with id root - and add it there.



// ReactDOM.render(element, document.getElementById("root"))

// it does showcase hello there on the DOM bit issues a warning: 
// react-dom.development.js:73 Warning: ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17.


// so this is how we do this in after 17 versions of react 

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(element)



// why did we need this?? 

// in older versions, rendering thing used to work exactly like js single-threaded nature. 
// say there are 5 btns, a user taps on first btn, now unless all of the work related to this btn (contents on this btn) doesn't get loaded, the user can't press another btn
// i.e unless some work is continued, the user can't assign new task to it. 

// now with this new approach, REACT has taken things into his own hand- react has taken control over root element fetched from html -
// and it has the extra power to stop the ongoing task to prioritize the new assigned task.





// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 



// WTF is CDN? 

// content delivery network

// there is always a main server for any service provider. 
// but they can't handle all the req from just that .
// also to make things easy for that lone server, they have spreaded out small small servers all around - called as CDNs.

// static data are stored in CDNs 
// dynamic data are stored inside the main server 

