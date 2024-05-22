import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  //if error coocurs in lifecycle, catch and set hasError  state to true
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Opps something went wrong</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
