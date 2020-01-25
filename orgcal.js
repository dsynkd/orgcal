const http = require('https');
const auth_token = 'ya29.Il-7B28T8otKV5g5bMmpoWVifPG9bFMZYnjjaSTgK2msPuHCjm_O-NABzaRiOq8QC935ALmbp6_1zoC5IH5eeYWxZ_Vw2ZiTB9xfPkCz-YuRtFmFm8rInlW9YmAVZefoLw';
const api_host = 'www.googleapis.com';
const api_path = '/calendar/v3/users/me/calendarList';

let request_body = {
	host: api_host,
	port: 443,
	path: api_path,
	method: 'GET',
	headers: {
		Authorization: 'Bearer ' + auth_token
	}
};

const req = http.request(request_body, res => {
	res.setEncoding("utf8");
	let body = "";

	res.on("data", data => {
		body += data;
	});

	res.on("end", () => {
		body = JSON.parse(body);
		console.log(body);
	});
});

req.on('error', error => {
	console.error(error);
})

req.end();
