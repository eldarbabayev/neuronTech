import React from "react"
import { lightPurple, darkPurple, mediumPurple, white } from '../constants/colors'
import WeatherRow from "./WeatherRow.js"
import GoogleMapReact from 'google-map-react'

const styles = {
	mapCard: {
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    transition: '0.3s',
		backgroundColor: white,
		borderRadius: '5px',
		width: '62vw',
		height: '45vh',
		padding: '10px',
    marginLeft: '30px',
    marginBottom: '2.5vh',
		color: darkPurple,
    opacity: 0.9
	}
}

export default class GoogleMap extends React.Component {
  // render
  render () {
    return (
      <div style={styles.mapCard}>
        <GoogleMapReact
          center={[40.4093, 49.8671]}
          zoom={9}>
        </GoogleMapReact>
			</div>
    )
  }
}
