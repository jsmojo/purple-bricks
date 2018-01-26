import React from 'react';
import styles from './header.scss';

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles['header-inner']}>
                <div className={styles.logo}><img src={require('../../images/logo.jpg')} alt="eZie systems"/></div>
                <div className={styles.pageTitle}>Secure negotiation centre</div>
            </div>
        </div>
    );
}

export default Header;
