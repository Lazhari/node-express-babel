import chai from 'chai';
import chaiHttp from 'chai-http';

import app from '../src';

const should = chai.should();

chai.use(chaiHttp);

describe('/', () => {
	context('GET', () => {
		it('Should return 200 as status code', done => {
			chai
				.request(app)
				.get('/')
				.end((err, res) => {
					res.should.have.status(200);
					done(err);
				});
		});
	});
});
