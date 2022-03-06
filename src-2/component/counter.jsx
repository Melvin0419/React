import React, { Component } from "react";

class Counter extends Component {
  style = {
    fontSize: 30,
    fontWeight: "bold",
  };

  render() {
    return (
      <div>
        <span style={this.style} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>

        <button
          onClick={() => {
            this.props.onIncrement(this.props.counter);
          }}
          className="btn btn-secondary btn-sm m-2"
        >
          <h4>Increment</h4>
        </button>
        <button
          className="btn btn-danger btn-sm m-2 "
          onClick={() => {
            this.props.onDelete(this.props.counter.id);
          }}
        >
          <h4>Delete</h4>
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;

// in jsx, we define the attribute using className since class is the keyword that been used.
// there are bootstrap object like button and badge.

// ---------------------------------- <React.Fragment> ---------------------------------------

// when returning multiple types of tags(h1 and button, in this case), using a container like <div>.
// <React.Fragment> is a kind of container that won't exist in the console since this container
// have no other use.

// ---------------------------------- create a list with loop ---------------------------------------

// for rendering list, since there's no concept like loop in react, we can use map(item =><li>{item}</li>)
// item is the object in the array.
// and we need to give the id(keyword) to every object in the list, to help virtual DOM keep tracking the real DOM.
// this id don't need to be unique in the entire page or application, but in the list is fine.

// ---------------------------------- how the condition (T/F) in js work---------------------------------------

// in javascript
// true && str : ( "" -> false, other -> true)
// true && num : (0 -> false, other -> true)

// ---------------------------------- Eventhandler, binding ---------------------------------------

// for eventhandler, we simply call the reference of the method by this.method, rather than call the entire method with this.method()
// however, this cause a problem that, only passing the reference will make the method become 'unbinded'. In this situation,
// 'this' keyword will become undifined.
// The solution is to 'bind' the method by method = () => {}

// ---------------------------------- updating state property ---------------------------------------

// in react, if we change the property in state like this.state.count = 0
// the code won't automatically detect the change and update the value of the property in state.
// therefore, we need to use the setState() method to let the code know we have updated the value.
