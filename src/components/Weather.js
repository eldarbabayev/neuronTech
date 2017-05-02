import React from "react"
import { lightPurple, darkPurple, mediumPurple, white } from '../constants/colors'
import WeatherRow from "./WeatherRow.js"

const WeatherStyles = {
	WeatherCard: {
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    transition: '0.3s',
		backgroundColor: lightPurple,
		borderRadius: '5px',
		width: '250px',
		height: '96vh',
		padding: '10px',
		color: darkPurple,
		opacity: 0.9
	},
	date: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	dayOfWeek: {
		color: white,
	},
	dayOfMonth: {
		color: darkPurple
	},
	weatherImage: {
		width: '75px',
		height: '75px',
	},
	weatherImageWrapper: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	weatherType: {

	},
	temperature: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-end'
	},
	divider: {
		backgroundColor: white,
		height: '1px',
		marginTop: '3px',
		marginBottom: '3px'
	},
	city: {
		color: white,
		paddingTop: '20px',
		paddingBottom: '20px',
		paddingLeft: '10px'
	},
	celcius: {
		fontSize: '25px'
	}
}


export default class Weather extends React.Component {
  // render
  render () {
    return (
      <div style={WeatherStyles.WeatherCard}>
      	<div>
      		<div style={WeatherStyles.date}>
						<div style={WeatherStyles.dayOfWeek}>SUNDAY</div>
						<div style={WeatherStyles.dayOfMonth}>MAY 20</div>
					</div>
      		<div>0:38</div>
      	</div>
				<div style={WeatherStyles.weatherImageWrapper}>
					<img src='/media/nature.png' style={WeatherStyles.weatherImage}/>
				</div>
				<div style={WeatherStyles.temperature}>
					<div style={WeatherStyles.celcius}>11&deg;</div>
					<div style={WeatherStyles.weatherType}>SUNNY</div>
				</div>
				<div style={WeatherStyles.divider}></div>
				<div style={WeatherStyles.city}>BAKU</div>
				<WeatherRow backgroundColor={mediumPurple} dayOfMonth={'MAY 21'} imageSrc={'media/cloud-outline.png'}/>
				<WeatherRow backgroundColor={lightPurple} dayOfMonth={'MAY 22'} imageSrc={'media/sun.png'}/>
				<WeatherRow backgroundColor={mediumPurple} dayOfMonth={'MAY 24'} imageSrc={'media/sun.png'}/>
				<WeatherRow backgroundColor={lightPurple} dayOfMonth={'MAY 25'} imageSrc={'media/sun.png'}/>
				<WeatherRow backgroundColor={mediumPurple} dayOfMonth={'MAY 26'} imageSrc={'media/cloud-outline.png'}/>
				<WeatherRow backgroundColor={lightPurple} dayOfMonth={'MAY 27'} imageSrc={'media/sun.png'}/>
				<WeatherRow backgroundColor={mediumPurple} dayOfMonth={'MAY 28'} imageSrc={'media/sun.png'}/>
			</div>
    )
  }
}
