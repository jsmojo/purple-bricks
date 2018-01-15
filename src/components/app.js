import React from 'react';
import Header from './Header/header';
import PropertyDetail from './PropertyDetail/PropertyDetail';
import BuyersDetail from './BuyersDetail/BuyersDetail';
import BuyersOffer from './BuyersOffer/BuyersOffer';
import YourResponse from './YourResponse/YourResponse';
import Negotiations from './Negotiations/Negotiations';

class App extends React.Component {
    render () {
        return (
            <div className="main container-fluid">
                <div className="row no-gutters">
                    <div className="col-xs-12">
                        <Header />
                    </div>
                </div>
                <div className="mainContent row">
                    <div className="col-xs-12">
                        <PropertyDetail />
                    </div>
                    <div className="col-xs-12">
                        <BuyersDetail />
                    </div>
                    <div className="col-xs-12 col-sm-6">
                        <BuyersOffer />
                    </div>
                    <div className="col-xs-12 col-sm-6">
                        <YourResponse />
                    </div>
                    <div className="col-xs-12">
                        <Negotiations />
                    </div>
                </div>
            </div>
                
                
                
                
                
        );
    }
}

export default App;