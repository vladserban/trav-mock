import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Link } from "react-router-dom";
import Sticky from 'react-stickynode';

import HotelRow from './HotelRow';
import FlightRow from './FlightRow';
import SelectedItemTopBar from "../elements/SelectedItemTopBar";

import SubHeader from "../elements/SubHeader";
import ShowMore from "../elements/ShowMore";


import {flights} from '../constants';


class SelectFlight extends Component{
    constructor(props) {
      super(props);


      console.log('SelectFlight PROPS=', props);

      let urlParts = this.props.location.pathname.split('/'); 
      let flightLeg = urlParts[ urlParts.length - 1 ];

      this.state = {
        selectedOutbound: (flightLeg == 'inbound' ? true : false)
      };

    }

    handleSelectFlight() {

      //this.props.onSelectFlight(flightLeg);

    }

    // componentDidUpdate() {
    //   this.scrollToRef('hugeh1');
    // }
  
    // scrollToRef( theRef ){
    //   const refElement = ReactDOM.findDOMNode(this.refs.theRef);
    //   window.scrollTo(0, refElement.offsetTop+50);
    // }

    render() {

        
        console.log('FLIGHTS array=', flights);

        let flightType = this.state.selectedOutbound ? 'Inbound' : 'Outbound';

        return (

          <div>

          <SubHeader step={2} price={this.props.totalPrice} />


          <div className="container">

            
            <SelectedItemTopBar isFor="Hotel" />
            <HotelRow marginTop="no" cta={false} price={0} />

            {
              this.state.selectedOutbound && 
              (
                <div>
                  <SelectedItemTopBar isFor="Flight" flightType="Outbound" />
                  <FlightRow marginTop="no" included={true} cta={false} flightType="outbound" flightData={flights[0]} />
                </div>
              )
            }


            <div className="spacer" />
            <h1 ref="hugeh1" className="huge text-center">Choose {flightType} flight | Tel Aviv - Paris</h1>
            <p className="tiny underline text-center"><a href="#">continue without a flight</a></p>
  

            { flights.map( (flightData, index) => {
                if(this.state.selectedOutbound && flightData.id == 1) return;
              
                let forceZeroPrice = (index == 1 && this.state.selectedOutbound);
                
                return  <FlightRow key={flightData.id} forceZeroPrice={forceZeroPrice}  flightType={flightType} flightData={flightData} onSelectFlight={this.handleSelectFlight} />
             } ) }

            {/* 
            <FlightRow included={true} flightType={flightType} />
            <FlightRow flightType={flightType} />
            <FlightRow flightType={flightType} />
            <FlightRow flightType={flightType} />
            <FlightRow flightType={flightType} />
            */}

            <ShowMore />

          </div>
          </div>
        );

    }
}




export default SelectFlight;