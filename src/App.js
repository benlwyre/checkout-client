import React from "react";
import './App.css';

class App extends React.Component {
  constructor(){
      super();
      this.state = { 
        url: "",
        reservation: ""
      }
  }
  
  confirmCheckout = async () => {
    fetch("/api")
    .then((res) => res.json())
    .then(json => this.setState({ reservation: json.reservation }));
  }

  componentDidUpdate(prevProps,prevState) {
    if (prevState.reservation !== this.state.reservation ) {
      console.log(this.state.reservation);
      new window.Wyre({
        env: 'test',
        operation: {
          reservation: this.state.reservation,
          type: 'debitcard-hosted'
        }
      });
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
