import React, {PropTypes} from 'react';

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
        let toggleData = 'active';
        let arrowIcon = 'down';
        if(this.state.isToggleOn) {
            toggleData = '';
            arrowIcon = 'up';
        }
        return (
        <div className="BuyersDetail pbPanel pbPanel-blueGray">
            <div className="pbPanel-heading">
                <div className="title">Buyer's details
                    <span onClick={this.toggleDetails} className="toggleBtn">{this.state.isToggleOn ? 'HIDE' : 'SHOW'} 
                        <span className={'glyphicon glyphicon-chevron-' + arrowIcon} aria-hidden="true"></span>
                    </span>
                </div>
                
            </div>
            <div className={'pbPanel-body ' + toggleData}>
                <div className="topic-container">
                    <span className="topic">Name:</span>
                    <span className="topic-detail">Mr David Shepherd</span>
                </div>
                <div className="topic-container">
                    <span className="topic">Buying position:</span>
                    <span className="topic-detail">Property to sell - 20 weeks on the market</span>
                </div>
                <div className="topic-container">
                    <span className="topic">Financial position:</span>
                    <span className="topic-detail">Mortgage required - approved</span>
                </div>
                <div className="topic-container">
                    <span className="topic">Timescale:</span>
                    <span className="topic-detail">Would like to move in 10 weeks - no chain</span>
                </div>
            </div>
        </div>
        );
    }
}

export default BuyersDetail;
