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

	addAdditionalEmailField(){
		this.props.actions.addEmail();
	}

	addAdditionalPhoneField(){
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

	checkForBlankValue(fieldname,key,val,flag){
		if(fieldname == '' || fieldname.toString().trim()==''){
			this.props.actions.validate({'fieldname': key, 'value': val});
			return true;
		}
		return flag ? true : false;
	}

	createElement(obj,type,handler){
		const elements = Object.keys(obj).map((key,index) => (
											<div key={key}>
												<input name={key} type={type} value={obj[key]} onChange={e => handler(e)}></input>
											</div>
										));
		return elements;
	}

	//custom validations
	validations(){
		const {firstname,lastname,primaryEmail,primaryPhoneNumber} = this.props.info;
		let flag = false;
		flag = this.checkForBlankValue(firstname,'errorfn','First name is required',flag);
		flag = this.checkForBlankValue(lastname,'errorln','Last name is required',flag);
		flag = this.checkForBlankValue(primaryEmail,'erroremail','Primary email is required',flag);
		flag = this.checkForBlankValue(primaryPhoneNumber,'errorph','Primary phone number is required',flag);
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
		const {firstname,lastname,primaryEmail,primaryPhoneNumber,secondaryEmails,secondaryPhoneNumbers,errorfn,errorln,erroremail,errorph} = this.props.info;
		return (
			<React.Fragment>
			<h1>Edit Personal Information</h1>
			<form onSubmit={this.handleSubmit}>

						<div>
							<label>
								First name:
								<input type="text" value={firstname}  aria-label='First name' aria-required="true" name="firstname" onChange={e => this.onInputChange(e,'errorfn')} />
							</label>
							<span className="error">{errorfn}</span>
						</div>

						<div>
							<label>
								Last name:
								<input type="text" value={lastname} aria-label='Last name' aria-required="true" name="lastname" onChange={e => this.onInputChange(e,'errorln')}/>
							</label>
							<span className="error">{errorln}</span>
						</div>

						<div>
							<label>
								Email address:
								<input type="email" value={primaryEmail} aria-label='Email address' aria-required="true" name="primaryEmail" onChange={e => this.onInputChange(e,'erroremail')}/>
							</label>
							<span className="error">{erroremail}</span>
						</div>

						{this.createElement(secondaryEmails,'email',this.onEmailChange)}

		        <a href="javascript:void(0)" className="red" onClick={this.addAdditionalEmailField.bind(this)}> + Add alternate email address</a><br/>
						
						<div>
							<label>
								Contact number:
								<input type="tel"  value={primaryPhoneNumber} aria-label='Phone number' aria-required="true" name="primaryPhoneNumber" onChange={e => this.onInputChange(e,'errorph')}/>
							</label>
							<span className="error">{errorph}</span>
						</div>

						{this.createElement(secondaryPhoneNumbers,'tel',this.onPhoneNoChange)}

		        <a href="javascript:void(0)" className="red" onClick={this.addAdditionalPhoneField.bind(this)}> + Add alternate phone number</a>

		        <input type="submit" value="Submit" />
		        <input type="button" value="Cancel" onClick={this.cancel.bind(this)}/>
	      	</form>
					</React.Fragment>
      	);
	}
}
