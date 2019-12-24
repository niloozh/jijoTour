import React, { Component } from "react";
import "../App.css";
import TourFormDetails from './TourFormDetails';
import Success from './Success'
import Confirm from './Confirm'

class TourForm extends Component {
  state = {
    step:1,
    title :'',
    startPoint:'',
    destination:'',
    cost:'',
    features:'',
    capacity:''
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { title, startPoint,destination,cost,features,capacity } = this.state;
    const values = { title, startPoint,destination,cost,features,capacity };

    switch (step) {
      case 1:
        return (
          <TourFormDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );

      case 2:
          return (
            <Confirm
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              values={values}
            />
          );
          case 3:
              return <Success />;
        
    }
  }   
 
}

export default TourForm;