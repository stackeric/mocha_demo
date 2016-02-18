var request = require('supertest')
  , express = require('express');
    var app     = require('../app');
    var expect = require('chai').expect;
    var assert = require('assert');
    var log4js = require('log4js');
    var logger = log4js.getLogger();

describe('get /users', function(){
    it('should return all info', function(done){
    request(app)
        .get('/users')
        .expect(function(res) {
                logger.debug(res.body);
                assert.equal(res.statusCode,200,'status code not 200');
            })
        .end(function(err, res){
            done();
        })
  })
});
describe('get /users/age', function(){
    it('should return age', function(done){
    request(app)
        .get('/users/age')
        .expect(function(res) {
                logger.debug(res.body);
                assert.equal(res.statusCode,200,'status code not 200');
            })
        .end(function(err, res){
            done();
        })
  })
});
