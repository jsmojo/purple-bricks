import React from 'react';
import styles from './BuyersDetail.scss';
import panels from '../../styles/partials/pbPanel.scss';

class BuyersDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
        // This binding is necessary to make `this` work in the callback
        this.toggleDetails = this.toggleDetails.bind(this);
    }

    toggleDetails(e) {
        e.preventDefault();
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        let toggleData = styles.active;//'active';
        let arrowIcon = 'down';
        if(this.state.isToggleOn) {
            toggleData = '';
            arrowIcon = 'up';
        }
        return (
        <div className={panels.pbPanel + " " + styles.BuyersDetail}>
            <div className={panels['pbPanel-heading']}>
                <div className={panels.title}>Buyer's details
                    <span onClick={this.toggleDetails} className={styles.toggleBtn}>{this.state.isToggleOn ? 'HIDE' : 'SHOW'} 
                        <span className={'fa fa-chevron-' + arrowIcon + " " + styles.glyphicon} aria-hidden="true"></span>
                    </span>
                </div>
                
            </div>
            <div className={panels['pbPanel-body'] + " " + styles['toggle-body'] + " " + toggleData}>
                <div className={styles['topic-container']}>
                    <span className={styles['topic']}>Name:</span>
                    <span className={styles['topic-detail']}>Mr David Shepherd</span>
                </div>
                <div className={styles['topic-container']}>
                    <span className={styles['topic']}>Buying position:</span>
                    <span className={styles['topic-detail']}>Property to sell - 20 weeks on the market</span>
                </div>
                <div className={styles['topic-container']}>
                    <span className={styles['topic']}>Financial position:</span>
                    <span className={styles['topic-detail']}>Mortgage required - approved</span>
                </div>
                <div className={styles['topic-container']}>
                    <span className={styles['topic']}>Timescale:</span>
                    <span className={styles['topic-detail']}>Would like to move in 10 weeks - no chain</span>
                </div>
            </div>
        </div>
        );
    }
}

export default BuyersDetail;
