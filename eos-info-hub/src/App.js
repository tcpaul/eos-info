import React, { Component } from 'react';
import './App.css';

import * as Eos from 'eosjs';

import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';

const config = {
httpEndpoint: 'http://45.33.125.144:8888'
}

const eos = Eos.Testnet(config);

eos.getBlock(1).then(result => {console.log(result)});

eos.getBlock({block_num_or_id: 1}).then(result => console.log(result))

// Callbacks are similar
const callback = (err, res) => {err ? console.error(err) : console.log(res)}
eos.getBlock(1, callback)
eos.getBlock({block_num_or_id: 1}, callback)

// Provide an empty object or a callback if an API call has no arguments
eos.getInfo({}).then(result => {console.log(result)})

class App extends Component {

getInfo = () => {
eos.getInfo({}).then(result => {console.log(result)})
}

  render() {
    return (
      <div className="App">
       <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
<Button variant="raised" color="primary" onClick={this.getInfo}>
      GET INFO
    </Button>
<Paper>
Make all the eos
</Paper>
      </div>
    );
  }
}

export default App;
