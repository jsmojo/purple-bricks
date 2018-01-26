import React from 'react';
import styles from './NotificationFeed.scss';

const NotificationFeed = () => {
    return (
        <div className={styles.NotificationFeed + " " + styles.warning}>
            <p><strong>Status:</strong> Withdrawn</p>
        </div>
    );
}

export default NotificationFeed;
