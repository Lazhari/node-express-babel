import express from 'express';

const app = express();

app.get('/', (req, res) => {
	return res.send({
		message: 'Express application using ES2015 and Babel'
	});
});

app
	.listen(3400)
	.on('listening', () => {
		console.log('The magic happens on port 3400');
	})
	.on('error', error => {
		console.error(`Something wrong, ${error.message}`);
	});
