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
    if(this.props.info){
      const {title,subtitle,firstname,lastname,primaryemail,primaryphno,otheremails,otherphnos} = this.props.info;
      return (
          <div className = "contact-info">
          
          <h1>{title}</h1>
          <div className = "sub-info">
            <h2>{subtitle}</h2> 
            <a href="javascript:void(0)" onClick={this.onEdit.bind(this)}>Edit</a>
            <span> {firstname} </span> <span> {lastname} </span>
            <br/>
            <span> {primaryemail} </span>
            <br/>
            {Object.keys(otheremails).map((key) => (
              <React.Fragment key={key}><span>{otheremails[key]}</span><br/></React.Fragment>
            ))}
            <span> {primaryphno} </span><br/> 
            {Object.keys(otherphnos).map((key) => (
              <React.Fragment key={key}><span>{otherphnos[key]}</span><br/></React.Fragment>
            ))}
             
          </div>

        </div>
      );
    }
    return <br />;
  }
}

export default DisplayInfo;