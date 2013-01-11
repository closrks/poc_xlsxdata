var timeViewRowObjects = [
	{
		key: 'date'
		, values: [
			  'series1'
			, 'series2'
		]
	}
	, {
		key: new Date()
		, values: [
			  1
			, 2
		]
	}
	, {
		key: new Date()
		, values: [
			  3
			, 4
		]
	}
]

var file = {
	worksheets: [{}], // worksheets has one empty worksheet (array)
	creator: 'Carlos Avila', created: new Date('01/10/2013'),
	lastModifiedBy: 'Carlos Avila', modified: new Date(),
	activeWorksheet: 0
};

var w = file.worksheets[0];
w.name = 'test';
w['data'] = [];

timeViewRowObjects.forEach(function(tvd) {
	w.data.push([tvd.key].concat(tvd.values));
});

window.location = xlsx(file).href();
