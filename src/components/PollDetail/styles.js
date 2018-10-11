const styles = theme => ({
	root: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		color: '#368e43',
		position: 'relative',
		padding: '50px',
	},
	paper: {
		flexGrow: 1,
		border: '8px dashed #368e43',
		height: '100%',
		width: '500px'
	},
	pollHeader: {
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center',
		borderBottom: '8px dashed #368e43',
		height: '20%',
		padding: '8px 8px 8px 5px',
		fontSize: '20px',
		fontWeight: 'bold'
	},
	pollContent: {
		display: 'flex',
		height: '80%',
		fontSize: '30px',
	},
	avatarArea: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: '30%',
		borderRight: '8px dashed #368e43',
		padding: '10px'
	},
	bigAvatar: {
		border: '8px dashed #368e43',
		width: 120,
		height: 120,
	},
	questionArea: {
		width: '70%',
	},
	progress: {
		top: '60%',
		left: '50%',
		margin: theme.spacing.unit * 2,
	},
	formControl: {
		margin: theme.spacing.unit * 2,
	},
	group: {
		margin: `${theme.spacing.unit}px 0`,
	},
	label: {
		color: 'green',
		fontSize: '20px',
	},
	option: {
		width: '90%',
		marginLeft: 'auto',
		marginRight: 'auto',
		marginTop: '10px',
		marginBottom: '10px',
		border: '1px dashed #368e43'
	},
	backBtn: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		marginBottom: '10px',
	},
	answerText: {
		margin: '20px',
		color: 'green',
		fontSize: '15px',
	},
	container: {
		width: '100%',
		backgroundColor: '#ddd'
	},
	votes: {
		textAlign: 'right',
		paddingRight: '0px',
		lineHeight: '30px',
		color: 'white'
	},
	mark: {
		width: '20%',
		height: '20px',
		background: '#3cf',
		lineHeight: '20px',
		fontSize: '10px',
		color: '#FFFFFF',
		textAlign: 'center',
		fontWeight: 'bold'
	},
	optionRemarks: {
		textAlign: 'center',
		fontSize: '15px'
	}
});

export default styles;