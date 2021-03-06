import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import AppBar from './AppBar';
import StoreCard from './StoreCard';


class App extends Component {
  render() {
    return (
      <Grid container>
        <Grid item xs={12}>
          <AppBar />
        </Grid>
        <Grid container justify={"space-around"}>
          <Grid item xs={12} md={6}>
            <StoreCard storeName="Sayan Gents Beauty Parlour" />
          </Grid>        
          <Grid item xs={12} md={6}>
            <StoreCard storeName="Sayan Gents Beauty Parlour" />
          </Grid>        
        </Grid>
      </Grid>
    );
  }
}

export default App;
