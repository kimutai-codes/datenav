const { format } = require('date-fns');
const fs = require('fs');
const add = require('date-fns/add');
const sub = require('date-fns/sub');
const path = require('path');

const dirPath = '/home/kim/test';
//read directory and return file names
const files = fs.readdirSync(dirPath);

files.forEach((file, index) => {
	//strip md part and convert to date
	const strippedFileName = file.replace('.md', '');
	const fileDate = new Date(strippedFileName);
  //check if what wre are handling is a real day(journal entry)
	if (fileDate != 'Invalid Date') {
		const date = format(new Date(fileDate), 'yyyy-MM-dd');

		let nextDay = add(new Date(date), { days: 1 });
		const nextDate = format(new Date(nextDay), 'yyyy-MM-dd');

		let prevDay = sub(new Date(date), { days: 1 });
		const prevDate = format(new Date(prevDay), 'yyyy-MM-dd');

		const fileLocation = path.join(dirPath, file);
		//write the file
		fs.writeFile(
			fileLocation,
			`<<${prevDate}|${nextDate}>>`,
			{ flag: 'w+' },
			(err) => {}
		);
	}
});

console.log('Done!');
