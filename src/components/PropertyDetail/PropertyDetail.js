import React from 'react';
import styles from './PropertyDetail.scss';
import buttons from '../../styles/partials/buttons.scss';

const PropertyDetail = () => {
    return (
        <div className={styles.PropertyDetail}> 
            <div className={styles.addressContainer}>
                <div className={styles.addressInfo}>
                    <img src={require('../../images/house.jpg')}  alt="" />
                    <div className={styles.street}>Eddington House, 16 Wigginton Road, Tamworth, B79 8PB</div>
                </div>
                <div className={styles.priceInfo}>
                    <div className={styles.title}>Asking price:</div>
                    <div className={styles.price}>$189,950</div>
                    <div className={"btn " + buttons['btn-pb']}>VIEW EXTRAS INCLUDED</div>
                </div>
                </div>
        </div>
    );
}

export default PropertyDetail;
