import React from "react";
import { lightPurple, darkPurple, mediumPurple, white, black } from '../constants/colors'

const styles = {
	sectionCard: {
		boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    transition: '0.3s',
		":active": {
			boxShadow: '0 10px 25px 0 rgba(0,0,0,0.5)'
		},
		backgroundColor: white,
		borderRadius: '5px',
		width: '30vw',
		height: '23vh',
		padding: '10px',
		color: darkPurple,
		marginLeft: '10px',
		marginRight: '10px',
		marginBottom: '2.5vh',
		opacity: 0.9,
		display: 'flex',
		flexDirection: 'column'
	},
	title: {
		color: black,
		marginLeft: '20px',
		fontSize: '24px'
	},
	subTitle: {
		color: black,
		marginTop: '20px',
		marginLeft: '20px',
	},
	sectionIcon: {
		width: '40px',
		height: '40px',
		marginLeft: '20px'
	},
	topContent: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: '10px',
	}
}

// Home page component
export default class SectionCard extends React.Component {
  // render
  render() {
    return (
			<div style={styles.sectionCard}>
				<div style={styles.topContent}>
					<div style={styles.weatherImageWrapper}>
						<img src='/media/icon.jpg' style={styles.sectionIcon}/>
					</div>
					<div style={styles.title}>ASAN Service</div>
				</div>
				<div style={styles.subTitle}>ASAN service is a state agency for government services to citizens in Azerbaijan</div>
      </div>
    )
  }
}
