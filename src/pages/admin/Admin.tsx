import React, { useState } from 'react'
import CustomAppBar from '../../components/CustomAppBar'
import CustomSidebar from '../../components/CustomSidebar'
// import Top from './Top'
import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'

const Admin = () => {
	const [sideBarOpen, setSideBarOpen] = useState(true)
	const toggleDrawer = () => {
		setSideBarOpen(!sideBarOpen)
	}
	return (
		<div>
			{/* <Top title="管理者画面" /> */}
			<CustomAppBar title='管理者画面' toggleDrawer={toggleDrawer} />
			<Box sx={{ display: 'flex' }}>
				<CustomSidebar open={sideBarOpen} />
				<Outlet />
				{/* ここが置き換わる */}
			</Box>
		</div>
	)
}

export default Admin
