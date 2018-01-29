import React from 'react';
import panels from './Panel.scss';
import PanelToggle from './PanelToggle';

class Panel extends React.Component {

    constructor(props) {
        super(props);
        
        if(props.toggleBody) {
            this.state = {isToggleOn: true, toggleBody: props.toggleBody};
            this.toggleDetails = this.toggleDetails.bind(this);
        }
    }

    toggleDetails(e) {
        e.preventDefault();
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render () {
        let toggleControls = null;
        let toggleData = panels.active;
        let arrowIcon = 'down';

        if(this.props.toggleBody) {

            if(this.state.isToggleOn) {
                toggleData = '';
                arrowIcon = 'up';
            }

            toggleControls = <PanelToggle isToggleOn={this.state.isToggleOn} 
                                          arrowIcon={arrowIcon} 
                                          toggleDetails={this.toggleDetails} />

        }
        else {
            toggleData = '';
        }

        return (
            <div className={panels.pbPanel + " " + panels[this.props.panelColor]}>
                <div className={panels['pbPanel-heading']}>
                    <div className={panels.title}>{this.props.header}
                            {toggleControls}
                    </div>
                </div>
                <div className={panels['pbPanel-body'] + " " + panels['toggle-body'] + " " + toggleData}>
                    {this.props.content}
                </div>
            </div>
        );
    }

}

export default Panel;
