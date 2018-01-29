import React from 'react';
import styles from './BuyersDetail.scss';

class BuyersDetail extends React.Component {

    render() {
        
        return (
        <div className={styles.BuyersDetail}>
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
        );
    }
}

export default BuyersDetail;
