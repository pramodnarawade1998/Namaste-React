import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);

    this.state = { count: 0, count2: 1 };

    console.log(this.props.name + " Child Constructor");
  }

  componentDidMount() {
    console.log(this.props.name + " Child Component Did Mount");

    // API Call
  }

  render() {
    const { name, location } = this.props;
    const { count, count2 } = this.state;

    console.log(this.props.name + " Child Render");

    return (
      <div className="user-card">
        <h1>Count = {count}</h1>
        {/* <h1>Count2 = {count2}</h1> */}
        <button
          onClick={() => {
            // NEVER UPDATE STATE VARIABLES DIRECTLY
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 1,
            });
          }}
        >
          Count Increases
        </button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: pramod@123</h4>
      </div>
    );
  }
}

export default UserClass;
