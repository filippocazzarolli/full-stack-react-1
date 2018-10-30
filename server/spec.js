var app = require('./server');
var request = require('supertest');
var chai = require('chai').expect;

describe('[TODO]', function () {

    it('should GET all todos', function (done) {
        request(app)
            .get('/api/todo')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function (err, resp) {
                chai(resp.body).to.be.an('array');
                done();
            })
    });

    it('should POST new todo', function (done) {
        request(app)
            .post('/api/todo')
            .send({
                title: 'test mocha todo'
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function (err, resp) {
                var todos = resp.body;
                chai(todos).to.be.an('array');
                done();
            })
    });

    it('should DELETE new todo', function (done) {
        request(app)
            .post('/api/todo')
            .send({
                title: 'test mocha todo'
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function (err, resp) {
                var todos = resp.body;
                var todo = todos[todos.length-1];
                request(app)
                    .delete('/api/todo/' + todo.id)
                    .end(function (err, resp) {
                        chai(resp.body).to.be.eql(todo)
                        done();
                    })
            })
    });


});