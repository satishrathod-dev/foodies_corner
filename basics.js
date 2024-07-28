/*
  // core way of creating react element or obj:
  const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement("div", { id: "child" }, [
      React.createElement("h1", {}, "I am an h1 tag"),
      React.createElement("h2", {}, "hey there!"),
    ]),
    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", {}, "Hot module Replacement"),
      React.createElement("h2", {}, "hello"),
    ])
  );

  // const heading = React.createElement("h1", {}, "Hello React!");
  // const root = ReactDOM.createRoot(document.getElementById("root"));

  const root = ReactDOM.createRoot(document.getElementById("root"));

  // root.render(heading);
  root.render(parent);
  */

// const headings = (
//   <div>
//     <h1>Hello JSX!</h1>
//     <h2>Hello JSX2!</h2>
//   </div>
// );

/*const HeadingComponent = () => {
    return <h1>Hello Functional Component!</h1>;
  };*/

//When you are creating functional component use arrow function: convention
// const Title = () => <h1 className="heading">Hello from Arrow Function!</h1>;

// const elem = <span>React Element! </span>;
// const title = <h1 className="heading">{elem}I am JavaScript Variable!</h1>;

/*
  //Normal function (Anonymous)
  const Title = function () {
    return <h1>Hello From Normal Function</h1>;
  };



  // Component Compostion: Merging two components
  const HeadingComponent = () => (
    <div id="container">
      {/* Use {curlyBraces} for JS ==> This will help to get rid of malicius data => From some random api}*/
//     <h2>{console.log("I am JavaScript inside JSX!")}</h2>
//     {/* <Title /> */}
//     {title}
//     <h1 className="heading">Hello Functional Component!</h1>
//   </div>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<HeadingComponent />);

// const heading = React.createElement("div", { id: "cantainer" }, [
//   React.createElement("h1", { className: "title" }, "Hello 1!"),
//   React.createElement("h1", { className: "title" }, "Hello 2!"),
// ]);

// const Heading = () => (
//   // <div id={props.id}>
//   <div id="parent">
//     {/* <h1 className={props.className}>Hello 1!</h1>
//     <h1 className={props.className}>Hello 2!</h1> */}
//     <h1 className="title">Hello 1!</h1>
//     <h1 className="title">Hello 2!</h1>
//   </div>
// );

// const FunctionalComponent = () => <Heading />;

// Will not work like this:
// {
//   <title />;
// }
// return title;
// return <Heading id="parent" className="title" />;
// return <Heading />;

// Will not work like this:
// {
//   <Heading />;
// }
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<FunctionalComponent />);

// const HeaderComponent = () => (
//   <div id="container">
//     <header>
//       <img src="/motorcycle-1905281_640.jpg" />
//     </header>
//   </div>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<HeaderComponent />);
