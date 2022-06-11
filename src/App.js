import React from "react";
import './App.css';

class App extends React.Component {
  constructor(){
      super();
      this.state = { url: "" }
  }
  
  confirmCheckout = async () => {
    fetch("/api")
    .then((res) => res.json())
    .then(json => this.setState({ url: json.url }));
  }

  componentDidUpdate(prevProps,prevState) {
    if (prevState.url !== this.state.url ) {
      window.location.replace(this.state.url)
    }
  }

  render () {
    return (
      <div className="App">
        <button onClick={this.confirmCheckout}>Checkout!</button>
      </div>
    );
  }
}

export default App;
