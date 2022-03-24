import mapboxGl from "mapbox-gl";
import React, { Component } from "react";
import { mapboxGlAccessToken } from "./secret";

export class Map extends Component {
  map = null;
  mapContainer = React.createRef();

  componentDidMount() {
    mapboxGl.accessToken = mapboxGlAccessToken;

    this.map = new mapboxGl.Map({
      container: this.mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v9",
      center: [30.3056504, 59.9429126], // LED
      zoom: 10,
    });
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    return (
      <div className="map-wrapper">
        <div data-testid="map" className="map" ref={this.mapContainer}>
          Map
        </div>
      </div>
    );
  }
}
