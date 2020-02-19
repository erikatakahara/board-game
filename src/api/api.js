import xmlToJson from './xml-parser';

const SEARCH_API = 'https://api.geekdo.com/xmlapi2/search',
	THING_API = 'https://api.geekdo.com/xmlapi2/thing',
	TYPE = 'boardgame';

const list = function(query, callback) {
	let url = new URL(SEARCH_API),
		params = { query: query, type: TYPE };

	url.search = new URLSearchParams(params);
	fetch(url.href)
		.then(resp => resp.text())
		.then(body => callback.success(xmlToJson(body)))
		.catch(callback.error);
};

const get = function(id, callback) {
	let url = new URL(THING_API),
		params = { id: id };

	url.search = new URLSearchParams(params);
	fetch(url.href)
		.then(resp => resp.text())
		.then(body => callback.success(xmlToJson(body)))
		.catch(callback.error);
};

module.exports = {
	list: list,
	get: get,
};