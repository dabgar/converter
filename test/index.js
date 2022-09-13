// Requiring module
const assert = require('assert');
const index =require("../index")


describe( "Test1", () => {
 beforeEach(() => {
 console.log( "executes before every test" );
 });
 
 it("Is returning 5 when converting roman to arabic", () => {
   
 assert.equal(index.checkNum('V'),5);
 });

 it("Is returning V when converting arabic to roman", () => {
 assert.equal(index.checkNum(5),'V');
 });

 it("return not a valid roman Number", () => {
    assert.equal(index.checkNum(789),'DCCLXXXIX');
    });

 it("return not a valid roman Number", () => {
    assert.equal(index.checkNum('MMMM'),'not a valid Roman number');
    });
});


