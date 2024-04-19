import {
	Box,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	TextField
} from '@mui/material'
import { useEffect, useState } from 'react'
import RegistButton from '../../../components/RegistButton'
import Loading from '../../../components/Loading'

const RegistTask = () => {
	const [subject, setSubject] = useState('')
	const [title, setTitle] = useState('')
	const [code, setCode] = useState('')
	const [style, setStyle] = useState('')
	const [detail, setDetail] = useState('')
	const [rows, setRows] = useState<{ id: string, name: string }[]>([])
	const [isLoading, setIsLoading] = useState(false)

	const color = import.meta.env.VITE_APP_BACK_COLOR
	const url = import.meta.env.VITE_APP_URL

	useEffect(() => {
		(async () => {
			await setSubjectList()
		})()
	}, [])

	const setSubjectList = async () => {
		setIsLoading(true)
		const res = await fetch(`${url}getSubjectAll`)
		const data = await res.json()
		setRows(data)
		setIsLoading(false)
	}

	const form = document.forms[0]
	// const form = document.getElementById('RegistTaskForm')

	const handleRegist = async () => {
		const formData = new FormData(form)
		const action = form.getAttribute('action') ?? ''
		const options = {
			method: 'POST',
			body: formData
			// mode: 'no-cors'
		}
		await fetch(action, options)
		alert('submit')
	}

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
					課題登録画面
				</Box>

				<Box
					sx={{
						display: 'flex',
						mt: 2,
						justifyContent: 'space-between'
					}}
				>
					<Box sx={{ mt: 2, width: '300px' }}>
						<FormControl fullWidth size='small' sx={{ mt: -2 }}>
							<InputLabel id='demo-select-small-label'>
								科目選択
							</InputLabel>
							<Select
								labelId='demo-select-small-label'
								id='demo-select-small'
								value={subject}
								label='科目選択'
								sx={{ backgroundColor: '#fff' }}
								onChange={e => {
									setSubject(e.target.value)
									console.log(e.target.value)
								}}
							>
								{rows.map(row => (
									<MenuItem value={row.id} key={row.id}>
										{row.name}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</Box>
					<form
						id='RegistTaskForm'
						method='POST'
						action={`${url}registTask`}
					>
						<input
							type='text'
							name='title'
							value={title}
							readOnly
							style={{ display: 'none' }}
						/>
						<textarea
							name='detail'
							value={detail}
							readOnly
							style={{ display: 'none' }}
						/>
						<textarea
							name='code'
							value={code}
							readOnly
							style={{ display: 'none' }}
						/>
						<textarea
							name='style'
							value={style}
							readOnly
							style={{ display: 'none' }}
						/>
						<textarea
							name='subject_id'
							value={subject}
							readOnly
							style={{ display: 'none' }}
						/>
						<RegistButton
							onClick={handleRegist}
							sx={{ width: 150, height: '40px' }}
						>
							登録
						</RegistButton>
					</form>
				</Box>

				<Box sx={{ m: 2 }} />

				<Box sx={{ display: 'flex', mt: 2 }}>
					<Box sx={{ width: '500px' }}>
						<TextField
							id=''
							label='題名'
							value={title}
							size='small'
							fullWidth
							sx={{ backgroundColor: '#fff' }}
							onChange={e => {
								setTitle(e.target.value)
							}}
						/>
					</Box>

					<Box sx={{ m: 2 }} />
				</Box>

				<Box sx={{ m: 2 }} />

				<Box sx={{ width: '100%' }}>
					<TextField
						id=''
						label='説明'
						multiline
						value={detail}
						size='small'
						rows={10}
						fullWidth
						sx={{ backgroundColor: '#fff' }}
						onChange={e => {
							setDetail(e.target.value)
						}}
					/>

					<Box sx={{ m: 2 }} />

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
							value={code}
							size='small'
							rows={10}
							fullWidth
							sx={{ backgroundColor: '#fff', width: '49%' }}
							onChange={e => {
								setCode(e.target.value)
							}}
						/>

						<TextField
							id=''
							label='スタイル'
							multiline
							value={style}
							size='small'
							rows={10}
							fullWidth
							sx={{ backgroundColor: '#fff', width: '49%' }}
							onChange={e => {
								setStyle(e.target.value)
							}}
						/>
					</Box>
					<style dangerouslySetInnerHTML={{ __html: style }} />
					<Box
						sx={{
							width: '100%',
							border: 'solid 1px #00000050',
							minHeight: '100px',
							mt: 2
						}}
						dangerouslySetInnerHTML={{ __html: code }}
					/>
				</Box>
				<Box sx={{ m: 2 }} />
			</Box>
		</Box>
	)
}

export default RegistTask
