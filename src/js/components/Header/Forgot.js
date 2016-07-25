import React from "react";
import Modal from "react-modal";
import Validation from 'react-validation';
import validator from 'validator';
//import MaskedInput from 'react-maskedinput';


export default class Forgot extends React.Component {
 constructor(){
    super();
      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
      this.state = { open:{false}, };  
  }

   openModal () { this.setState({open: true}); } 
   closeModal () { this.setState({open: false}); }  
   isOpen() { this.setState({open: false});   }
  changeUrl () { location.href = '/success';  }


  
 
 onSubmit(event) {
        event.preventDefault();
        console.log(event);
    }

  render() { 


  	Validation.extendErrors({
			    isNotValidUser: {
			        className: 'ui-input_state_invalid-user',
			        message: 'not equal to "Sathish"',
			        rule: function(value) {
			            // Validation provides ref to 'validator' module, so you don't need to install it separately 
			            return validator.trim(value) === 'Sathish';
			        }
			    },
				    isRequired: {
				        className: 'ui-input_state_empty',
				        message: 'required',
				        rule: function(value) {
				            return Boolean(validator.trim(value));
				        }
				    },
					    isEmail: {
					        className: 'ui-input_state_email-pattern-failed', 
					        message: 'should be email',
					    },
				});


    return ( 

       <div> 
         
         ForgetUserName:  <button onClick={this.openModal}  class={'btn btn-link'}>Click Here!</button>
          <Modal 
          	style={{ overlay: { backgroundColor: '#EEEEEE' }, content: { color: '#000'  },  }}
           	isOpen={this.state.open} 
           	onRequestClose={this.closeModal}>

            <h1>Reterive the Username! <button onClick={this.closeModal} class={'btn btn-danger'} >Close the Window</button></h1>
             <Validation.Form onSubmit={this.onSubmit} class={'form-horizontal'} method={'post'}>

               <div class={"form-group"}>
                <label class={"col-xs-3 control-label"}>
                    Enter the Firstname <span class={"error"}> * </span>
                    </label>
                    <div class={"col-xs-6"}>
                    <Validation.Input
                        blocking='input'
                        className='ui-input form-control'
                        validations={[
                          {  rule: 'isRequired', rule: 'isNotValidUser'
                          }
                        ]}
                        invalidClassName='ui-input_state_custom-error-classname'
                        name='fName'
                        type='text'  />
                        </div>
                </div>
 				 <div class={"form-group"}>
                <label class={"col-xs-3 control-label"}>
                    Enter the Lastname <span class={"error"}> * </span>
                    </label>
                     <div class={"col-xs-6"}>
                    <Validation.Input
                        blocking='input'
                        className='ui-input form-control'
                        validations={[
                          {  rule: 'isRequired', rule: 'isNotValidUser'
                          }
                        ]}
                        invalidClassName='ui-input_state_custom-error-classname'
                        name='lName'
                        type='text'  />
                        </div>
                </div>

 <div class={"form-group"}>
                <label class={"col-xs-3 control-label"}>
                    Enter the E-Mail <span class={"error"}> * </span>
                    </label>
                     <div class={"col-xs-6"}>
                    <Validation.Input
                        blocking='input'
                        className='ui-input form-control'
                        validations={[
                          {  rule: 'isRequired', rule: 'isEmail'
                          }
                        ]}
                        invalidClassName='ui-input_state_custom-error-classname'
                        name='emailid'
                        type='email'  />
                        </div>
                </div> 
                <div class={"form-group"}>
                 <label class={"col-xs-3 control-label"}></label>
 					<div class={"col-xs-6"}>
 					<Validation.Button blocking='button' value='Reterive'   class='btn btn-primary' />
 					</div>
 				</div>
                 </Validation.Form> 
          </Modal> 
        </div>
    );
  }
}
