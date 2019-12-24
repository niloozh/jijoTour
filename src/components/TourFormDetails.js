import React, { Component } from 'react'
//import Dialog from '@material-ui/core/Dialog';
//import AppBar from '@material-ui/core/AppBar';
import PropTypes from 'prop-types';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { TextareaAutosize } from '@material-ui/core';
import appcss from '../App.css';
import { withStyles } from '@material-ui/styles';

const styles = {
  root: {
    backgroundColor : ''
  }
}

export class TourFormDetails extends Component {


    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      };
    
      render() {
                
        const { values, handleChange,classes } = this.props;
        return (
          <div className={classes.root}>
          <MuiThemeProvider >
            <React.Fragment ClassName="form">
                
                <TextField
                  label="Standard"
                  id="outlined-basic"
                  placeholder="نام تور را وارد کنيد"
                  label="نام تور"
                  onChange={handleChange('title')}
                  defaultValue={values.title}
                  margin="normal"
                  //fullWidth="true"
                  

                />
                <br />
                <TextField
                  placeholder="مقصد حرکت را وارد کنيد"
                  label="مقصد"
                  onChange={handleChange('destination')}
                  defaultValue={values.destination}
                  margin="normal"
                  //fullWidth="true"
                  
                /> 
                <TextField
                  placeholder="مبدا حرکت را وارد کنيد"
                  label="مبدا "
                  onChange={handleChange('startPoint')}
                  defaultValue={values.startPoint}
                  margin="normal"
                  label="مبدا"
                  //fullWidth="true"
                /> 
                
                <br />
                <TextField
                  placeholder="هزینه تور را وارد کنید"
                  label="هزینه"
                  onChange={handleChange('cost')}
                  defaultValue={values.cost}
                  margin="normal"
                  //startAdornment={<InputAdornment position="start">$</InputAdornment>}
                  //fullWidth="true"
                /> 
                <br />

                
                <TextField
                  placeholder="ظرفیت تور را وارد کنید"
                  label="ظرفیت"
                  onChange={handleChange('capacity')}
                  defaultValue={values.capacity}
                  margin="normal"
                  //fullWidth="true"
                /> 
                <br />
                <TextField
                  placeholder="جزییات و توضیحات بیشتر راجع به تور را وارد کنید."
                  label="توضیحات"
                  onChange={handleChange('features')}
                  defaultValue={values.features}
                  multiline
                  rowsMax="4"
                  margin="normal"
                  //fullWidth="true"
                  multyline="true"
                  
                /> 
                <br /> <br/>
                <Button
                  className="btnn"
                  color="primary"
                  variant="contained"
                  onClick={this.continue}
                  //style={{backgroundColor : 'green'}}
                >ادامه</Button>
              
            </React.Fragment>
          </MuiThemeProvider>
          </div>
        );
      }
    }

    
  TourFormDetails.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TourFormDetails);
