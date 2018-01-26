import React from 'react';
import styles from './BuyersOffer.scss';
import panels from '../../styles/partials/pbPanel.scss';
import buttons from '../../styles/partials/buttons.scss';

const BuyersOffer = () => {
    return (
        <div className={styles.BuyersOffer + " " + panels.pbPanel}>
            <div className={panels['pbPanel-heading']}>
                <div className={panels.title}>Buyer's offer</div>
            </div>
            <div className={panels['pbPanel-body']}>
                <div className={styles.offer}>
                    <div className={styles.price}>$179,000</div>
                    <div className={styles.note}>Subject to offer qualification by Purplebricks</div>
                    <div className={styles.actions}>
                        <div className={"btn  " + styles.btn + " " +  buttons['btn-pb']}>VIEW COMMENTS</div>
                        <div className={styles.dateInfo}>Date: 24/10/2013 Time: 20:17</div>
                    </div>
                 </div>
            </div>
        </div>
    );
}

export default BuyersOffer;
