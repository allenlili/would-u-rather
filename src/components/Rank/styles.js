const styles = (theme) => ({
	root: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		padding: '10px',
	},
	paper: {
		width: '600px',
		height: '150px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: '25px',
		paddingBottom: '25px',
		backgroundColor: '#fff'
	},
	avatar: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		width: '25%',
		height: '100%',
		borderRight: '3px solid rgba(74, 176, 88, .5)',
	},
	details: {
		width: '50%',
		height: '100%',
		color: '#47b15e',
		borderRight: '3px solid rgba(74, 176, 88, .5)',
		marginLeft: '10px',
		paddingRight: '5px'
	},
	text: {
		display: 'flex',
		width: '100%',
	},
	score: {
		width: '25%',
		height: '100%',
		color: '#47b15e',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		display: 'flex'
	},
	scoreArea: {
		width: '80%',
		height: '100%',
		margin: '0 auto',
		border: '1px solid #47b15e'
	},
	scoreText: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		display: 'flex',
		height: '30%',
		borderBottom: '1px solid #47b15e',
		color: '#fff',
		backgroundColor: '#47b15e'
	},
	scoreDigit: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		display: 'flex',
		height: '70%'
	},
	circleDigitArea: {
		width: '20%',
		height: '20%',
		borderRadius: '50%',
		color: '#fff',
		backgroundColor: '#47b15e',
		padding: '20%',
		textAlign: 'center'
	},
	box: {
		backgroundColor: '#3498DB',
		borderCornerShape: 'curve',
		borderRadius: '50% 0 0 0',
		width: '200px',
		height: '200px'
	},
	triangle: {
		position: 'relative',
		top: '-10px',
		left: '-10px',
		height: '0px',
		width: '0px',
		borderLeft: '10px solid red',
		borderRight: '10px solid transparent',
		borderTop: '10px solid red',
		borderBottom: '10px solid transparent',
	},
	// ':root': {
	// 	'--r': '2em'
	// },
	// box: {
	// 	position: 'relative',
	// 	minWidth: '15em',
	// 	maxWidth: '15em',
	// 	minHeight: '10em',
	// 	outline: '2px solid',
	// 	overflow: 'hidden',
	// 	'&::before': {
	// 		content: '»',
	// 		position: 'absolute',
	// 		padding: 'var(--r)',
	// 		boxShadow: '0 0 7px #b53',
	// 		background: '#95a',
	// 		margin: 'calc(var(--r) * -1)',
	// 		borderRadius: '50%'
	// 	}
	// },
});

export default styles;