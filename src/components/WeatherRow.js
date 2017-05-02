import React from "react"
import { lightPurple, darkPurple, mediumPurple, white } from '../constants/colors'

const WeatherRowStyles = {
	rowWrapper: {
		display: 'flex',
		flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: '10px',
    paddingLeft: '10px',
    paddingTop: '10px',
    paddingBottom: '10px'
	},
	hour: {

	},
	rowImageWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
	},
	weatherImage: {
    marginLeft: '20px',
		width: '30px',
		height: '30px'
	}
}

export default class WeatherRow extends React.Component {
  render () {
    console.log(typeof this.props.imageSrc)
    console.log(this.props.imageSrc)
    return (
  			<div style={{...WeatherRowStyles.rowWrapper, 'backgroundColor': this.props.backgroundColor}}>
  				<div style={WeatherRowStyles.hour}>
  				  {this.props.dayOfMonth}
          </div>
  				<div style={WeatherRowStyles.rowImageWrapper}>
            <div>11&deg;</div>
  					<img src={this.props.imageSrc} style={WeatherRowStyles.weatherImage}/>
  				</div>
  			</div>
  		)
  	}
  }
