import React from "react"
import Weather from "./Weather.js"
import SectionCard from "./SectionCard.js"
import GoogleMap from "./GoogleMap.js"
import Radium from 'radium'
import $ from "jquery";

const WeatherComponent = Radium(Weather)
const SectionCardComponent = Radium(SectionCard)
const GoogleMapComponent = Radium(GoogleMap)

const styles = {
    wrapperBackground: {
      widht: '100vw',
      height: '100vh',
      zIndex: -1000
    },
    backgroundWrapper: {
      position: 'fixed',
      top: '-50%',
      left: '-50%',
      width: '200%',
      height: '200%'
    },
    backgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      margin: 'auto',
      minWidth: '50%',
      minHeight: '50%'
    },
    homeWrapper: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: '10px',
      marginBottom: '10px',
      overflowX: 'hidden',
      overflowy: 'hidden'
    },
    sectionsWrapper: {
      display: 'flex',
      flexDirection: 'row',
      marginLeft: '20px',
      marginRight: '20px'
    }
}

export default class Home extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      index: 0,
      images: [
        '/media/cover1.jpg',
        '/media/cover2.jpg',
        '/media/cover3.jpg'
      ]
    }

    this.changeImage = this.changeImage.bind(this)
  }

  componentDidMount () {
    setInterval(this.changeImage, 10000)
  }

  changeImage () {
    const newIndex = (this.state.index + 1 < this.state.images.length) ? this.state.index + 1 : 0
    this.setState({
      index: newIndex
    })

    console.log(this.state.images[this.state.index], 'SKFJ SALK ')
    const image = this.state.images[this.state.index]
    $('.block').fadeOut(1000, function() {
      $(this).attr('src', image)
      $(this).fadeIn(1000)
    })
  }

  render () {
    return (
      <div className="page-home" style={styles.homeWrapper}>
        <div style={styles.backgroundWrapper}>
          <img className='block' src='/media/cover2.jpg' style={styles.backgroundImage}/>
        </div>
        <WeatherComponent />
        <div>
          <div style={styles.sectionsWrapper}>
            <SectionCardComponent />
            <SectionCardComponent />
          </div>
          <div>
            <GoogleMapComponent />
          </div>
          <div style={styles.sectionsWrapper}>
            <SectionCardComponent />
            <SectionCardComponent />
          </div>
        </div>
      </div>
    )
  }
}
