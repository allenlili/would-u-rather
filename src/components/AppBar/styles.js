const styles = theme => ({
	root: {
		display: 'flex',
		flexGrow: 1,
		margin: theme.spacing.unit,
	},
	flex: {
		flex: 1,
		color: '#fff',
		fontSize: '20px',
	},
	button: {
		margin: theme.spacing.unit,
		color: '#fff',
	},
	signOut: {
		color: '#fff',
		backgroundColor: 'red',
		marginLeft: theme.spacing.unit * 2,
	},
	paper: {
		position: 'absolute',
		width: theme.spacing.unit * 50,
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
		padding: theme.spacing.unit * 4
	},
	chosenUser: {
		display: 'flex',
	},
	chosenUserName: {
		marginTop: theme.spacing.unit * 2,
		color: '#fff',
	},
	modal: {
		display: 'flex',
		flexDirection: 'column',
		position: 'absolute',
		boxShadow: theme.shadows[5],
		width: theme.spacing.unit * 35,
		height: '250px'
	},
	header: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		height: '20%',
		backgroundColor: '#47b15e',
		fontWeight: 'bold',
		color: '#fff',
		fontSize: '30px'
	},
	content: {
		height: '80%',
		display: 'flex',
		flexDirection: 'column',
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing.unit * 2,
	},
	confirm: {
		color: '#fff',
		height: '20%', marginTop: '10px'
	},
	selected: {
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center'
	},
	userName: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexGrow: '1',
		overflow: 'auto',
		marginLeft: '10px'
	},
	close: {
		width: theme.spacing.unit * 4,
		height: theme.spacing.unit * 4,
	},
});


export default styles;