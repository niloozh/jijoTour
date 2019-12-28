import React, { Component } from 'react'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';



export class Confirm extends Component {
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
        const {
            values: { title, startPoint,destination,cost,features,capacity }
          } = this.props;
        return (
            <MuiThemeProvider> 
                <React.Fragment>
                <List>
                    <ListItem>
                        <ListItemText primary="نام تور"  secondary={title}/> 
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="مبدا"  secondary={startPoint}/> 
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="مقصد"  secondary={destination}/> 
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="هزینه تور"  secondary={cost}/> 
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="ظرفیت"  secondary={capacity}/> 
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="توضیحات"  secondary={features}/> 
                    </ListItem>
                </List>
                <br/>
                <Button
                    color="secondary"
                    variant="contained"
                    onClick={this.back}
                >بازگشت</Button>

                <Button
                    color="primary"
                    variant="contained"
                    onClick={this.continue}
                >تایید اطلاعات</Button>
                </React.Fragment>
            </MuiThemeProvider>

        )
    }
}

export default Confirm
