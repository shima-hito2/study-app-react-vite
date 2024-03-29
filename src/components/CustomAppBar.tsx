import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { CssBaseline } from '@mui/material'

type Props = {
	toggleDrawer: () => void
	title: string
}

const CustomAppBar = (props: Props) => {
	return (
		<Box sx={{ flexGrow: 1, height: 64 }}>
			<CssBaseline />
			<AppBar
				position='fixed'
				sx={{
					color: '#e0f2f1',
					backgroundColor: '#323942',
					boxShadow: 'none',
					zIndex: theme => theme.zIndex.drawer + 1
				}}
			>
				<Toolbar>
					<IconButton
						size='large'
						edge='start'
						color='inherit'
						aria-label='menu'
						onClick={props.toggleDrawer}
						sx={{ mr: 2 }}
					>
						<MenuIcon />
					</IconButton>
					<Typography
						variant='h6'
						component='div'
						sx={{ flexGrow: 1 }}
					>
						{props.title}
					</Typography>
				</Toolbar>
			</AppBar>
		</Box>
	)
}
export default CustomAppBar
