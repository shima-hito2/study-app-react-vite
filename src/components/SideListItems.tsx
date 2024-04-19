import * as React from 'react'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import HtmlIcon from '@mui/icons-material/Html'
import CssIcon from '@mui/icons-material/Css'
import JavascriptIcon from '@mui/icons-material/Javascript'
import PhpIcon from '@mui/icons-material/Php'
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions'

import DashboardIcon from '@mui/icons-material/Dashboard'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Link, useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'

const AdminMode = () => {
	return (
		<>
			<ListItemButton sx={{ pr: 8 }} component={Link} to='/admin/subject'>
				<ListItemIcon>
					<DashboardIcon />
				</ListItemIcon>
				<ListItemText primary='科目マスタ' />
			</ListItemButton>
			<ListItemButton sx={{ pr: 8 }} component={Link} to='/admin/task'>
				<ListItemIcon>
					<ShoppingCartIcon />
				</ListItemIcon>
				<ListItemText primary='課題登録' />
			</ListItemButton>
		</>
	)
}

const UserMode = () => {
	const [rows, setRows] = useState<{ id: string, name: string }[]>([])
	const params = useParams()
	const subjectId = params.subjectId

	const url = import.meta.env.VITE_APP_URL

	const setSubjectList = async () => {
		const res = await fetch(`${url}getSubjectAll`)
		const data = await res.json()
		setRows(data)
	}

	useEffect(() => {
		(async () => {
			await setSubjectList()
			console.log(params)
		})()
	}, [])
	return (
		<>
			{rows.map(row => (
				<ListItemButton
					sx={{ pr: 8 }}
					component={Link}
					to={`/task/${row.id}`}
					key={row.id}
					selected={subjectId === row.id.toString()}
				>
					<ListItemIcon>
						<Icons name={row.name} />
					</ListItemIcon>
					<ListItemText primary={row.name} />
				</ListItemButton>
			))}
		</>
	)
}

const Icons = (props: { name: string }) => {
	switch (props.name) {
		case 'HTML':
			return <HtmlIcon />
		case 'CSS':
			return <CssIcon />
		case 'JavaScript':
			return <JavascriptIcon />
		case 'PHP':
			return <PhpIcon />
		default:
			return <IntegrationInstructionsIcon />
	}
}

const MainListItems = () => {
	const pathname = useLocation().pathname
	const isAdmin = pathname.indexOf('admin') === 1
	return (
		<React.Fragment>
			{isAdmin ? <AdminMode /> : <UserMode />}
		</React.Fragment>
	)
}

export default MainListItems
