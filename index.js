const http = require('http');

const PORT = 3000;

const server = http.createServer();

const friends = [
	{
		id: 0,
		name: 'Nikola Tesla'
	},
{
	id: 1,
	name: 'Sir Isaac Newton',
},
{
	id: 2,
	name: 'Albert Einstein'
}
];

server.on('request', (req, res) => {
	const items = req.url.split('/');
	if(items[1] === 'friends') {
	// res.writeHead(200, {
	// 	'Content-Type': 'text/plain',
	// });
	res.statusCode = 200;
	res.setHeader('Content-Type', 'application/json');
	//res.end('Hello! Sir Isaac Newton is your friend!');
	if(items.length === 3){
		const friendIndex = +(items[2]);		
		res.end(JSON.stringify(friends[friendIndex]));
	} else {
		res.end(JSON.stringify({friends}
		
	));
}} else if (items[1] === 'messages') {
	res.setHeader('Content-Type', 'text/html');
	res.write('<html>');
	res.write('<body>');
	res.write('<ul>');
	res.write('<li>Hello Isaac!</li>');
	res.write('<li>What are you thoughts on astronomy?</li>');
	res.write('</ul>');
	res.write('</body>');
	res.write('</html>');
	res.end();
} else {
	res.statusCode = 404;
	res.end();
}
});

server.listen(PORT, () => {
	console.log(`listening on port ${PORT}...`);
});