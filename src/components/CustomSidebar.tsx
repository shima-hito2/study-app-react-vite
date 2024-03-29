import { Box, List } from '@mui/material'
import React from 'react'
import MainListItems from './SideListItems'
import { styled } from '@mui/material/styles'
import MuiDrawer from '@mui/material/Drawer'

const drawerWidth = 280

const Drawer = styled(MuiDrawer, {
	shouldForwardProp: prop => prop !== 'open'
})(({ theme, open }) => ({
	'& .MuiDrawer-paper': {
		position: 'relative',
		whiteSpace: 'nowrap',
		width: drawerWidth,
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen
		}),
		boxSizing: 'border-box',
		...(!open && {
			overflowX: 'hidden',
			transition: theme.transitions.create('width', {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen
			}),
			width: theme.spacing(7),
			[theme.breakpoints.up('sm')]: {
				width: theme.spacing(9)
			}
		})
	}
}))

const CustomSidebar = props => {
	return (
		<>
			<Drawer
				variant='permanent'
				sx={{
					flexShrink: 0
					// [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
				}}
				open={props.open}
			>
				<List component='nav'>
					<MainListItems />
				</List>
			</Drawer>
			<Box
				component='main'
				sx={{
					backgroundColor: theme =>
						theme.palette.mode === 'light'
							? theme.palette.grey[100]
							: theme.palette.grey[900],
					flexGrow: 1,
					height: 'calc(100vh - 64px)',
					overflow: 'auto'
				}}
			/>
		</>
	)
}

export default CustomSidebar
