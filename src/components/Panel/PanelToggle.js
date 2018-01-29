import React from 'react';
import panels from './Panel.scss';

const PanelToggle = (props) => {
    return (
        <span onClick={props.toggleDetails} className={panels.toggleBtn}>{props.isToggleOn ? 'HIDE' : 'SHOW'} 
            <span className={'fa fa-chevron-' + props.arrowIcon + " " + panels.glyphicon} aria-hidden="true"></span>
        </span>
    );
}

export default PanelToggle;
