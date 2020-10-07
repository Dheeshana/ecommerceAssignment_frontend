import React, {Component} from "react";
import axios from 'axios';

class Login extends Component{
   constructor(props) {
       super(props);

       this.onChageEmail = this.onChageEmail.bind(this);
       this.onChangePassword = this.onChangePassword.bind(this);
       this.onSubmit = this.onSubmit.bind(this);

       this.state = {
           email : '',
           password: '',
           users: [],
           checkMail: ''
       }
   }

   onChageEmail(e){
       this.setState({
           email : e.target.value
       });
   }

   onChangePassword(e){
       this.setState({
           password : e.target.value
       });
   }

   onSubmit(e){
       e.preventDefault();

       axios.get('http://localhost:5000/users')
           .then(response => {
               if(response.data.length > 0 ){
                   this.setState({
                       users : response.data.map(users => users.email),
                       checkMail : response.data[0].email

                   })
               }
           })
   }

    render() {
        return (
            <div className="container">
                <h4 className="container"> Log In</h4>
                <br/>
                    <form className="container">
                        <div className="form-group">
                            <label htmlFor="email">Email : </label>
                            <input required="true" id="email" type="email" className="form-control" onChange={this.onChageEmail}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password : </label>
                            <input required="true" id="password" type="password" className="form-control" onChange={this.onChangePassword}/>
                        </div>

                        <button className="btn btn-success">Log In</button>
                    </form>
            </div>
        );
    }
}

export default Login;
