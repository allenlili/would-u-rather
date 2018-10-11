const styles = theme => ({
	root: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		position: 'relative',
		padding: '10px',
		height: '470px',
	},
	paper: {
		width: '400px',
	},
	pollHeader: {
		textAlign: 'center',
		lineHeight: '60px',
		height: '60px',
		borderBottom: '1px solid #4ab058',
		backgroundColor: '#4ab058',
		color: '#fff',
		fontWeight: 'bold',
		fontSize: '20px',
		padding: '5px'
	},
	pollContent: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
	},
	text: {
		color: 'black', fontWeight: 'bold', fontSize: '20px', paddingTop: '20px', width: '80%', textAlign: 'center'
	},
	input: {
		margin: '10px',
		width: '80%'
	},
	close: {
		width: theme.spacing.unit * 4,
		height: theme.spacing.unit * 4,
	},
});

export default styles;