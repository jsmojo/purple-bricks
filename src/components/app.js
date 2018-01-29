import React, { Component } from 'react';
import Header from './Header/header';
import NotificationFeed from './NotificationFeed/NotificationFeed';
import PropertyDetail from './PropertyDetail/PropertyDetail';
import BuyersDetail from './BuyersDetail/BuyersDetail';
import BuyersOffer from './BuyersOffer/BuyersOffer';
import YourResponse from './YourResponse/YourResponse';
import Negotiations from './Negotiations/Negotiations';
import Panel from './Panel/Panel';

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
                        <Panel header="The Property" toggleBody={false} panelColor="pbPanel-blue" content={<PropertyDetail />} />
                    </div>
                    <div className="col-sm-12">
                        <Panel header="Buyer's details" toggleBody={true} panelColor="" content={<BuyersDetail />} />
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <Panel header="Buyer's Offer" toggleBody={false} panelColor="" content={<BuyersOffer />} />
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <Panel header="Your Response" toggleBody={false} panelColor="pbPanel-important" content={<YourResponse />} />
                    </div>
                    <div className="col-sm-12">
                        <Panel header="Re-open negotiations" toggleBody={false} panelColor="pbPanel-blue" content={<Negotiations />} />
                    </div>
                </div>
            </div>   
    );
  }
}

export default App;
