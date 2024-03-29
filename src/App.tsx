import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// import Operate from './Operate';
import Admin from './pages/admin/Admin'
import SubjectMaster from './pages/admin/master/SubjectMaster'
import RegistTask from './pages/admin/master/RegistTask'
import Top from './pages/Top'
import Tasks from './pages/Tasks'
import Lesson from './pages/Lesson'

function App() {
	return (
		// <BrowserRouter>
		//   <Routes>
		//     <Route exact path='/' element={<Operate />} />
		//     <Route exact path='/admin' element={<Admin />} />
		//   </Routes>
		// </BrowserRouter>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Top />}>
					<Route path='/task/:subjectId' element={<Tasks />} />
					<Route
						path='/task/:subjectId/detail/:taskId'
						element={<Lesson />}
					/>
				</Route>
				<Route path='/admin' element={<Admin />}>
					{/* elementを追加 */}
					<Route path='/admin/subject' element={<SubjectMaster />} />
					<Route path='/admin/task' element={<RegistTask />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
