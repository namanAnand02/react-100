why do we need react?
- for dynamic websites, these libraries make it easier to do DOM manipulation.

- React is just an easier way to write normal html/css/js. 
- Its a new syntax, that under the hood gets converted to HTML/CSS/JS. 
- If we are writing a react code, we wont be sending the react code to the browser.
- in google, network tab, we get a bunch of HTML/CSS/JS file there, 
- we never get react.js file/code over there. Our browser even cant understand the react components - browser only understands the html/css/js.
- REACT --------- npm run build -------> HTML/CSS/JS 
- whenever we write the react code/ productionise it/ deploy it on aws, the thing we deploy on the aws is just html/css/js - that got spit out from react code.
- npm run build : command that we can run to convert react code into html/css/js
- this html/css/js is the final code of our website. Just that its hard for developers to write html/css/js codes for a dynamic websites and much easier using react. 

- so we write react code for dynamic websites, it gets converted to html/css/js file eventually and it only gets deployed on aws.


- WHY REACT? 

-- people realised its harder to do DOM manipulation the conventional way.  
-- there were libraries that came into the picture that made it slightly easy, but still for a big app, its very hard(JQuery).
-- eventually, VueJs/React created a new syntax to do frontends.
-- under the hood, the react compiler convert our code to html/css/js.


- on linkedin, things like notifications, my network are dynamic and they keep changing. 

- in html file, created a btn and used DOM on it to make this button dynamic, this is also not bad. DOM can help us make things dynamic but things gets bad/messier when we build big applications. If making on button required 16 long lines of DOM to make it dynamic, imagine the line of code we'll need to write to make the whole big applications dynamic. Thats why we try to prevent it by using REACT. 

also, this DOM thingy can be unreadable to many and can seem complex to many, where as REACT codes are easy to understand and are very short lines of codes. 

- Imp concepts/ Jargons of dynamic websites: 

-- To create a react app, we usually need to worry anout two things : state and components 

-- component libraries in react and state management tools like redux or recoil
-- people have made frameworks on state and components separately. 
-- people have made state management libraries and components, people have also created design managements, UI componets etc 
-- basically, there are two very imp jargons in react and they are STATE and COMPONENTS 

> for a static websites, all we need is a components but for a dynamic websites, we need state and components.

-- creators of frontend frameworks realised that all websites can effectively be divided into two parts : STATE and COMPONENTS 

-- if we can define our dynamic websites into state and components, it'll give us an amazing developer experience. 
-- if anyone wants to create an application, first they will create state and components and doing that will ease their work. 



- STATE  COMPONENTS  RENDERING 


- ## STATE 

-- an object (js object) that represents the current state of the application.
-- it represents the dynamic things in our application ( things that change ), for example: the value of the counter

-- in prev application we created, the state variable is: 
-- counter 4 : in this, state is only that 4 wala part and not the whole string as it is only changing. 
-- if we have had 3 btns, first btn going up by one, second btn going down by one and third btn multiplying it by two --> in that case, the application has three state 

-- anything on the website that changes, it is called state

-- for the counter app, it could look something like this: 
        {
            count: 1
        }

-- what would be the state on the linkedin page top bar? --> my network wala value, bcoz it keeps changing, also the notifications bar, whose value keeps changing, also messaging, Jobs secion etc

-- state would look something like this for linkedin topbar: 
        {
            topbar:{
                home:0,
                myNetwork:1,
                messaging:0,
                notifications:10
            }
        }

-- why are we breaking our applications into state and components? 
--> the way react is written, if we change state lets say notifications to 2, it will automatically change that in our application 
--> this is good for developer as it would be hard for me to change it using DOM, find the notifications section, then change it etc etc 

--> state.topbar.notifications = 3 , just this much in react to do the changes. This way,, frontend would be so clean, and easy. 
--> whenever the btn is pressed, just update the state and it will automatically show the change over there.
--> in that counter app, just do state.count++ on every btn click.

-- understand now why state was introduced? 
-- so that all js logics, like counter increase on btn click etc only happen in the state logic. - How that happen, uske liye we need component, something we'll learn very soon. 




- ## COMPONENT  


-- we still need to write some html, otherwise how'd it know kahan hai notifications bar etc 

- **How a DOM element should render, given a state - is what is called a component.** 
- **It is a re-usable, dynamic, HTML snippet ( not necessarily HTML snippet ) that changes given the state.**

--  given the state, how'd you take that and render on the page is what we do using component. 
-- given the number is 1, how should you take that state and make it render on the page (render the btn)- is what is written on the component.  

- They broke this dowm into two parts, the dynamic part and static part.
- write the dynamic part at one side, static part/component on the other side --- update the variables (count), basically update the state. It will take the component and update the DOM. 

- React can be understood as the DOM updation engine. 
- React can be understood as the DIF calculator ( it calculates the difference between the old state and the new state.  )
- If we update the count state, make it count value + 1, react will sense this difference in the state and automatically update the DOM. 
- we change/ update the state - react takes the component and creates the final website for us. 


- **How a DOM element should render, given a state - is what is called a component.** 
- **It is a re-usable, dynamic, HTML snippet ( not necessarily HTML snippet ) that changes given the state.**

- if the state changes, the component will also change, better way to say it as: the component would also re-render. 

- In our previous counter app --> the button is the component, and the currentCount ( number value which changes) is the state. 
- The button is a component. It takes the state (currentCount) as an input and is supposed to render accordingly.
-- Component takes the state as the input and is supposed to render accordingly. 

- In linkedin topbar example: 
-- HOME <> my Network <> Jobs <> messaging <> Notifications 

--> these are components and they take state as input and renders them on the screen. 

--> notifications, my Network, etc all these are components and they take notifications count, my Network count (state) as input and renders them on the screen. 

- Therefore STATE + COMPONENT = REACT website 


- A state change triggers a re- render. 
- A re- render represents the actual DOM being manipulated when the state changes. 

- say we developer defined a onButtonClick function that changes the notifications count in the top bar --> state.topbar.notifications += 10 
- re- rendering means to show this change on the page. 

- re- rendering samajh aaya? - whenever state channges, automatically leads to re- render to show that change on the page.



- NOTE: 
> We usually have to define all our components once. And then all we have to do is to update the state of our app. React takes care of re- rendering our app.  



- React/ Vue.js are frameworks that asks us for two things: 
1. Create a bunch of components 
2. create a bunch of state objects 
Tell them which state objects is associated with which component 
and They will take care of the re- rendering, we dont need to worry about DOM manipulation, react will do that for us through re-rendering. 
We as a developer only worry about changing the state.


- define the components once ( people use material UI, etc)
- then all we have to do is to update the state.
- as we update our state, the website will get updated automatically, thats through react. 



- component is like the box and state is like color and number that changes

