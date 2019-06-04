import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Link } from "react-router-dom";
import Sticky from 'react-stickynode';

import {withRouter} from 'react-router-dom';

import HotelRow from "./HotelRow";
import SubHeader from "../elements/SubHeader";
import ShowMore from "../elements/ShowMore";


import {hotels} from '../constants';

class SelectHotel extends Component{

  constructor(props) {
    super(props);

    this.onSelect = this.onSelect.bind(this);

    this.hotels = hotels;
  }

 
  onSelect( price ){
    this.props.updateTotal( price );
    this.props.history.push("/step/outbound");
  }

    render() {

        return (
          <div>

          <SubHeader step={1} price={this.props.totalPrice} />


          <div className="container">

            
            <h1 ref="hugeh1" className="huge text-center">Choose your hotel in Paris</h1>
            <p className="subH1 text-center"><Link to="/step/inbound">continue without a hotel</Link></p>
  

            {
              this.hotels.map( (hotel) => <HotelRow key={hotel.id} onSelect={this.onSelect} {...hotel} /> )
            }

            {/* }
            <HotelRow price={0}    onSelect={this.onSelect} />
            <HotelRow price={76}   onSelect={this.onSelect} />
            <HotelRow price={142}  onSelect={this.onSelect} showSaveExtra={true} />
            <HotelRow price={109}  onSelect={this.onSelect}/>
            <HotelRow price={212}  onSelect={this.onSelect} showSaveExtra={true} />
            {*/}

            <ShowMore />

          </div>
          </div>
        );

    }
}

export default withRouter(SelectHotel);