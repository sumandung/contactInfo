import React from 'react';

class DisplayInfo extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    if(this.props.info === null){
      this.props.actions.displayInfo(false);
    }
  }

  onEdit(){
    this.props.history.push('/edit');
  }

  createElementsFromArray(arr){
    const elements = Object.keys(arr).map((key) => { return (
        <React.Fragment key={key}><li>{arr[key]}</li></React.Fragment>
     )});
     return elements;
  }

  render() {
    //fallback UI
    if (this.props.hasError || this.props.info === null) {
      return (
        <div>
          <h1>Oops, something went wrong :(</h1>
          <p>Error in Loading</p>
        </div>
      );
    }
    else {
      const {firstname,lastname,primaryEmail,primaryPhoneNumber,secondaryEmails,secondaryPhoneNumbers} = this.props.info;
      return (
          <div className = "contact-info">
          <header>
            <h1>Personal Details</h1>
          </header>

          <section className = "sub-info">
            <h2>Personal Information</h2> 
            <a href="javascript:void(0)" onClick={this.onEdit.bind(this)}>Edit</a>
            <ul>
              <li> {firstname}&npsp;{lastname}</li>
              <li> {primaryEmail} </li>
              {this.createElementsFromArray(secondaryEmails)}
              <li> {primaryPhoneNumber} </li><br/> 
              {this.createElementsFromArray(secondaryPhoneNumbers)}
            </ul>
          </section>

        </div>
      );
    }
  }
}

export default DisplayInfo;