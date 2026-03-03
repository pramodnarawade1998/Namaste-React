import React, { useEffect } from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
      count: 0,
    };

    console.log(this.props.name + " Child Constructor");
  }

  async componentDidMount() {
    console.log(this.props.name + " Child Component Did Mount");
    // API Call

    const data = await fetch("https://api.github.com/users/pramodnarawade1998");
    const json = await data.json();

    console.log("Child State Updating");

    this.setState({ userInfo: json });

    console.log(json);
  }

  componentDidUpdate(prevProps, prevState) {
    // This is similar to useEffect(()=>{}, [userInfo, count]); in a Function Component
    if (
      this.state.userInfo !== prevState.userInfo ||
      this.state.count !== prevState.count
    ) {
      // Code
    }

    console.log("Child Component Did Update");
  }

  componentWillUnmount() {
    console.log("Child Component Will Unmount");
  }

  render() {
    console.log(this.props.name + " Child Component Render");
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: pramod@123</h4>
      </div>
    );
  }
}

export default UserClass;

/*
 * Parent Constructor
 * Parent Render
 *   <HTML />
 *
 * -----Child MOUNTING-----
 *
 * Child Constructor (Dummy Data)
 * Child Render (Dummy Data)
 *   <HTML /> (Dummy Data)
 * Child Component Did Mount
 * Parent Component Did Mount
 *   Child API Call
 *   Child State Variable is Updated - this.setState()
 *
 * -----Child UPDATE-----
 *
 * Child Render (New API Data)
 *   <HTML /> (New API Data)
 * Child Component Did Update
 *
 * -----Navigate to Different Page-----
 * Parent Component Will Unmount
 * Child Component Will Unmount
 *
 */
