import { useState } from 'react'
import axios from 'axios'

function App() {
	const [code, setCode] = useState('')

	const handleSubmit = async () => {
		const payload = {
			language: 'cpp',
			code: code,
		}

    console.log(payload)

		try {
			const { data } = await axios.post(
				'http://localhost:5000/api/run',
				payload
			)
			console.log(data)
		} catch (err) {
			console.error(err)
		}
	}

	const handleTabPress = (e) => {
		if (e.keyCode === 9) {
			e.preventDefault()
			const start = e.target.selectionStart
			const end = e.target.selectionEnd
			e.target.value =
				e.target.value.substring(0, start) +
				'    ' +
				e.target.value.substring(end)
			e.target.selectionStart = e.target.selectionEnd = start + 4
		}
	}

	return (
		<div className='App'>
			<h1>Online code compiler</h1>
			<textarea
				value={code}
				onChange={(e) => setCode(e.target.value)}
				onKeyDown={handleTabPress}
				cols='75'
				rows='20'
			></textarea>
			<br />
			<button onClick={handleSubmit}>Submit</button>
		</div>
	)
}

export default App
