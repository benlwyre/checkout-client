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
      var widget = new window.Wyre({
        env: 'test',
        reservation: this.state.reservation,
        operation: {
          type: 'debitcard-hosted-dialog'
        }
      });

      widget.open();
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
