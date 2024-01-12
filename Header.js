
import React from "react";
import ReactDOM  from "react-dom/client";
import "./index.css";
import userIcon from "./user-image.png";

// Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class "title")
// const header = React.createElement("div", {className:"outsideDiv", key:"div"}, [
//     React.createElement("h1", {className:"h1", key:"h1"}, "this is heading one"),
//     React.createElement("h2", {className:"h2", key:"h2"}, "this is heading h2"),
//     React.createElement("h3", {className:"h3", key:"h3"}, "this is heading h3"),
// ])

// Q: Create the same element using JSX
// const header = (
//     <div className="container">
//         <h1 key="h1">this is me h1</h1>
//         <h2 key="h2">this is me h2</h2>
//         <h3 key="h3">this is me h3</h3>
//     </div>
// );

// Q: Create a functional component of the same with JSX
// const header = () => (
//     <div className="container">
//         <h1 key="h1">this is me h1</h1>
//         <h2 key="h2">this is me h2</h2>
//         <h3 key="h3">this is me h3</h3>
//     </div>
// );

// Q: Pass attribute into the tag in JSX
// const header = () => (
//     <div className="container">
//         <h1 key="h1" style={{color: "red"}}>this is me h1</h1>
//         <h2 key="h2" style={{color: "blue"}}>this is me h2</h2>
//         <h3 key="h3" style={{color: "yellow"}}>this is me h3</h3>
//     </div>
// );

// Composition of Component (Add a component inside another)

// const AnotherFuntion = () => {
//     return <h1>this is another function</h1>
// }

// const Header = () => {
//     return (
//         <div>
//         <AnotherFuntion/>
//         <h2>this is header function</h2>
//     </div>
//     );
// }

// three ways to call the component 
// `{Header()}` vs `{<Header/>}` vs `{<Header></Header>}` in JSX.

// const element = <h1>This is React Element</h1>; // This is React element 
// you may call to element like this
// {TitleComponent}

/*
Q: Create a Header Component from scratch using Functional Component with JSX
- Add a Logo on Left
- Add a search bar in middle
- Add User icon on right
- Add CSS to make it look nice
*/


const Header = () => {
    return (
        <>
          <header className="header">
            <div className="left">
              <img src={userIcon} alt="Logo" />
            </div>
            <div className="center">
              <input
                className="input"
                type="text"
                placeholder="Search anything you want..."
              />
              <button type="submit">
                Search
              </button>
            </div>
            <div className="right">
              <img src={userIcon} alt="User Icon" />
            </div>
          </header>
        </>
      );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header/>);