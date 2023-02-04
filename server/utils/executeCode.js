const fs = require('fs')
const path = require('path')
const util = require('util')
const { exec } = require('child_process')
// const exec = util.promisify(require('child_process').exec)

/* creating ./outputs folder if doesn't exists */
const outputsPath = path.join(__dirname, '..', 'outputs')
if (!fs.existsSync(outputsPath)) {
	fs.mkdirSync(outputsPath, { recursive: true })
}

const executeCpp = (filepath) => {
	const jobId = path.basename(filepath).split('.')[0]
	const outPath = path.join(outputsPath, `${jobId}.exe`)

	return new Promise((resolve, reject) => {
		exec(
			`g++ ${filepath} -o ${outPath} & cd ${outputsPath} & .\\${jobId}`,
			(error, stdout, stderr) => {
				error && reject({ error, stdout })
				stderr && reject({ stderr })
				resolve(stdout)
			}
		)
	})
}

module.exports = {
	executeCpp,
}
