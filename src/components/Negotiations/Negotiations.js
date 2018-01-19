import React, {PropTypes} from 'react';

class Negotiations extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            offerAmount: '',
            offerInfo: {
                name: 'Mr. David Shepherd',
                property: 'Eddington House, 16 Wigginton Road, Tamworth, B79 8PB',
                offer: ''
            },
            showError: ''
        };
    
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    
    onSubmit(e) {
        e.preventDefault();
        if(this.state.offerAmount.length > 0) {
            this.setState({showError: ''});
            this.state.offerInfo.offer = this.state.offerAmount;
            this.setState({offerAmount: ''});
            console.log(this.state.offerInfo);
        }
        else {
            this.setState({showError: 'Please enter an offer amount.'});
        } 
    }
    handleChange(e) {
        this.setState({showError: ''});
        let displayOffer = '';
        let numbers = '0123456789';
        let offer = e.target.value;

        for (let i = 0; i < offer.length; i++) {
            if ( numbers.indexOf(offer[i]) > -1 ) {
                displayOffer = displayOffer + offer[i];
            }
        }
          
        displayOffer = displayOffer.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        this.setState({offerAmount: displayOffer});
    }
    render() {
        const offerAmount = this.state.offerAmount;
        return (
        <div className="Negotiations pbPanel pbPanel-blue">
            <div className="pbPanel-heading">
                <div className="title">Re-open negotiations</div>
            </div>
            <div className="pbPanel-body">
                <div className="callExpert">
                    <div className="message">Would you like your Expert, Robert White, to negotiate on your behalf? It's completely free!</div>
                    <div className="btnContainer">
                        <div className="btn btn-pb pb-blue">NEGOTIATE FOR ME</div>
                    </div>
                </div>
                <div className="enterOffer">
                    <div className="title">Enter an offer you would be willing to accept:</div>
                    <div className="currencyContainer">
                        <span className="currency">$</span>
                        <input  type="text" 
                                pattern="[0-9]*"
                                className="form-control" 
                                value={offerAmount}
                                onChange={this.handleChange} />
                        <div className="btn btn-pb pb-blue">ADD COMMENTS</div>
                    </div>
                    <div className="submitContainer">
                        <span className="errorMessage">{this.state.showError}</span>
                        <button type="button" onClick={this.onSubmit} className="btn btn-pb pb-sky">SUBMIT OFFER</button>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Negotiations;
