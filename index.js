const { format } = require('date-fns');
const fs = require('fs');
const add = require('date-fns/add');
const sub = require('date-fns/sub');

const dirPath = '/home/kim/test';
//read directory and return file names
const files = fs.readdirSync(dirPath);

files.forEach((file, index) => {
	//strip md part and convert to date
	const strippedFileName = file.replace('.md', '');
	const fileDate = new Date(strippedFileName);
	if (fileDate != 'Invalid Date') {
		const date = format(new Date(strippedFileName), 'yyyy-MM-dd');
		let nextDay = add(new Date(date), { days: 1 });
		let prevDay = sub(new Date(date), { days: 1 });
		const nextDate = format(new Date(nextDay), 'yyyy-MM-dd');
		const PrevDate = format(new Date(prevDay), 'yyyy-MM-dd');
		console.log(PrevDate, nextDate);
	}
});
