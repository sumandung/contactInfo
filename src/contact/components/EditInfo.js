import React from 'react';

export default class EditInfo extends React.Component {
	constructor(props){
		super(props);
	}
	componentDidMount(){
		if(this.props.info === null){
			this.props.actions.displayInfo(true);
		} else {
			this.props.actions.displayInfo(true,this.props.info);
		}
	}

	addEmailField(){
		this.props.actions.addEmail();
	}

	addPhoneField(){
		this.props.actions.addTel();
	}
	
	onInputChange = (e,field) => {
		this.props.actions.handleInputChange({fieldname:e.target.name,value:e.target.value});
		this.props.actions.validate({'fieldname':field, 'value':""});
	}

	//other emails change 
	onEmailChange = (e) => {
		this.props.actions.handleEmailChange({fieldname:e.target.name,value:e.target.value});
	}

	//other ph no change
	onPhoneNoChange = (e) => {
		this.props.actions.handlePhoneNoChange({fieldname:e.target.name,value:e.target.value});
	}

	cancel(){
		this.props.actions.displayInfo(false);
		this.props.history.push('/');
	}

	//custom validations
	validations(){
		const {firstname,lastname,primaryemail,primaryphno,otheremails,otherphnos} = this.props.info;
		let flag = false;
		if(firstname == '' || firstname.trim()==''){
			this.props.actions.validate({'fieldname':'errorfn', 'value':"First name is required"});
			flag=true;
		}
		if(lastname == '' || lastname.trim()==''){
			this.props.actions.validate({'fieldname':'errorln', 'value':"Last name is required"});
			flag=true;
		}
		if(primaryemail == '' || primaryemail.trim()==''){
			this.props.actions.validate({'fieldname':'erroremail', 'value':"Primary email is required"});
			flag=true;
		}
		if(primaryphno == ''){
			this.props.actions.validate({'fieldname':'errorph', 'value':"Primary phone no is required"});
			flag=true;
		}
		return flag;
	}

	handleSubmit = (e) => {
		e.preventDefault();
		const flag = this.validations();
		if(!flag){
			this.props.history.push('/');
		}
	}

	render(){
		if(this.props.info === null) {
			return '';
		}
		const { error,handleSubmit } = this.props;
		return (
			<React.Fragment>
			<h1>Edit Personal Information</h1>
			<form onSubmit={this.handleSubmit}>

						<div>
							<label>
								First name:
								<input type="text" value={this.props.info.firstname}  aria-label='First name' aria-required="true" name="firstname" onChange={e => this.onInputChange(e,'errorfn')} />
							</label>
							<span className="error">{this.props.info.errorfn}</span>
						</div>

						<div>
							<label>
								Last name:
								<input type="text" value={this.props.info.lastname} aria-label='Last name' aria-required="true" name="lastname" onChange={e => this.onInputChange(e,'errorln')}/>
							</label>
							<span className="error">{this.props.info.errorln}</span>
						</div>

						<div>
							<label>
								Email address:
								<input type="email" value={this.props.info.primaryemail} aria-label='Email address' aria-required="true" name="primaryemail" onChange={e => this.onInputChange(e,'erroremail')}/>
							</label>
							<span className="error">{this.props.info.erroremail}</span>
						</div>

						{Object.keys(this.props.info.otheremails).map((key,index) => (
							<div key={key}>
								<input name={key} type="email" value={this.props.info.otheremails[key]} onChange={e => this.onEmailChange(e)}></input>
							</div>
            ))}
		        <span className="red" onClick={this.addEmailField.bind(this)}> + Add alternate email address</span><br/>
						
						<div>
							<label>
								Contact number:
								<input type="tel"  value={this.props.info.primaryphno} aria-label='Phone number' aria-required="true" name="primaryphno" onChange={e => this.onInputChange(e,'errorph')}/>
							</label>
							<span className="error">{this.props.info.errorph}</span>
						</div>

						{Object.keys(this.props.info.otherphnos).map((key,index) => (
							<div key={key}>
								<input name={key} type="tel" value={this.props.info.otherphnos[key]} onChange={e => this.onPhoneNoChange(e)}></input>
							</div>
						))}
		        <span className="red" onClick={this.addPhoneField.bind(this)}> + Add alternate phone number</span>

		        <input type="submit" value="Submit" />
		        <input type="button" value="Cancel" onClick={this.cancel.bind(this)}/>
	      	</form>
					</React.Fragment>
      	);
	}
}
