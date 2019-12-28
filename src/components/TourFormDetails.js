import React, { Component } from 'react'
import PropTypes from 'prop-types';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { TextareaAutosize } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import colors from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';


const styles = {
  root: {
    float : 'right',
    '& .MuiTextField-root' : {
      //float : 'right',
      //textAlign : 'right'
        backgroundColor : 'l'
    },
    '& Button' : {
      backgroundColor : 'limegreen',
      marginLeft : '50px',
      '&:hover' : {
        backgroundColor :'green'
      }
    }
    
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
      <form className={classes.root} noValidate autoComplete="off">
          <input accept="image/*" className={classes.input} id="icon-button-file" type="file" style={{display:'none'}}/>
          <label htmlFor="icon-button-file">
          <IconButton color="primary" aria-label="upload picture" component="span">
            <PhotoCamera />
          </IconButton>
          </label>
          <br/>
        <TextField
          inputProps={{ style: {textAlign: 'right'} }}
          //style={{marginLeft :"700px"}}
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
          inputProps={{ style: {textAlign: 'right'} }}
          placeholder="مقصد حرکت را وارد کنيد"
          label="مقصد"
          onChange={handleChange('destination')}
          defaultValue={values.destination}
          margin="normal"
          //fullWidth="true"
        /> 
        <br />
        <TextField
          inputProps={{ style: {textAlign: 'right'} }}
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
          inputProps={{ style: {textAlign: 'right'} }}
          placeholder="هزینه تور را وارد کنید"
          label="هزینه"
          onChange={handleChange('cost')}
          defaultValue={values.cost,"ریال"}
          margin="normal"
          //startAdornment={<InputAdornment position="start">$</InputAdornment>}
          //fullWidth="true"
        /> 
        <br />
        <TextField
          inputProps={{ style: {textAlign: 'right'} }}
          placeholder="ظرفیت تور را وارد کنید"
          label="ظرفیت"
          onChange={handleChange('capacity')}
          defaultValue={values.capacity}
          margin="normal"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          //fullWidth="true"
        /> 
        <br />
        <TextField
          inputProps={{ style: {textAlign: 'right'} }}
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
      </form>

                    
        );
      }
    }

    
  TourFormDetails.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TourFormDetails);
