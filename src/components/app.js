import React, { Component } from 'react';
import Header from './Header/header';
import NotificationFeed from './NotificationFeed/NotificationFeed';
import PropertyDetail from './PropertyDetail/PropertyDetail';
import BuyersDetail from './BuyersDetail/BuyersDetail';
import BuyersOffer from './BuyersOffer/BuyersOffer';
import YourResponse from './YourResponse/YourResponse';
import Negotiations from './Negotiations/Negotiations';

import styles from './app.scss';

class App extends Component {
  render() {
    return (
      <div className={"container-fluid "+ styles.main + " " + styles['container-fluid']}>
                <div className={"row " + styles['no-gutters'] }>
                    <div className="col-sm-12">
                        <Header />
                    </div>
                </div>
                <div className={"row " + styles.mainContent}>
                    <div className="col-sm-12">
                        <NotificationFeed />
                    </div>
                    <div className="col-sm-12">
                        <PropertyDetail />
                    </div>
                    <div className="col-sm-12">
                        <BuyersDetail />
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <BuyersOffer />
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <YourResponse />
                    </div>
                    <div className="col-sm-12">
                        <Negotiations />
                    </div>
                </div>
            </div>   
    );
  }
}

export default App;
