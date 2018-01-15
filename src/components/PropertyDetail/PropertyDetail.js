import React from 'react';

const PropertyDetail = () => {
    return (
        <div className="PropertyDetail pbPanel pbPanel-blue">
            <div className="pbPanel-heading">
                <div className="title">The property</div>
            </div>
            <div className="pbPanel-body">
                <div className="addressContainer">
                    <div className="addressInfo">
                        <img src={require('../../images/house.jpg')}  alt="" />
                        <div className="street">Eddington House, 16 Wigginton Road, Tamworth, B79 8PB</div>
                    </div>
                    <div className="priceInfo">
                        <div className="title">Asking price:</div>
                        <div className="price">$189,950</div>
                        <div className="btn btn-pb">VIEW EXTRAS INCLUDED</div>
                    </div>
                 </div>
            </div>
        </div>
    );
}

export default PropertyDetail;
