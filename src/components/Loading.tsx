import { Box } from '@mui/material'
import React from 'react'
import CircularProgress from '@mui/material/CircularProgress'

const Loading = prop => {
	return (
		<Box
			sx={{
				position: 'absolute',
				backgroundColor: '#ffffff80',
				width: '100%',
				height: '100%',
				zIndex: '100'
			}}
		>
			<CircularProgress
				sx={{
					position: 'relative',
					top: 'calc(50% - 70px)',
					left: 'calc(50% - 70px)',
					width: '100%',
					height: '100%'
				}}
				size={100}
			/>
		</Box>
	)
}

export default Loading
