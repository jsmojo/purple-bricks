import React from 'react';
import styles from './YourResponse.scss';
import panels from '../../styles/partials/pbPanel.scss';
import buttons from '../../styles/partials/buttons.scss';

const YourResponse = () => {
    return (
        <div className={styles.YourResponse + " " + panels.pbPanel + " " + panels['pbPanel-important']}>
            <div className={panels['pbPanel-heading']}>
                <div className={panels.title}>Your Response</div>
            </div>
            <div className={panels['pbPanel-body']}>
                <div className={styles.content}>
                    <div className={styles.message}>You have withdrawn your acceptance of the offer</div>
                    <div className={styles.actions}>
                        <div className={"btn " + styles.btn + " " +  buttons['btn-pb']}>VIEW COMMENTS</div>
                        <div className={styles.dateInfo}>Date: 24/10/2013 Time: 21:05</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default YourResponse;
