import React, {Component} from "react";
import axios from 'axios';

class RegistrationForm extends Component {

    constructor(props) {
        super(props);

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            email : '',
            username: '',
            password: ''
        }
    }

    onChangeEmail(e){
        this.setState({
            email : e.target.value
        });
    }

    onChangeUsername(e){
        this.setState({
            username: e.target.value
        });
    }

    onChangePassword(e){
        this.setState({
            password: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        const User = {
            email : this.state.email,
            username : this.state.username,
            password: this.state.password
        }

        axios.post('http://localhost:5000/users/add', User)
            .then(res => console.log(res.data));
    }
    render() {
        return(
            <div className={"container"} onSubmit={this.onSubmit}>
                <h4 className={"container"}>Sign Up</h4>
                <br/>
                    <form className={"container"}>
                        <div className={"form-group"}>
                            <label htmlFor="email"> Email: </label>
                            <input required="true" id="email" type="email" className={"form-control"} onChange={this.onChangeEmail}/>
                        </div>
                        <div className={"form-group"}>
                            <label htmlFor="userName"> Username</label>
                            <input required="true" id="userName" type="text" className={"form-control"} onChange={this.onChangeUsername}/>
                        </div>
                        <div className={"form-group"}>
                            <label htmlFor="password">Password</label>
                            <input required="true" id="password" type="password" className={"form-control"} onChange={this.onChangePassword}/>
                        </div>
                        <button className={"btn btn-success"}>SIGN UP</button>
                    </form>

            </div>
        );
    }
}

export default RegistrationForm;
