const styles = theme => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper,
	},
	tabsRoot: {
		borderBottom: '1px solid #e8e8e8',
	},
	tabsIndicator: {
		backgroundColor: '#fbfbff',
	},
	tabRoot: {
		textTransform: 'initial',
		minWidth: 72,
		fontWeight: theme.typography.fontWeightRegular,
		marginRight: theme.spacing.unit * 4,
		fontFamily: [
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(','),
		'&:hover': {
			color: '#ff3642',
			opacity: 2,
		},
		'&$tabSelected': {
			color: '#ff3642',
			fontWeight: theme.typography.fontWeightMedium,
			backgroundColor: '#fff',
			borderTopLeftRadius: 30,
			borderTopRightRadius: 30
		},
		'&:focus': {
			color: '#ff3642',
		},
	},
	tabSelected: {},
	typography: {
		padding: theme.spacing.unit * 3,
	},
});

export default styles;