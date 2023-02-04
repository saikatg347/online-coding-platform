const generateFile = require('../utils/generateFile')
const { executeCpp } = require('../utils/executeCode')

// DESC Run code
// ROUTE  POST /api/run
// ACCESS Private
const runCode = async (req, res) => {
	const { language = 'cpp', code } = req.body

	if (!code) {
		return res.status(400).json({ success: false, error: 'Empty code body' })
	}

	try {
		const filepath = await generateFile(language, code)
		const output = await executeCpp(filepath)
		res.json({ filepath, output })
	} catch (err) {
		res.status(500).json({ err })
	}
}

module.exports = {
	runCode,
}


