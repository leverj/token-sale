import React, { PureComponent } from 'react';

export default class Countdown extends PureComponent {
    constructor(){
        super();
        this.state = {
            contactEmail: ''
        }
    }
    handleInputChange(e){
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        })
    }
    submitEmail(email){
        //will have to make it 
        this.props.history.push('/email-signup');
    }
    render(){
        return(
            <section id="countdown">
                <div className="about-card-contact center-text">
                    <h3>Presale starts on:</h3>
                    <p>October 12, 2017</p>
                    <form id="countdownForm" onSubmit={(e)=>{e.preventDefault(); this.submitEmail(this.state.contactEmail)}}>
                        <input  type="text"
                                name="contactEmail"
                                id="contactEmail"
                                value={this.state.contactName}
                                onChange={this.handleInputChange.bind(this)} 
                                placeholder="Send me email updates" />
                        <input type="submit" className="btn btn-color btn-submit" vaue="Send" />
                    </form>
                </div>
            </section>
        )
    }
}