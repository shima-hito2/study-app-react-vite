import React from 'react'
import Loading from '../components/Loading'
import { useState } from 'react'
import { Box, Tab, TextField } from '@mui/material'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { TabContext, TabList, TabPanel } from '@mui/lab'

const DetailTab = (props: { detail: string, style: string; code: string }) => {
	return (
		<>
			<Box fontSize='h6.fontSize' sx={{ whiteSpace: 'pre-line' }}>
				{props.detail}
			</Box>
			<style
				dangerouslySetInnerHTML={{
					__html: props.style
				}}
			/>
			<Box
				sx={{
					width: '100%',
					backgroundColor: '#fff',
					height: '60vh',
					overflowY: 'auto',
					border: 'solid 1px #00000050',
					mt: 4
				}}
				dangerouslySetInnerHTML={{ __html: props.code }}
			/>
		</>
	)
}

const CodeTab = (props: {
	code: string; isAnswer: boolean, setTabCode: React.Dispatch<React.SetStateAction<string>>, style: string, setTabStyle: React.Dispatch<React.SetStateAction<string>>
}) => {
	return (
		<>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between'
				}}
			>
				<TextField
					id=''
					label='コード'
					multiline
					value={props.code}
					size='small'
					rows={10}
					fullWidth
					sx={{ backgroundColor: '#fff', width: '49%' }}
					onChange={e => {
						if (props.isAnswer) return
						props.setTabCode(e.target.value)
					}}
				/>

				<TextField
					id=''
					label='スタイル'
					multiline
					value={props.style}
					size='small'
					rows={10}
					fullWidth
					sx={{ backgroundColor: '#fff', width: '49%' }}
					onChange={e => {
						if (props.isAnswer) return
						props.setTabStyle(e.target.value)
					}}
				/>
			</Box>
			<style dangerouslySetInnerHTML={{ __html: props.style }} />
			<Box
				sx={{
					width: '100%',
					backgroundColor: '#fff',
					height: '40vh',
					overflowY: 'auto',
					border: 'solid 1px #00000050',
					mt: 4
				}}
				dangerouslySetInnerHTML={{ __html: props.code }}
			/>
		</>
	)
}

const Lesson = () => {
	const [isLoading, setIsLoading] = useState(false)
	const [title, setTitle] = useState('')
	const [detail, setDetail] = useState('')
	const [code, setCode] = useState('')
	const [style, setStyle] = useState('')
	const [tabValue, setTabValue] = React.useState('1')

	const [tabCode, setTabCode] = useState('')
	const [tabStyle, setTabStyle] = useState('')

	const params = useParams()
	const subjectId = params.subjectId?.toString() ?? ''
	const taskId = params.taskId

	const color = import.meta.env.VITE_APP_BACK_COLOR
	const url = import.meta.env.VITE_APP_URL

	useEffect(() => {
		(async () => {
			setIsLoading(true)
			const formData = new FormData()
			formData.append('id', subjectId)
			const res = await fetch(
				`${url}getTasksById?id=${taskId}`
			)
			const data = await res.json()
			setTitle(data.title)
			setDetail(data.detail)
			setCode(data.code)
			setStyle(data.style)
			setIsLoading(false)
			console.log(data)
		})()
	}, [])

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
				<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
					<Box fontSize='h4.fontSize' fontStyle='normal'>
						{title}
					</Box>
					<Box>
						<Box
							// size='small'
							sx={{
								cursor: 'pointer',
								textDecoration: 'underline',
								height: 0,
								marginTop: '20px'
							}}
							onClick={() => {
								window.history.back()
							}}
						>
							一覧に戻る
						</Box>
					</Box>
				</Box>
				<Box sx={{ width: '100%', typography: 'body1' }}>
					<TabContext value={tabValue}>
						<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
							<TabList
								onChange={(_e, newValue) => {
									setTabValue(newValue)
								}}
								aria-label='lab API tabs example'
							>
								<Tab label='説明' value='1' />
								<Tab label='コーディング' value='2' />
								<Tab label='答え' value='3' />
							</TabList>
						</Box>
						<TabPanel value='1' sx={{ p: 0, mt: 4 }}>
							<DetailTab
								detail={detail}
								code={code}
								style={style}
							/>
						</TabPanel>
						<TabPanel value='2' sx={{ p: 0, mt: 4 }}>
							<CodeTab
								code={tabCode}
								style={tabStyle}
								isAnswer={false}
								setTabCode={setTabCode}
								setTabStyle={setTabStyle}
							/>
						</TabPanel>
						<TabPanel value='3' sx={{ p: 0, mt: 4 }}>
							<CodeTab
								code={code}
								style={style}
								isAnswer={true}
								setTabCode={setTabCode}
								setTabStyle={setTabStyle}
							/>
						</TabPanel>
					</TabContext>
				</Box>
			</Box>
		</Box>
	)
}

export default Lesson
