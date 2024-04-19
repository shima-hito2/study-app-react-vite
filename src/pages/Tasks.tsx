import { Box, ListItemButton, ListItemText } from '@mui/material'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Loading from '../components/Loading'

const Tasks = () => {
	const params = useParams()
	const subjectId = params.subjectId ?? ''
	const [title, setTitle] = useState('')
	const [isLoading, setIsLoading] = useState(false)
	const [taskList, setTaskList] = useState<{ id: string, title: string }[]>([])

	const color = import.meta.env.VITE_APP_BACK_COLOR
	const url = import.meta.env.VITE_APP_URL

	useEffect(() => {
		(async () => {
			setIsLoading(true)
			const formData = new FormData()
			formData.append('id', subjectId)
			const resSub = await fetch(
				`${url}getSubjectById?id=${subjectId}`
			)
			const dataSub = await resSub.json()
			console.log(dataSub)

			const resTask = await fetch(
				`${url}getTasksBySubjectId?id=${subjectId}`
			)
			const dataTask = await resTask.json()
			console.log(dataTask)
			setTitle(dataSub.name)
			setTaskList(dataTask)
			setIsLoading(false)
		})()
	}, [subjectId])

	return (
		<Box
			sx={{
				width: '100%',
				pr: 30,
				backgroundColor: color,
				position: 'relative'
			}}
		>
			{isLoading ? <Loading /> : ''}
			<Box sx={{ mx: 4, my: 4 }}>
				<Box fontSize='h4.fontSize' fontStyle='normal'>
					{`${title}コース一覧`}
				</Box>
				{taskList.map(row => (
					// <Box key={row.id}>{row.title}</Box>
					<ListItemButton
						sx={{
							pr: 8,
							backgroundColor: '#fff'
							// border: 'solid 1px #000'
						}}
						component={Link}
						to={`/task/${subjectId}/detail/${row.id}`}
						key={row.id}
					>
						<ListItemText primary={row.title} />
					</ListItemButton>
				))}
			</Box>
		</Box>
	)
}

export default Tasks
