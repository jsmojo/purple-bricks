import React from 'react';
import styles from './Negotiations.scss';
import buttons from '../../styles/partials/buttons.scss';

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
            this.setState({offerAmount: ''});
            let updatedOfferInfo = Object.assign({}, this.state.offerInfo, {offer: this.state.offerAmount});  
            this.setState({offerInfo: updatedOfferInfo}, () => {
                console.log(this.state.offerInfo);
            });
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
        <div className={styles.Negotiations}>
            <div className={styles.callExpert}>
                <div className={styles.message}>Would you like your Expert, Robert White, to negotiate on your behalf? It's completely free!</div>
                <div className={styles.btnContainer}>
                    <div className={"btn " + buttons['btn-pb'] + " " + buttons['pb-blue']}>NEGOTIATE FOR ME</div>
                </div>
            </div>
            <div className={styles.enterOffer}>
                <div className={styles.title}>Enter an offer you would be willing to accept:</div>
                <div style={{display: this.state.showError ? 'block' : 'none' }}>
                    <span className={styles.errorMessage}>{this.state.showError}</span>
                </div>
                <div className={styles.currencyContainer}>
                    <span className={styles.currency}>$</span>
                    <input  type="text" 
                            pattern="[0-9]*"
                            className={"form-control " + styles['form-control']} 
                            value={offerAmount}
                            onChange={this.handleChange} />
                    <div className={"btn " + styles.btn + " " +  buttons['btn-pb'] + " " + buttons['pb-blue']}>ADD COMMENTS</div>
                </div>
                <div className={styles.submitContainer}>
                    
                    <button type="button" onClick={this.onSubmit} className={"btn "  + buttons['btn-pb'] + " " + buttons['pb-sky']}>SUBMIT OFFER</button>
                </div>
            </div>
        </div>
        );
    }
}

export default Negotiations;
