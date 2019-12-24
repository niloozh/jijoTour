import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

export class Success extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <MuiThemeProvider > 
        <React.Fragment>

            <AppBar title="Success" />
            <h1>اطلاعات با موفقیت ثبت شد</h1>
            <p>ایمیلی با جزییات تور دریافت میکنید.</p>
          
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Success;